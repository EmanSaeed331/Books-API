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
        var bookId = req.params.bookId;
        //get query .
        var bookDetailsQuery = queries.queryList.GET_BOOK_DETAILS_QUERY;
        // await -> make block for code until finishing . 
        var result  =  await dbConnection.dbQuery(bookDetailsQuery,[bookId]);
        return res.status(200).send(JSON.stringify(result.rows[0]));
    }
    catch(err){
        console.log("Error:"+err)
        return res.status(500).send({err:'Failed to get book details '})

    }

}


exports.saveBook = async (req,res)=>{
    try{ 
        var createdBy = 'admin';
        var createdOn = new Date();
        //req body 
        var title = req.body.title ; 
        var description   = req.body.description;
        var auther   = req.body.auther;
        var publisher   = req.body.publisher;
        var pages   = req.body.pages;
        var storeCode   = req.body.storeCode;


        if(!title  || !auther || !publisher || !storeCode){
            return res.status(500).send({error:'book , title , author , publisher and storeCode  are  required , can not be empty'});
            
        }
        values = [title , description , auther, publisher, pages,storeCode,createdOn,createdBy];
        var saveStoreQuery = queries.queryList.SAVE_BOOK_QUERY;
        await dbConnection.dbQuery(saveStoreQuery,values);
        return res.status(201).send("Successfully adding new book ")

    } catch(err){
        console.log("Error : "+err);
        return res.status(500).send({error:"Failed to add new book "})
    }
 

}