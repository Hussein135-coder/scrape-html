const express = require('express')
const cors = require('cors');

const app = express()

app.use(
	cors(),
    express.json()
);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(
	`Server started on port ${PORT}`));




    const fetchUrl = async (url)=> {
        const data = await fetch(url)
        const html = await data.text()
        return html;
    }
app.post('/',async (req,res)=>{
    try {
        const url = req.body.url
        console.log(url)
        const data = await fetchUrl(url)
	const html = await data.text();
	console.log(html);
        res.json({html,url})  
    } catch (error) {
        res.json({html : error.message })
    }
       
})
