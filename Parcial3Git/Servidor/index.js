const http = require ('http');

const servidor = http.createServer((req,res)=>{
    res.write("Servidor Http Node contestando a peticion get");
    res.end();
});

servidor.listen(8802,()=>{
    console.log("Servidor Node Htpp corriendo en puerto 8802");
});