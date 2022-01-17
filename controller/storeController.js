var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../Util/utility');
/* Get Store List 
    - get Query 
    - get result with (await) 
        - await : stop execution until the getting the result . 
    

*/
exports.getStoreList=async (req,res)=>{
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
exports.saveStore = async (req,res)=>{
    try{ 
        var createdBy = 'admin';
        var createdOn = new Date();
        //req body 
        var storeName = req.body.storeName ; 
        var address   = req.body.address;
        if(!storeName || !address){
            return res.status(500).send({error:'Store name and address are required , can not be empty'});
            
        }
       let storeCode =  util.generateStoreCode();
        values = [storeName,storeCode,address,createdBy, createdOn];
        var saveStoreQuery = queries.queryList.SAVE_STORE_QUERY;
        await dbConnection.dbQuery(saveStoreQuery);
        return res.status(200).send("Successfully store created ")

    } catch(err){
        console.log("Error : "+err);
    }
 

}
