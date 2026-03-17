import express from "express";
const PORT = 3000;
const app = express();

app.get("/", (req,res) => {
	res.json("Hello World!");
});

app.listen(PORT, ()=> console.log("Server is running on 3000"));
