const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';


        //middlewares
        this.middlewares();


        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        //cors capa de seguridad superficial
        this.app.use( cors() );
        //Lectura y parseo del body
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static( 'public' ));
    }

    routes(){
        //se definen mis rutas 
       this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        //establece el puerto de salida 
        this.app.listen( this.port, () => {
            console.log('Servidor Corriendo en el puerto ', this.port);
        })
    }

}

module.exports  = Server;
