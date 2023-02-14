const {DataTypes} = require('sequelize') 


module.exports = (sequelize) => {
    sequelize.define('activity', {
        id:{
            primaryKey:true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        difficulty:{
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            },
            allowNull:false

        },
        duration:{
            type: DataTypes.STRING
        },
        season:{
            type: DataTypes.ENUM( 'Primavera', 'Verano', 'Otoño', 'Invierno', 'All the year'),
            defaultValue:'All the year'
        }

    })
}


// - [ ] Actividad Turística con las siguientes propiedades:
//   - ID
//   - Nombre
//   - Dificultad (Entre 1 y 5)
//   - Duración
//   - Temporada (Verano, Otoño, Invierno o Primavera)