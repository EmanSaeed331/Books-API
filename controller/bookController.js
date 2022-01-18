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


exports.updateBook = async (req,res)=>{
    try{ 
        var createdBy = 'admin';
        var createdOn = new Date();
        //req body 
        var  bookId = req.body.bookId; 
        var title = req.body.title; 
        var description   = req.body.description;
        var auther   = req.body.auther;
        var publisher   = req.body.publisher;
        var pages   = req.body.pages;
        var storeCode   = req.body.storeCode;


        if(!bookId || !title  || !auther || !publisher || !storeCode){
            return res.status(500).send({error :'bookId,book , title , author , publisher and storeCode  are  required , can not be empty'})

        }
        values = [title , description , auther, publisher, pages,storeCode,createdOn,createdBy,bookId];
        var updateBookQuery = queries.queryList.UPDATE_BOOK_QUERY;
        await dbConnection.dbQuery(updateBookQuery,values);
        return res.status(201).send("Successfully update book :"+bookId);

    } catch(err){
        console.log("Error : "+err);
        return res.status(500).send({error:"Failed to update book :"+bookId})
    }
 

}

exports.deleteBook = async (req,res) => 
{
    var bookId = req.params.bookId;
    try{

        if(!bookId){

            return res.status(500).send({error:'bookId must be provided'});   
        }   
        var deleteBookQuery = queries.queryList.DELETE_BOOK_QUERY;
        await dbConnection.dbQuery(deleteBookQuery,[bookId]);
        return res.status(200).send({error:'book deleted successfully'});
    
    }
    catch (err){
        return res.status(500).send({error:'cant delete book'});   


    }
   
}
