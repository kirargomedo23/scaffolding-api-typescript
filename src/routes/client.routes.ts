import express from "express";
import  ClientController from "../controllers/clientController";


class ClientRoute{
  private router = express.Router();
  private clientController = new ClientController();

  constructor(){
    this.router.use('/', this.clientController.getById  );
  }

  public build(){
    return this.router;
  }

}

export =  new ClientRoute();
