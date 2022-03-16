import express from "express";
import clienteRouter =  require('./client.routes');


class RouterIndex{
    private router = express.Router();

    constructor(){
        this.router.use('/cliente', clienteRouter.build() );
    }

    public build(){
        return this.router;
    }

}


export =  new RouterIndex();