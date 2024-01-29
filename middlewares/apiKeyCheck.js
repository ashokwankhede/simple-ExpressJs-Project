function apiKey (req,res,next) {

    const API_KEY = "1234567";

    const key = req.query.key;

    if  (!key){ 
        return res.status(403).send([{
            status:'403',
            error: 'Missing required query parameter - key'

        }]); 
    } else if (key !== API_KEY ) {
       return res.status(401).send([{
        status:"401",
        error :"Invalid API Key"
       }])
    }else{
         console.log("API KEY is Valid!");
        // This else block will allow  the request to proceed further in the middleware chain after checking the key.
      next();
    };
};

module.exports =  apiKey;