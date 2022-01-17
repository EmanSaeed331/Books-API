exports.getStoreList= (req,res)=>{
    try{

        return res.status(200).send(JSON.stringify(values));
    }
    catch(e){
        return res.status(500).send({err:'Failed to list Store'})

    }

}