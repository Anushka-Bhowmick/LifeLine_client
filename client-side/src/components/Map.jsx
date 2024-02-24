import React, { useState } from 'react';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Map.css'
import 'leaflet/dist/leaflet.css';
import emailjs from '@emailjs/browser';

const templateParams = {
    name: 'James',
    notes: 'Check this out!'
};

emailjs.send('service_a227sak', 'template_rg073w3', templateParams, 'aHkh-oopuTunVtPKB')
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
        console.log('FAILED...', err);
    });

const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const Map = ({ location, donorData, recipientData, bloodGroupToCheck }) => {
    const notify = () => {
        toast.success("Email Sent Successfully !");
    };

    const nearestDonors = donorData && donorData.slice(0, 5);
    const [selectedRecipient, setSelectedRecipient] = useState(null);

    const displayAvailability = (availability, bloodGroup) => {
        if (availability && bloodGroup) {
            return `Availability for ${bloodGroup}: ${availability[bloodGroup]};`;
        } else {
            return 'No availability information available.';
        }
    };

    const sendMailToRecipient = (recipient) => {
        console.log(`Sending email to ${recipient.email}`);
    };

    return (
        <>
            <MapContainer
                center={[location.latitude, location.longitude]}
                zoom={13}
                style={{ height: '500px', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[location.latitude, location.longitude]} icon={blueIcon}>
                    <Popup>Your location</Popup>
                </Marker>

                {nearestDonors &&
                    nearestDonors.map((donor, index) => (
                        <Marker
                            key={index}
                            position={[
                                donor.location.coordinates[1],
                                donor.location.coordinates[0],
                            ]}
                            icon={redIcon}
                        >
                            <Popup>
                                <div>
                                    <h3>{donor.name}</h3>
                                    <p>Address: {donor.address}</p>
                                    <p>Coordinates: {donor.location.coordinates.join(', ')}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                    
                {recipientData &&
                    recipientData.map((recipient, index) => (
                        <Marker
                            key={index}
                            position={[
                                recipient.location.coordinates[1],
                                recipient.location.coordinates[0],
                            ]}
                            icon={greenIcon}
                        >
                            <Popup>
                                <div>
                                    <h3>{recipient.name}</h3>
                                    <p>Coordinates: {recipient.location.coordinates.join(', ')}</p>
                                    <p>{displayAvailability(recipient.availability, bloodGroupToCheck)}</p>
                                    <button onClick={() => { setSelectedRecipient(recipient); }}>Select</button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                {selectedRecipient && (
                    <Popup position={[
                        selectedRecipient.location.coordinates[1],
                        selectedRecipient.location.coordinates[0],
                    ]} onClose={() => setSelectedRecipient(null)}>
                        <div>
                            <h3>{selectedRecipient.name}</h3>
                            <p>Coordinates: {selectedRecipient.location.coordinates.join(', ')}</p>
                            <p>{displayAvailability(selectedRecipient.availability, bloodGroupToCheck)}</p>
                            <button
                                onClick={() => {
                                    sendMailToRecipient(selectedRecipient);
                                    notify();
                                }}>Send Email</button>
                        </div>
                    </Popup>
                )}
                <ToastContainer />
            </MapContainer>
        </>
    );
};
export default Map;
