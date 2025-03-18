import express from 'express';
import 'dotenv/config.js'
import './config/database.js';
import cors from 'cors';
import morgan from 'morgan';
import routerIndex from './router/index.js';
import not_found_handler from "./middlewares/not_found_handle.js";
import error_handle from "./middlewares/error_handle.js";
import error_400 from "./middlewares/error_400.js";
import error_401 from "./middlewares/error_401.js";
import responseTime from "./middlewares/response_time.js";


const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log("server is ready on port :" + PORT);

//configuraciones basicas
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use(responseTime);   //Registrar el Tiempo de Ejecución de una Ruta

//configuracion de router
server.use('/api', routerIndex);

//configuracion de middlewares
server.use(not_found_handler);
server.use(error_400);
server.use(error_401);
server.use(error_handle);







server.listen(PORT, ready);