const express = require("express")
const router = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const dbs = require("../db");
const ensureToken = require("../ensureTok");
const Products = require("../models/products")
const Tags = require("../models/tags")
const Tag_statuses = require("../models/tag_status")
process.env.SECRET_KEY = 'secret'

router.use(cors())

router.post('/', ensureToken,  (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err)=> {
        if(err){
            res.sendStatus(403)
        }else {
            Tags.update({ status: '2'},{
                where: { product: req.body.id }
            }).then( result => {
                dbs.sequelize.query("SELECT p.id, p.name, p.code, p.client, p.number_invoice, p.date_invoice, p.cost_invoice, p.createdAT, p.username FROM `tags` `t` LEFT JOIN `products` `p` ON ((`t`.`product` = `p`.`id`)) where `t`.`status`=0")
                    .then((data) => {
                        res.json(data[0])
                    })
            }).catch(err=>console.log(err))


                      // console.log(req)
            // res.json({'message': 'sucsess', "body_request": req.body })
        }
    })
})


module.exports = router;