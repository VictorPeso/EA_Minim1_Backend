# Backend per al Mínim 1 d'EA a la UPC-EETAC [14/4/2026 - QP2526]

## Repositoris de GitHub

- **Frontend:** https://github.com/VictorPeso/EA_Minim1_BackOffice.git

## Decisions de disseny i implementació

Amb l'objectiu de facilitar el manteniment i l'escalabilitat del backend, s'ha adoptat una metodologia de treball basada en l'estructura interna del flux de dades dins del sistema. Concretament, un
cop definit un nou model i el seu esquema associat, el procés de desenvolupament s'ha dut a terme seguint els passos següents:

1. **Creació del service**  
   S'ha desenvolupat un nou servei per encapsular l'accés del model a la base de dades i centralitzar la lògica de negoci corresponent.

2. **Creació del controller**  
   S'ha implementat el controlador encarregat de gestionar les peticions HTTP i d'interactuar amb el servei corresponent.

3. **Definició del middleware de validació**  
   Mitjançant **Joi**, s'han establert les regles de validació de les dades d'entrada, d'acord amb l'estructura definida al model.

4. **Definició de les rutes**  
   Finalment, s'han creat els endpoints necessaris per exposar les operacions CRUD a través de la interfície HTTP.

Aquest enfocament permet mantenir una arquitectura modular, clara i fàcilment ampliable davant de futures incorporacions.

---

# 📚 Plataforma de Libros y Eventos (API REST)

¡Amo la lectura y los eventos literarios! Este proyecto es el **Backend (API REST)** para una plataforma diseñada para que los amantes de los libros puedan comprar, alquilar, y asistir a eventos en
sus librerías favoritas. Además, incluye un sistema de chat para que compradores y vendedores puedan hablar entre sí.

Este proyecto está construido con **Node.js, Express, TypeScript y MongoDB (Mongoose)**.

---

## 🌟 Funcionalidades Principales

Hemos modelado 5 entidades principales en nuestra base de datos. Cada una tiene sus rutas para crear, leer, actualizar y borrar información (CRUD):

1. **🧑‍💻 Usuarios (`/usuarios`)**: Personas registradas en la plataforma.
2. **🏪 Librerías (`/librerias`)**: Los espacios físicos que organizan eventos y sirven de punto de intercambio de libros.
3. **📖 Libros (`/libros`)**: Obras puestas en subida por los usuarios para _"VENTA"_ o _"ALQUILER"_.
4. **🎟️ Eventos (`/eventos`)**: Actividades, charlas o clubes de lectura organizados por una librería.
5. **💬 Chats & Mensajes (`/chats` y `/mensajes`)**: Un sistema para que dos usuarios abran un canal de comunicación para hablar (por ejemplo, sobre un libro que quieren comprar).

---

## 🚀 ¿Cómo arrancar el proyecto?

Para ejecutar esta API en tu ordenador, asegúrate de tener **Node.js** y **MongoDB** instalados y funcionando localmente.

### 1. Instalar dependencias

Abre la terminal en la carpeta del proyecto y descarga todo lo necesario:

```bash
npm install
```

### 2. Arrancar el servidor

Compilamos el código de TypeScript y levantamos la API:

```bash
npm run go
```

_(Si todo va bien, verás en la consola que Mongo se ha conectado y el servidor corre en el puerto 1337)._

### 3. Ver la Documentación en Swagger 👀

¡No hace falta probar los Endpoints a ciegas con Postman! He preparado una interfaz gráfica para probar la API. Abre tu navegador una vez el servidor esté encendido y visita: 👉
**[http://localhost:1337/swagger](http://localhost:1337/swagger)**

---

## 🛠️ Tecnologías Utilizadas

- **Node.js & Express**: Para el servidor HTTP.
- **TypeScript**: Para que nuestro código sea más tipado y seguro.
- **Mongoose**: Para conectarnos a la base de datos de MongoDB.
- **Joi**: Para validar los datos (que no nos envíen campos sueltos o emails falsos).
- **Swagger**: Para la documentación visual de las rutas.
