module.exports = function(req, res, next) {
    const goodHeader = req.headers["authorization"];
    if(typeof goodHeader !== 'undefined'){
        const good = goodHeader.split(" ");
        const goodToken = good[1];
        req.token = goodToken;
        next();
    }else {
        res.sendStatus(403).send({message: 'сесія завершена, авторизуйтесь будь ласка'})
    }
}