const mysql = require("mysql");

const db = mysql.createConnection({
    host:"",
    port:"",
    user:"",
    password:"", //generally a horrible practice, just being used to make sure everything works
    database:""
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