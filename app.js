const mongoose = require('mongoose');

const url = 'mongodb://localhost/mongo_crud'

mongoose.connect(url, {
})
.then( ()=> console.log("hola conectado") )
.catch( (e)=> console.log("el error es: "+ e))


const schemaPersonas = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
}, {versionKey : false})

const PersonasModel = mongoose.model('personas', schemaPersonas)


// mostrar parametros

const mostrar = async ()=>{
    const personas = await PersonasModel.find()
    console.log(personas)
}


const crear = async ()=>{
    const persona = new PersonasModel({
        nombre: "pedrito",
        edad: 40,
        pais : "argentina"
    })

    const resultado = await persona.save()
}


const actualizar = async (id) =>{
    const persona = await PersonasModel.updateOne({_id:id},
        {
            $set:{
                nombre: "panchito",
                edad : 35,
                pais: "guatemala"
            }

        })
}


const eliminar = async(id)=>{

    const persona = await PersonasModel.deleteOne({_id:id})
    console.log(persona)
}

//actualizar('62d0c9b3c614451020c4159f')

eliminar('62d0c9b3c614451020c4159f')