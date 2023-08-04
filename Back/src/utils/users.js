// En este ejercicio construiremos un controlador que validará que el usuario
// que se está logeando tenga permiso. Para definir quienes tendrán permisos
// ve a tu carpeta utils y crea un archivo llamado users.js. 
//Aquí solo deberas exportar un arrgelo con un solo objeto. Este objeto debe tener esta estructura:

// module.exports = [{email: /*Tu email*/, password: /*Tu password*/}];
// Dentro de tu carpeta controllers crea un archivo llamado login.js.
// Dentro de este deberás crear y exportar una función que recibirá por parámetro a los objetos req y res.

// Deberás obtener los datos email y password que recibes mediante Query.
// Una vez hecho esto, importa tu arreglo de usuarios y verifica si dentro
// de ese arreglo hay un usuario que coincida tanto su email y su contraseña con los que recibes por Query.

// En el caso de que haya un usuario que cumpla esa condición, entonces debes
// devolver una respuesta con status 200, y, en formato JSON, un objeto con una propiedad access: true.
// Caso contrario devuelve lo mismo pero con la propiedad access: false.

module.exports = [{email:'franco@gmail.com', password:'messi123'}]