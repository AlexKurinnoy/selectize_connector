const express = require("express");
var fs = require('fs');
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Data = require("../models/dat");

var iconv  = require('iconv-lite');
const dbs = require("../db");



const ensureToken = require("../ensureTok");

let transformRoom = require("../search-member");


process.env.SECRET_KEY = 'secret'

router.use(cors())

router.get('/', ensureToken,  (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err)=> {
        if(err){
            res.sendStatus(403)
        }else {
            Data.findAll().then(data => {

                if (data) {
                    res.json(data)
                } else {
                    res.send('-- Users does not exist')
                }
            }).catch(err => {
                res.send('error: ' + err)
            })
        }
    })
})

router.post('/', ensureToken, (req, res)=>{
    jwt.verify(req.token, process.env.SECRET_KEY, (err)=> {
        if(err){
            res.status(403).send({message: 'сесія завершена, авторизуйтесь будь ласка'})
        }else {

            const paramSearch = {
                gender: req.body.m_gender_id,
                year: req.body.m_birth_year,
                month: req.body.m_birth_month,
                day: req.body.m_birth_day,
                room: null
            };
            Data.findAll({
                where: {
                    address_hash: req.body.address_hash
                }
            }).then(data =>{
                let arrayOk=[];
                var funfun = function(i, data) {
                let verify = 1;
                    if (data[i].resp_file.length < 10 ) {
                        verify = 0;
                    }
                    verifyData(verify, fs.readFileSync("./json/" + data[i].resp_file + ".bin", 'utf8')).then(resp=> {

                        let verifyData = null;

                        if (!resp) {
                            verifyData = fs.readFileSync("./json/" + data[i].resp_file + ".bin", 'utf8')
                        } else {
                            verifyData = iconv.decode(String.fromCharCode.apply(null, resp.data), 'utf8')
                        }
                        decript(verifyData).then(response => {

                            let room = JSON.parse(iconv.decode(String.fromCharCode.apply(null, response.data), 'utf8'))
                            console.log(room.households[0].members[0])
                            console.log(room.households[0])
                            console.log(room)
                            paramSearch.room = room;
                            let rooms = transformRoom(paramSearch);
                            let answers = []
                            rooms.forEach(rrrrrrr => {
                                rrrrrrr.households[0].members[0].m_speak_other_languages.push('999')
                                rrrrrrr.households[0].members[0].m_speak_other_languages.push('999')
                            })

                            // function runAnsw(j) {
                            //     dbs.sequelize2.query(dictIterator(mapping, rooms[j])).then(results => {
                            //         answers.push(results[0])
                            //         if (j < rooms.length - 1) {
                            //             runAnsw(j + 1)
                            //         } else {
                            //             arrayOk.push(combinate(rooms, answers))
                            //
                            //             // console.log(arrayOk[i][0])
                            //             arrayOk[i][0].households[0].members[0].m_speak_other_languages;
                            //
                            //             console.log('lengts aarrr ' + arrayOk.length)
                            //
                            //             if (i < data.length - 1) {
                            //                 funfun(i + 1, data)
                            //             } else {
                            //                 console.log('arrrrrrrr ' + arrayOk.length)
                            //                 res.json({data: addInnerArr(arrayOk), ok: true})
                            //
                            //             }
                            //         }
                            //     })
                            // }

                            if (rooms.length) {
                                runAnsw(0)
                            } else {
                                if (i < data.length - 1) {
                                    funfun(i + 1, data)
                                } else {
                                    // res.json({data: addInnerArr(arrayOk), ok: true})
                                }
                            }
                        }).catch(err => console.log('this is err from decript ' + err))

                    }).catch(err => console.log('this is err from verfic ' + err))


                }

                if (data.length) {
                    funfun(0, data)
                } else {
                    res.status(401).send({ message: 'за вказаним запитом данні не знайдено'})

                }
                //
            }).catch(err=>console.log("помилка " +err))
        }
    })
})



function decript(code){
    return new Promise((resolve, reject)=>{
        resolve(g_euSign.DevelopData(code))
    })
}
function verifyData(x, code){
    return new Promise((resolve, reject)=>{
        x ? resolve(g_euSign.VerifyDataInternal(code)) : resolve(false);
    })
}


module.exports = router;

