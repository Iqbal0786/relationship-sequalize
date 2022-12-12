//! function for employee model
module.exports = (db,dataType)=>{
    const Employee= db.define("Employee",{
        emp_id:{type:dataType.INTEGER , allowNull:false, autoIncrement:true, primaryKey:true},
        emp_name:{type:dataType.STRING, allowNull:false},
        emp_email:{type:dataType.STRING, allowNull:false},
        emp_address:{type:dataType.STRING, allowNull:false},
        id:{type:dataType.INTEGER, allowNull:false}
    })
    return Employee
}