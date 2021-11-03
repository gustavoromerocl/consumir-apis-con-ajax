/**https://developer.mozilla.org/es/docs/Web/HTTP/CORS */
const express = require('express');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(morgan('tiny'));

let f = (req, res) => {
  res.header("Access-Control-Allow-Origin","http://localhost:3030"); //Tambien es posible indicar el dominio,el * indica que cualquier origen puede acceder al recurso
  res.header("Access-Control-Allow-Credentials", "true");
  console.log(req.cookies);
  res.send({
    hola: "mundo"
  });
}

app.options("/",(req,res)=>{
  res.header("Access-Control-Allow-Origin","http://localhost:3030");
  res.header("Access-Control-Allow-Methods","PUT"); //Se habilita el metodo PUT para habilitar la peticion preflight
  res.header("Access-Control-Allow-Headers", "Content-Type, Authentication"); //Se habilitan los encabezados content type y authentication para la paeticion preflight
  res.header("Access-Control-Allow-Credentials", "true"); //Permite que un origen distinto envie cookies
  res.status(204).send()
})

app.get("/", f);

app.post("/", f);

app.put("/", f);


app.listen(8080, () => console.log("Server started"));