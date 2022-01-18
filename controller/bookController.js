var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../Util/utility');

exports.getBookList=async (req,res)=>{
    try{
        
        //get query .
        var bookListQuery = queries.queryList.GET_BOOK_LIST_QUERY;
        // await -> make block for code until finishing . 
        var result  =  await dbConnection.dbQuery(bookListQuery);
        return res.status(200).send(JSON.stringify(result.rows));
    }
    catch(err){
        console.log("Error:"+err)
        return res.status(500).send({err:'Failed to get book'})

    }

}

exports.getBookDetails=async (req,res)=>{
    try{
        var bookId = req.params.id;
        //get query .
        var bookDetailsQuery = queries.queryList.GET_BOOK_DETAILS_QUERY;
        // await -> make block for code until finishing . 
        var result  =  await dbConnection.dbQuery(bookListQuery,[bookId]);
        return res.status(200).send(JSON.stringify(result.rows[0]));
    }
    catch(err){
        console.log("Error:"+err)
        return res.status(500).send({err:'Failed to get book details '})

    }

}