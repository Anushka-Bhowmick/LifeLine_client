# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the Maven executable JAR file and the POM file to the container
COPY ./target/BloodBank-0.0.1-SNAPSHOT.jar app.jar
COPY ./pom.xml .


# Specify the default command to run on container startup
CMD ["java", "-jar", "app.jar"]
