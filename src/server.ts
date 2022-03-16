import express from "express";
import RouterIndex from './routes/index';
import dotenv from 'dotenv'
dotenv.config()



class Server{

    private app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    private config(){
        this.app.set('port', process.env.HTTP_PORT  );
    }

    private routes(){
        this.app.use('/api', RouterIndex.build() );
    }

    public start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Servidor ejecutandose en el puerto ${this.app.get('port')}`);
        });
    }
}

const server = new Server();
server.start();



