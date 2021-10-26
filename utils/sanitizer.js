exports.sanitize = (ignore=[]) => {
    return (req, res, next) => {
        let data = [];
        if(req.body){
            data = Object.keys(req.body);
            for(let i=0;i<data.length;i++){
                if(ignore.indexOf(data[i]) == -1 && typeof req.body[data[i]] == 'string')
                    req.body[data[i]] = req.body[data[i]].trim();
            }
        }
        if(req.params){
            data = Object.keys(req.params);
            for(let j=0;j<data.length;j++){
                if(ignore.indexOf(data[j]) == -1 && typeof req.params[data[j]] == 'string')
                    req.params[data[j]] = req.params[data[j]].trim();
            }
        }
        if(req.query){
            data = Object.keys(req.query);
            for(let k=0;k<data.length;k++){
                if(ignore.indexOf(data[k]) == -1 && typeof req.query[data[k]] == 'string')
                    req.query[data[k]] = req.query[data[k]].trim();
            }
        } 
        next();
    }
}; 