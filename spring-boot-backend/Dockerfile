FROM maven:3.8.7-eclipse-temurin-19

WORKDIR /app
COPY . .
RUN mvn clean install

CMD mvn spring-boot:run