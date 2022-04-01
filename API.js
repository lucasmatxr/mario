const funcion = requestAnimationFrame('firebase-funcionns');
const  app = requeire("express")();

const admin= requeire("firebase-admin");
admin.intializeApp();
// const db = admin.firestore().conllection(nome do banco)

// Dado do Bannco de dados <Nome do tipo de dado> : create <nome do dado>
// <Dadodo a ser pego> : get <dado a ser exibido>

//Pegar a innformaçao
// app.get("diretorio", funncion (request , responnse) { 
    db.get()
    .then(function(docs){
        let <banco de dados> = [];

        docs.foreach(fuctionn(dados){
            // <banco>..push(id:<dados do banco>);
        })
        responnse.json(nome do banco);
    })
//});
 
//Apresentar a informaçao
// app.post("diretorio", funcion(request, response){
    //criar um novo objeto 
    const novobjt ={
        //dado a ser requerido : request.body.<nome>>
    }
    db.add(novobjt)
    .then(funcion(){
        Response.status(200);
    })
//});

export.app = function.https.onRequest(app);
