/**https://developer.mozilla.org/es/docs/Web/HTTP/CORS */

const express = require('express');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(morgan('tiny'));

let f = (req, res) => {
  res.header("Access-Control-Allow-Origin","*"); //Tambien es posible indicar el dominio,el * indica que cualquier origen puede acceder al recurso
  res.send({
    hola: "mundo"
  });
}

app.options("/",(req,res)=>{
})

app.get("/", f);

app.post("/", f);

app.put("/", f);


app.listen(8080, () => console.log("Server started"));