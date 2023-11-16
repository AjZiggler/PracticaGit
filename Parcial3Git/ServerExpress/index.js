const express = require('express');

const app = express();

app.get('/usuario',(req,res)=>{ 
    
    console.log(red.query.idUsuario);

    let consulta='';

    if (typeof(req.query.idUsuario)==`undefined`){
        consulta = `select = from cusuario`;
    }else{
        consulta = `select = from cusuario  where idUsuario = ${req.query.idUsuario}`;
    }

    console.log(consulta);

    connection.query(
        consulta,
        function(err, results, fields){
            if(results.lenght==0){
                //res.json{(mensaje:"idUsuario no existe")};
            }else{
                res.json(results);
            }
        }
    )
});

app.post('/clientes',(req,res)=>{ 
    res.json({  mensaje:"Server Express respondiendo a post"});
});

app.delete('/clientes',(req,res)=>{ 
    res.json({  mensaje:"Server Express respondiendo a delete"});
});

app.listen(8802,(req,res)=>{
    console.log("Servidor Express corriendo en puerto 8802");
});
