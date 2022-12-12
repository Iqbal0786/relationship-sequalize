//! function for employee model
module.exports = (db,dataType)=>{
    const Company= db.define("Company",{
        id:{type:dataType.INTEGER , allowNull:false, autoIncrement:true, primaryKey:true},
        name:{type:dataType.STRING, allowNull:false},
        
    })
    return Company
}