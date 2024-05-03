# Mi Repertorio

## Descripción

La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en vivo y se puso en contacto con el restaurante del sector para usar su tarima e 
iniciar un calendario de presentaciones. 
Para conocer y gestionar las canciones que cantarán sus estudiantes, la escuela contrató a un desarrollador freelance para la creación de una aplicación tipo CRUD.

El servidor tiene las siguientes rutas:

- POST /cancion: Recibe los datos correspondientes a una cancion y realiza la insercion en la tabla canciones.

- GET /canciones: Devuelve un JSON con los registros de la tabla canciones.

- PUT /cancion: Recibe los datos de una cancion que se desea editar y ejecuta una funcion asincrona para hacer la consulta SQL y actualice ese registro de la tabla canciones.

- DELETE /cancion: Recibe por queryString el id de una cancion y realiza una consulta SQL a traves de una funcion asincrona para eliminarla de la base de datos.
## Visuales 

![1](https://github.com/MacarenaQuijadaG/Mi-Repertorio/assets/50925916/78a01ed6-434e-43e2-b7c6-205730e9b123)


## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

-  "express": "^4.19.2",
-  "node": "^18.0.4",
-  "pg": "^8.11.5",


### Instalación 🔧

Una guía paso a paso sobre cómo configurar el entorno de desarrollo e instalar todas las dependencias.

#paso 1
instalar las dependencias con npm i creando la carpeta node_modules.

## Ejecutando las Pruebas ⚙️

Instrucciones y ejemplos para ejecutar el conjunto de pruebas.

####  node serverExpress.js complementando con esta informacion:

- node serverExpress 

## Despliegue 📦

Se desplega a travez de la consola de visual studio con power shell.

## Construido Con 🛠️

Explica qué tecnologías usaste para construir este proyecto. Aquí algunos ejemplos:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - El lenguaje utilizado
- [Express](https://expressjs.com/en/5x/api.html)- El framework web utilizado
- [postgres](https://www.postgresql.org/docs/) - Gestor de Base de Datos

---

⌨️ con ❤️ por [Macarena Quijada G](https://github.com/MacarenaQuijadaG) 😊
