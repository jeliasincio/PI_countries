const { Router } = require("express");
// const { getCountriesHandler, getCountryHandler } = require("../handlers/countriesHandlers");
const axios = require('axios')
const router = Router()
const {Country, Activity} = require('../db')

// router.get("/", getCountriesHandler);
// router.get("/:id", getCountryHandler);
const apiInfo = async () =>{
    const TodaLaApi = await axios.get('https://restcountries.com/v3/all')
  
        const allCountries = TodaLaApi.data.map(elemento =>{
            return {
                id:elemento.cca3,
                name:elemento.name.common,
                flag:elemento.flags[0],
                continent:elemento.continents[0],
                capital: elemento.capital ? elemento.capital[0] : 'No tiene capital',
                subregion:elemento.subregion,
                area:elemento.area,
                population:elemento.population,
            }
        })
        await Country.bulkCreate(allCountries)//creación de varios registros a la vez
}

const getInfoBaseDatos =  async () =>{

   return await Country.findAll({ //leer toda la tabla de la base de datos.
        include:{
            model: Activity,
            attributes: ['name'],
            through: {
                atrributes:[],
            },
        }
    })
}

router.get('/' , async (req,res)=>{
    try {
        const {name} = req.query

        const verification = await Country.count()
        if(verification < 1){ await apiInfo() }
        if(name){             
            const response = await Country.findAll()             
            const data = await response.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
            data.length ? res.json(data) : res.json([{name: 'El País buscado no existe.'}])          
        }else{
            const data = await getInfoBaseDatos()
            res.json(data)
        }
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async (req,res) =>{
   try {
    const {id} = req.params

    const verification = await Country.count()
    if(verification < 1){ await apiInfo() }
    
    const data = await Country.findByPk(id,{
        include: Activity
    })
   
    if(data){
        res.json(data)
    }else{
        res.json('id de la ciudad no encontrada, por favor escriba una id valida')// id of city not found, please write id valid
    }

   } catch (error) {
        res.status(404).json(error)
   }
    
})

module.exports = router
