// Chatbot.jsx

import React, { useState, useEffect } from 'react';
import Map from './Map';
import 'leaflet/dist/leaflet.css';
import './Chatbot.css';
import { listDonors } from '../services/DonorService';
import { listRecipients } from '../services/ReceiveService';

const calculateDistance = (point1, point2) => {
  const R = 6371;
  const dLat = toRadians(point2.latitude - point1.latitude);
  const dLng = toRadians(point2.longitude - point1.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.latitude)) * Math.cos(toRadians(point2.latitude)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
};

const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [location, setLocation] = useState(null);
  const [donorData, setDonorData] = useState(null);
  const [recipientData, setRecipientData] = useState(null);
  const [bloodGroupToCheck, setBloodGroupToCheck] = useState(null);

  const getCurrentPosition = () => {
    const navigatorLocation = navigator.geolocation;

    navigatorLocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const coordinatesMessage = `Your current coordinates are: ${latitude}, ${longitude}`;
        addMessage(coordinatesMessage, true);
        setLocation({ latitude, longitude });
      },
      (error) => {
        const errorMessage = `Error getting location: ${error.message}`;
        addMessage(errorMessage, true);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const handleUserInput = async () => {
    const inputDetails = input.split(' ');

    switch (inputDetails[0]) {
      case '/start':
        welcomeMessage();
        break;
      case '/getlocation':
        getCurrentPosition();
        break;
      case '/getdonors':
        await fetchDonorsAndShowMap();
        break;
      case '/exit':
        console.log('Exiting Chatbot. Goodbye!');
        break;
      case '/receive':
        const bloodGroup = inputDetails[1];
        if (bloodGroup) {
          addMessage(`Fetching details for recipients with blood group ${bloodGroup}...`);
          await fetchAndShowRecipientDetailsByBloodGroup(bloodGroup);
          setBloodGroupToCheck(bloodGroup);
        } else {
          addMessage('Please provide a valid blood group to fetch recipient details.');
        }
        break;
      default:
        console.log('Invalid command. Please try again.');
        break;
    }
  };

  const fetchDonorsAndShowMap = async () => {
    try {
      const response = await listDonors();
      setDonorData(response.data);
      addMessage('Donor data fetched successfully!');
      showDonorsOnMap(response.data);
    } catch (error) {
      console.error('Error fetching donor data:', error.message);
      addMessage('Error fetching donor data. Please try again.', true);
    }
  };

  const fetchAndShowRecipientDetailsByBloodGroup = async (bloodGroup) => {
    try {
      const response = await listRecipients();
      const allRecipientData = response.data;

      if (allRecipientData && allRecipientData.length > 0) {
        const matchingRecipients = allRecipientData.filter(
          (recipient) => recipient.availability && recipient.availability[bloodGroup] > 0
        );

        setRecipientData(matchingRecipients);
        if (matchingRecipients.length > 0) {
          addMessage(`Recipient details for blood group ${bloodGroup}:`);
          matchingRecipients.forEach((recipient) => {
            const recipientDetailsMessage = `Name: ${recipient.name}, Coordinates: ${recipient.location.coordinates[1]}, ${recipient.location.coordinates[0]}, Availability: ${recipient.availability[bloodGroup]}`;
            addMessage(recipientDetailsMessage, true);
          });
        } else {
          addMessage(`No recipients available for blood group ${bloodGroup}.`);
        }
      } else {
        addMessage('No recipient data available.');
      }
    } catch (error) {
      console.error('Error fetching recipient data:', error.message);
      addMessage('Error fetching recipient data. Please try again.', true);
    }
  };

  const showDonorsOnMap = (donors) => {
    if (donors && donors.length > 0) {
      const userCoords = {
        latitude: location.latitude,
        longitude: location.longitude,
      };

      donors.sort((a, b) => {
        const distanceA = calculateDistance(userCoords, {
          latitude: a.location.coordinates[1],
          longitude: a.location.coordinates[0],
        });
        const distanceB = calculateDistance(userCoords, {
          latitude: b.location.coordinates[1],
          longitude: b.location.coordinates[0],
        });

        return distanceA - distanceB;
      });

      const nearestDonors = donors.slice(0, 5);

      setLocation({
        latitude: userCoords.latitude,
        longitude: userCoords.longitude,
      });

      nearestDonors.forEach((donor) => {
        const donorCoordinatesMessage = `Donor Coordinates: ${donor.location.coordinates[1]}, ${donor.location.coordinates[0]}, Phone: ${donor.phone}`;
        addMessage(donorCoordinatesMessage, true);
      });
    } else {
      addMessage('No donor data available.');
    }
  };

  const welcomeMessage = () => {
    addMessage('Welcome to the Chatbot!');
    addMessage("Enter '/getlocation' to get your current location.");
    addMessage("Enter '/getdonors' to fetch donor data.");
    addMessage("Enter '/receive' to fetch details for recipients with a specific blood group.");
  };

  const addMessage = (text, user = false) => {
    setMessages((prevMessages) => [...prevMessages, { text, user }]);
  };

  useEffect(() => {
    welcomeMessage();
  }, []);

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        Plasma Bot:
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user-message' : 'ai-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      {location && <Map location={location} donorData={donorData} recipientData={recipientData} bloodGroupToCheck={bloodGroupToCheck} />}
      <form
        className="chatbot-input-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUserInput();
          setInput('');
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your command..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
