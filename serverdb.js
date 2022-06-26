const express = require('express');
const mysql = require('mysql');
var bodyParser = require('bodyParser');
const cors = require('cors');

const db = mysql.createPool({
    connectionLimit : 15,
    host : "localhost",
    user : "root",
    password: "",
    database: "hackathon",
});

db.getConnection((err) => {


    
    if(err){
        console.log(err);
    }else{
        console.log("Successfully connected..!");
    }
});

app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/",(req,res)=>{
    console.log("Server started...!");
});

app.get("/signup",(req,res)=>{
    const Hostelname = req.body.Hostelname;
    const Roomno = req.body.Roomno;
    const Regno = req.body.Regno;
    const Name = req.body.Name;

    const sqlInsert = "INSERT INTO hostelallotment (Hostelname,Roomno,Regno,Name) VALUES (?,?,?,?)";
    db.query(sqlInsert, [Hostelname,Roomno,Regno,Name],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Inserted successfully...!!");
        }
    });
});

app.post("/update", (req, res) => {
    const { Hostelname,Roomno,Regno,Name } = req.body;
    const sql = `UPDATE hostelallotment SET Hostelname = ?, Roomno = ?, Name = ? WHERE usertable.Regno=(?);`
    db.query(sql, [Hostelname, Roomno, Name, Regno], (error) => {
        if (error) {
            console.log(error)
        } else {
            //console.log("Updated..")
        }
    });
});



app.listen(8080,()=>{
    console.log("server is listening...!");
})