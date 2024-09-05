const http = require('http'); 

const hostname = '127.0.0.1';
const fs=require("fs")
const port = 3000;
  
  //
const  pagina_invalida=fs.readFileSync("pagina_invalida.html")
const  paginaDiseño =fs.readFileSync("diseño.html")
const  paginaDeprogramacion =fs.readFileSync("programacion.html")
const  PaginaPrincipal =fs.readFileSync("principal.html")


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url ==="/programacion"){
    return res.end(paginaDeprogramacion);
  } else if(req.url ==="/diseño"){
    return res.end(paginaDiseño);
  } else if (req.url ==="/"){
    return res.end(PaginaPrincipal);
  }else{
  res.writeHead(404)
  res.end(pagina_invalida)

  }
});

server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});