require('dotenv').config();
const { PORT } = process.env;
const { conn } = require('./src/DB_connection')

const {server} = require('./src/index')

// server.listen(PORT, () => {
//     //conn.sync({force:true})//elimina las tabla con sus registro y los vuelve a crear
//     //conn.sync({alter:true})//modifica las tablas sin eliminar 
//     console.log('Server raised in port: ' + PORT);
//   });

conn
.sync({force:true})
    .then(value=>{
        server.listen(PORT, () => {
            console.log('Server raised in port: ' + PORT);
        });
    })
.catch(err =>{console.log(err)})