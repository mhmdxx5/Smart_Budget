const { Schema, model } = require("mongoose");
const usersSchema = new Schema({
    fullName: { type: String },
    password: { type: String },
    role: { type: String },
    BudgetLimit: { type: Number },
    Email: { type: String },
    IdFamily: { type: Number },
    id: { type: Number },
    idExpenses:{ type: Object },
}, { versionKey: false }, { collection: 'users' });
const users = model('users', usersSchema);
module.exports = users;