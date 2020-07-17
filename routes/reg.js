const express = require("express")
const router = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const dbs = require("../db");

const User = require("../models/user")
const Role = require("../models/role")
const Products = require("../models/products")
process.env.SECRET_KEY = 'secret'

router.use(cors())

router.get('/', (req, res) => {
    User.findAll().then(user => {
        if (user){
            res.json(user)
        }else{
            res.send('-Users does not exist')
        }
    }).catch(err=>{
        res.send('error: ' + err)
    })
})

router.post('/', (req, res) =>{
    console.log(req.body)
    Products.findOne({
        where: {
            code: req.body.serial_number
        }
    }).then(product => {
        // console.log(product)
            User.findOne({
                where: {
                    login: req.body.login
                }
            }).then(user =>{
                console.log(user)
                if(user == null){

                    User.build({
                        login: req.body.login,
                        password: req.body.password
                    }).save().then(ok=>{
                        res.status(200).json(product)
                    })

                }else {
                    res.status(200).send({message: "Такий користувач вже є в системі, пройдіть авторизацію"})
                }

            }).catch(err=>{
                res.status(401).send({message: 'Невдача спідкала наших спортсменів'})
            })

    }).catch(err =>{
        res.status(401).send({ message: 'Продукт відсутній'})
    })
})

module.exports = router;