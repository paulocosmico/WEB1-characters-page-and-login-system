import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import routes from './routes';
class App{
    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://soulfostones:estevao@soulofstones.lnojm.mongodb.net/soulfostones?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(cors({ origin: '*' }))
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
}

export default new App().server;