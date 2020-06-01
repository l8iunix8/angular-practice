const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('HELLO');
});

app.listen(4999,()=>{
    console.log('listening port 4999');
})
