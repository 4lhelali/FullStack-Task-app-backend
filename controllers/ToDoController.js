const ToDoModel = require('../models/ToDoModel')
const ToDOModel = require('../models/ToDoModel')


module.exports.getToDo = async (req, res) => {
    const toDo = await ToDOModel.find()
    res.send(toDo)
}


module.exports.saveToDo = async (req, res) => {
const {text} = req.body
ToDOModel
   .create({ text })
   .then((data) => {
       console.log("Added successfully..");
       console.log(data);
       res.send(data)
 })
}

module.exports.updateToDo = async (req , res) => {
    const {_id, text} = req.body
ToDoModel
   .findByIdAndUpdate(_id,{text})    
   .then(() => res.send("updated Successfully.."))
   .catch((err) => console.log(err))
}


module.exports.deleteToDo = async (req ,res) => {
    const {_id} = req.body
ToDoModel
   .findByIdAndDelete(_id)    
   .then(() => res.send("Deleted Successfully.."))
   .catch((err) => console.log(err))
}

