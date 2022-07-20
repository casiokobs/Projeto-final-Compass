import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:123@cluster0.lytwhcc.mongodb.net/Login");

let db = mongoose.connection;

export default db;