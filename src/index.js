const express = require('express')
const app= express();
const db= require('../src/configs/db');
const cors= require('cors');
const companyController= require('../src/controllers/company.controller');
const employeeController= require('../src/controllers/employee.controller');

app.use(cors());
app.use(express.json());
app.use('/company',companyController);
app.use('/employee',employeeController);

app.listen(process.env.PORT || 7000 , async()=>{
    try {
          await db.sequelize.authenticate();  // authenticating to the database
          console.log('Server listening on port 7000')
    } catch (error) {
        console.log('Error while connecting form database', error);
    }
})