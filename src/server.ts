import express from "express";
import routes = require('./routes/index');


class Server{

    private PORT = 3000;
    private app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    private config(){
        this.app.set('port', process.env.PORT || this.PORT );
    }

    private routes(){
        this.app.use('/', routes );
    }

    public start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Servidor ejecutandose en el puerto ${this.app.get('port')}`);
        });
    }
}

const server = new Server();
server.start();



