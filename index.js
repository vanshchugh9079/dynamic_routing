import express from 'express';
const app = express();

app.get('/auth/:usename' ,(req, res) => {
  res.send('welcome '+req.params.usename);
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})