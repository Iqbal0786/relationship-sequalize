const {Sequelize , DataTypes} = require('sequelize');
const Company= require('../models/company.model');
const Employee= require('../models/employee.model');

const db={}  // db instance for having mulitple models and it will be used when doing relationships

const sequelize=  new Sequelize("demo_crud", 'root','' ,{
    host: 'localhost',
    dialect:'mysql',
    logging:false
})
db.sequelize=sequelize; // adding sequelize instance 
db.Company= Company(sequelize,DataTypes) //  adding employee table/model in db instance
db.Employee=Employee(sequelize,DataTypes) // adding employee table/model in db instance

// // 1:1 relationship between employee and company
/*
 one to one 
*/
// db.Employee.belongsTo(db.Company , {foreignKey:'id' });
// db.Company.hasOne(db.Employee ,{foreignKey:"id" })

// // // one to many relationship between company and employees 
db.Company.hasMany(db.Employee, {foreignKey:'id'});
db.Employee.belongsTo(db.Company, {foreignKey:'id'});

//!synchronizing the database 
sequelize.sync();

module.exports= db;