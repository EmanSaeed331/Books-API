var queries = require('../db/queries');
var dbConnection = require('../db/connection');

exports.getStoreList= (req,res)=>{
    try{
        
        //get query .
        var storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
        // await -> make block for code until finishing . 
        var result  =  await dbConnection.dbQuery(storeListQuery);
        return res.status(200).send(JSON.stringify(result));
    }
    catch(err){
        console.log("Error:"+err)
        return res.status(500).send({err:'Failed to list Store'})

    }

}