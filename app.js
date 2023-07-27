const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,'views')))

app.get("/name",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/name.html"))
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/clg",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/clg.html"))
})

app.get("/dept",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/dept.html"))
})

app.get("/jsonSample",(req,res)=>{
    res.json({name: "Dhruv",college: "REC",dept: "IT"})
})

app.get("/products",(req,res)=>{
    res.json([
        {
            img: "https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg",
            name: "Lenovo Ideapad Gaming 3",
            price: 54999,
        },
        {
            img: "https://m.media-amazon.com/images/I/41yVsOy0xwL.jpg",
            name: "Asus Vivobook K15 OLED",
            price: 43990,
        },
        {
            img: "https://m.media-amazon.com/images/I/81l6dhsPWHL._SL1500_.jpg",
            name: "HP 15s 5500u",
            price: 35990,
        },
        {
            img: "https://m.media-amazon.com/images/I/719C6bJv8jL._SL1500_.jpg",
            name: "Apple Macbook Air M2",
            price: 137990,
        }
    ])
})

app.get("/product_page",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/product_page.html"))
})

app.listen(3000,()=>{
    console.log("I'm listening on http://localhost:3000");
})