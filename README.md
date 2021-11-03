"# consumir-apis-con-ajax" 

fetch => api de consulta cliente servidor integrada en los navegadores  
axios => api de consultas cliente servidor multiplataforma (frontend-backend)
http => modulo de nodejs para consultas cliente servidor
.json() => traduce la respuesta al formato json
.text() => traduce la respuesta a formato de texto

Object.keys(objeto) => retorna los hashes de un objeto en un nuevo arreglo

#status code 
200 < peticion correcta 
300 < redireccionamiento
400 < recurso no encontrado
500 error

#parametros de fecth
method => especifica el metodo http a utilizar, por defecto es get
body => para hacer modificaciones es necesarioe ncriptar la información que se intercambia con el servidor, por lo tanto se deben pasar en el body de la petición
headers => especifica el tipo de formato en el que se esta enviando la patición

Es posible revisar en detalle a través de la consola del navegador en la pestaña network

#Server local con node
npm install -g node-static
static -p 3030
static -H '{"Cache-Control": "no-cache, must-revalidate"}' -p 3030  (es opcional espeficiar el puerto)

#events
load => Se ejecuta cuando la pagina termina de cargar