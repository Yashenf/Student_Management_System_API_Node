const studentSchema = require("../model/Student");

// add new studetn
const save = (req, res) => {
  const student = new studentSchema({
    name: req.body.name,
    address: req.body.address,
    age: req.body.age
  });
  student.save()
    .then((result) => {
      res.status(201).json({id:result._id});
      console.log(result);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
};

//get one studet's details
const get = (req, res) => {
    studentSchema.findOne({_id:req.body.id})
    .then(result=>{
        if(result){
            res.status(200).json({data:result});
        }else{
            res.status(404).json({data:null});
        }
    })
    .catch(err=>{
        res.status(500).json(err);
    });
};

// get all student's details
const getAll = (req,res)=>{
    studentSchema.find()
    .then(result=>{
        res.status(200).json({data:result})
    })
    .catch(err=>{
        res.status(500).json(err);
    });
};

//update studetn's details
const update = (req,res)=>{
    studentSchema.findOneAndUpdate({_id:req.body.id},{
        $set:{
            name:req.body.name,
            address:req.body.address,
            age:req.body.age
        }
    })
    .then((result)=>{
        if(result){
            res.status(200).json({data:result});
        }else{
            res.status(404).json({data:null});
        }
    })
    .catch(err=>{
        res.status(500).json(err);
    });
};

// delete student 
const deleteData = (req,res)=>{
    studentSchema.findByIdAndDelete({_id:req.body.id})
    .then(result=>{
        if(result){
            res.status(200).json({data:result});
        }else{
            res.status(404).json({data:null});
        }
    })
    .catch(err=>{
        res.status(500).json(err);
    });
};

module.exports = {save,deleteData,get,getAll,update};
