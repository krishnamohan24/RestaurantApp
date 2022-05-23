const express=require('express');
const mongo=require('mongoose');
const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>helloworld!!</h1>");
})

const products=[
    {
        id:1,
        name:"krishnamohan"
    },
    {
        id:2,
        name:"deepika"
    },
    {
        id:3,
        name:"charan"
    }
]

app.get('/portal/input',(req,res)=>{
        const c=res.send(products).json;
        console.log("name in express",c);
})

app.listen(4200,()=>console.log("sever is running"));