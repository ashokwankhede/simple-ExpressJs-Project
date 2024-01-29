const router = require('express').Router();
const middlewareVerification = require('../middlewares/apiKeyCheck')

// Middleware verification for all routs
// router.use(middlewareVerification);

router.get('/',(req,res) => {
    res.render('index',{
        "title":'My Home Page'
    });
});

router.get('/about',(req,res) => {
    res.render('about',{
        "title":'My About Page'
    });
});




// Middleware verification for only one route 
// router.get('/products',middlewareVerification,(req,res) =>{
//     res.json([
//         {
//             id: "123",
//             product:"chrome"
//         },
//         {
//             id: "124",
//             product:"firefox"
//         }
//     ]);
// });



module.exports = router;
