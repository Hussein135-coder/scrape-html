//const http = require("http");
//import http from "http";

const fetchUrl = async (url) => {
  try {
    const data = await fetch(url, {
      rejectUnauthorized: false,
    });
    const html = await data.text();
    return html;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};





const express = require('express')
const cors = require('cors');
//const axios = require('axios');
const app = express()

app.use(
	cors(),
    express.json()
);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(
	`Server started on port ${PORT}`));



/*
    const fetchUrl = async (url)=> {
        const data = await axios.get(url)
        const html = await data.data
        return html;
    }
*/
app.post('/',async (req,res)=>{
        const url = req.body.url
    try {
        console.log(url)
        const html = await fetchUrl(url)

	console.log(html);
        res.json({html,url})  
    } catch (error) {
        res.json({html : error.message,url:url})
    }
       
})
