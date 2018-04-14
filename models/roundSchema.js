const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roundSchema = new Schema({
    namePlayer1:{type: String, require: true},
    scorePlayer1:{type: Number, default:0},
    namePlayer2:{type: String, require: true},
    scorePlayer2:{type: Number, default:0},
    namePlayer3:{type: String, require: true},
    scorePlayer3:{type: Number, default:0},
    namePlayer4:{type: String, require: true},
    scorePlayer4:{type: Number, default:0}
},{
    //lấy thời gian thực nhâp vào 
    timestamps: true
});

module.exports = mongoose.model("round",roundSchema);