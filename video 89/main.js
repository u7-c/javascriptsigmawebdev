const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.post('/', (req, res) => {
    console.log("this is a post request");
    res.send('hello world post');
    //this is hits on my terminal when i open mypage.html on my browser and hits a post request
}).put('/', (req, res) => {
//basically what is happening is that the from the html its fetching / that means it i swaiting for a reply which we have
//written in app.posty and when it rewplies it actually res.send logs something called hello world post
    console.log("this is a put request");
    res.send('hello world put');
    //this is hits on my terminal when i open mypage.html on my browser and hits a post request
}).listen(port, () => {
    
    console.log(`🚀 Server listening at http://localhost:${port}`);
});
app.get("/index",(res,req)=>{
    console.log("HEY ITS INDEX");
    res.sendFile('templates/index.html')
})
