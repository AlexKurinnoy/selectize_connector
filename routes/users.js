const express = require("express")
const router = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const dbs = require("../db");

const User = require("../models/user")
const Role = require("../models/role")
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

router.post('/login', (req, res) =>{
    console.log(req.body)
    User.findOne({
        where: {
            u_login: req.body.u_login
        }
    }).then(user => {
        if(req.body.u_password === user.u_password){
            Role.findOne({
                where: {
                    r_id: user.u_role
                }
            }).then(role =>{
                jwt.sign(user.dataValues, process.env.SECRET_KEY, {expiresIn: 300}, (err, token)=>{
                    res.status(200).json({token: "Bearer " + token, role: {r_id: role.r_id,
                                                                           r_name: role.r_name,
                                                                           r_info: role.r_info,
                                                                           r_date: role.r_date}})
                })
            })


        }else{
            res.status(401).send({message: 'невірний пароль'})
        }
    }).catch(err =>{
        res.status(401).send({ message: 'користувач відсутній'})
    })
})

module.exports = router;