let reqSql = "";

function iterMap(mapping, key, data) {
    for(let j in mapping){
        if(key == j && data!=""){
            reqSql+= " UNION ALL SELECT " + "'" + j +"' as par, " + mapping[j].name + " AS name FROM " + mapping[j].dict + " WHERE " + mapping[j].id + "=" + data
            break;
        }else{return true}
    }
}
function whotIsIt(mapping, data) {
    switch (true) {
        case (Object.prototype.toString.call(data) == '[object Array]'):
            data.forEach((el)=>{
                whotIsIt(mapping, el)
            })
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
            break;
        case (Object.prototype.toString.call(data) != '[object Array]' && typeof(data) =="object"):
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&!!!!!!!!!!!!!!!!!!!!!!!!')
            for (let i in data) {
                (typeof(data[i]) != "object" && typeof(data[i]) != null) ?  iterMap(mapping, i, data[i]) : whotIsIt((mapping, data[i]))
            }
            break;
        default:
            break;
    }
}
module.exports = function comb(mapping, data) {
    whotIsIt(mapping, data)
    return reqSql.slice(10)
}




