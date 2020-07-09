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
            console.log(req)
            res.json({'message': 'sucsess', "body_request": req.body })
        }
    })
})


module.exports = router;