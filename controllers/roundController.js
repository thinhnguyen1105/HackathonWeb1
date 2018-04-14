const roundSchema = require('../models/roundSchema');

let create = (player1,player2,player3,player4,callback)=>{
    let newRound = {
        namePlayer1: player1,
        namePlayer2: player2,
        namePlayer3: player3,
        namePlayer4: player4
    }
    try {
        roundSchema.create(newRound,(err,doc)=>{
            callback(err,doc);
        })
    } catch (error) {
        console.log(error);
    } 
}

let findById = (id,callback) =>{
    roundSchema.findById(id,(err,data)=>{
        callback(err,data);
    })
}
module.exports ={
    create,
    findById
}