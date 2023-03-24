var Studentdb =require('../model/model');

//create and save new user

exports.create = (req,res)=>{
    //validate requrest
    if(!req.body){
        res.status(400).send({message:"Content can not be  empty!"});
        return;
    }

    //new student
    const student=new Studentdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save student in the database here we are gonna call different methods using chaining system
    student
        .save(student)
        .then(data=>{
            // res.send(data)
            res.redirect('/add-student');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Some error occured while creating a create operation"
            });
        });
}

//retrieve and return all students/retrive and return single student

exports.find = (req,res)=>{
    if(req.query.id){
        const id=req.query.id;

        Studentdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message:"Not Found Student with id"+id})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:"Error retriving Student with id"+id})
            })
    }else{
        Studentdb.find()
        .then(student=>{
            res.send(student)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error Occurered while retriving student information "})
        })
    }
}

//update a new identified student by  student id

exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to Update can not be Empty"})

    }

    const id=req.params.id;
    Studentdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update Student with ${id}. May be Student not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update Student Information"})
    })

}

//delete a student with specified student id in the request

exports.delete = (req,res)=>{
    const id=req.params.id;

    Studentdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Delete with id ${id}. Maybe id is Wrong`})
            }else{
                res.send({
                    message:"Student Deleted Successfully!"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not Delete Student with id ="+id
            });
        });

}