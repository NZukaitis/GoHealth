const mysql = require("mysql");

const db = mysql.createConnection({
    host:"saluswell-db.c7m1a1ppk302.us-east-1.rds.amazonaws.com",
    port:"3306",
    user:"saluswell_admin",
    password:"Cyglera!101", //generally a horrible practice, just being used to make sure everything works
    database:"saluswell_dev"
});

db.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("connection successful");
})

db.query("select * from PATIENT where id=1", (err, res)=>{
    return console.log(res);
});

db.end();