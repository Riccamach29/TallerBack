import { Schema, model } from "mongoose";

let collection = "stores";
let schema = Schema({
    name:{type: String, required: true},
    adress:{type: String, required: true},
    phoneNumber:{type: String, required: true}
},{
    timestamps: true
})
let Store = model(collection, schema);

export default Store