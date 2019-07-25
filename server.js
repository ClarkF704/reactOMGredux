const express = require('express');

const app = express();

const PORT = process.env.PORT || 3008

// Production code
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    app.get('*', (req,res)=>{
        res.sendFile(path.reolve(__dirname, 'client', 'build', 'index.html'))
    });
}
//
app.listen(PORT, ()=>{
    console.log(`Backend Server is listening on port ${PORT}`)
});
