# Docker-Microservicios
Este proyecto ha sido concebido con el objetivo de crear una plataforma de microservicios fundamental. Siguiendo la arquitectura de microservicios, esta plataforma proporciona la capacidad de realizar una variedad de operaciones, incluyendo la creación, búsqueda, actualización y eliminación de información relacionada con personajes, planetas y películas dentro del universo de la franquicia Star Wars.

Para llevar a cabo este desarrollo, hemos utilizado el framework ExpressJS y hemos implementado una base de datos persistente utilizando MongoDB, aprovechando la funcionalidad de Mongoose como ORM para facilitar la manipulación de datos entre la aplicación y la base de datos.

Este proyecto se divide en cinco aplicaciones independientes que interactúan entre sí mediante solicitudes HTTP:

 - Gateway: Este actúa como el punto de entrada principal para la plataforma.
 - Servicios de Personajes, Películas y Planetas: Estos servicios están configurados para realizar operaciones CRUD y se encargan de gestionar la manipulación de datos relacionados con personajes, películas y planetas. Sin embargo, solo son accesibles a través del gateway.
- Servicio de Base de Datos: Este servicio administra la conexión a la base de datos y se encarga de enviar y recuperar datos desde y hacia la misma.
Además de la funcionalidad principal, este proyecto ha sido contenerizado utilizando Docker Compose, lo que facilita su implementación. Para ejecutar la plataforma, simplemente es necesario copiar el repositorio y ejecutar localmente el comando docker-compose up.

# Instrucciones para levantar en local

- Crearse una base de datos en mongoDB.
- Crear un .env con las variable MONGO_URI dentro de la carpeta database.
- Abrir una terminal ubicada en la carpeta Docker-Microservicios.
- Ejecutar el comando docker-compose build.
- Ejecutar el comando docker-compose up.

