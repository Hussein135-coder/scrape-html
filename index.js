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




    const fetchUrl = async (url,type)=> {
        const data = await fetch(type+"://"+url)
        const html = await data.text()
        return html;
    }
app.get('/:url/:type',async (req,res)=>{
    try {
        const url = req.params.url
        const type = req.params.type
        console.log(url)
        const html = await fetchUrl(url,type)
        res.json({html})  
    } catch (error) {
        res.json({html : "حدث خطأ ما" })
    }
       
})
