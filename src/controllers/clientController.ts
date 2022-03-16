import { Request,Response, NextFunction } from "express";



export default class ClientController{

    constructor() {}

    async getById(req: Request, res: Response, next: NextFunction){
        res.json({ success: true, data: [], msg: "ok", errors: [] });
    }



}