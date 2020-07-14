const models = require("../../db/models");

const employee = {};

employee.addEmployee = async(req,res)=>{
    try{
        if(req.body.name && typeof req.body.name !== "string" && req.body.name.length<1){
            return res.status(200).json({message: "Either name is missing or not in supported format"});
        }
        const dbBody = {
            name: req.body.name
        }
        await models.Employees.build(dbBody).save();
        return res.status(200).json({message: "Success"});
    }catch(err){
        return res.status(200).json({message: err.stack});
    }
}

employee.deleteEmployee = async(req,res)=>{
    try{

        const emp = await models.Employees.findOne({
            order: [['createdAt', 'DESC']]
        });
        if(emp){
            await models.Employees.destroy({
                where: {
                    id: emp.id
                }
            });
        return res.status(200).json({message: `${emp.name} is removed`});
        }else
        return res.status(200).json({message: `No data to remove`});
    }catch(err){
        return res.status(500).json({message: err.stack});
    }
}

module.exports= employee;