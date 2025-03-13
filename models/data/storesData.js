import 'dotenv/config.js';
import "../../config/database.js";
import Store from "../Store.js";

let stores = [
    {
        name: "Cafetería Central",
        address: "Calle Principal 123, Ciudad Ejemplo",
        phoneNumber: "+52 555 123 4567",
        open24hrs: false
    },
    {
        name: "Supermercado 24/7",
        address: "Avenida Siempre Abierta 456, Ciudad Ejemplo",
        phoneNumber: "+52 555 987 6543",
        open24hrs: true
    },
    {
        name: "Farmacia Salud",
        address: "Boulevard de la Salud 789, Ciudad Ejemplo",
        phoneNumber: "+52 555 456 7890",
        open24hrs: false
    },
    {
        name: "Gimnasio Activo",
        address: "Plaza del Deporte 321, Ciudad Ejemplo",
        phoneNumber: "+52 555 321 6547",
        open24hrs: true
    },
    {
        name: "Restaurante Sabores",
        address: "Calle del Sabor 654, Ciudad Ejemplo",
        phoneNumber: "+52 555 789 1234",
        open24hrs: false
    }
]

Store.insertMany(stores)