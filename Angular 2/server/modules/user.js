const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    usuari: String,
    contrasenya: String
});
module.exports = mongoose.model('user', userSchema, 'usuaris');