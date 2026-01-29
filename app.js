import express from 'express';
const app = express();
const PORT = 3000;
//define a default "route" ('/')
app.get('/', (req, res) =>{
   res.send('welcome') 
});
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
})