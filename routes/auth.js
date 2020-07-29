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
    User.findOne({
        where: {
            login: req.body.login
        }
    }).then(user => {
        if(req.body.password === user.password){
            Products.findOne({
                where: {
                    code: req.body.serial_number
                }
            }).then(product =>{
                if (product!=null){
                    res.status(200).json(product)
                } else {
                    res.status(401).send({message: 'невірний серійний номер'})
                }
            })
        }else{
            res.status(401).send({message: 'невірний пароль'})
        }
    }).catch(err =>{
        res.status(401).send({ message: 'користувач відсутній'})
    })
})

module.exports = router;