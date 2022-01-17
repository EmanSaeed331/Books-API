var pool = require('./pool');

//promise 
//Queries with generic way .

exports.query= (QueryText,QueryParams) =>{
    return new Promise((resolve,reject)=>{
        pool.query(QueryText,QueryParams)
        .then(res =>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);

        })
    });
}