const express = require('express');
const path = require('path');
const mainRouter = require('./routs/index');
const productsRouter = require('./routs/products')
const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs'); // set view engine 

// Move the static middleware below the routers
app.use(mainRouter); // first parameter is for the prefix of the URL
app.use(productsRouter);
app.use(express.static('public'));
app.use(express.json());


app.listen(PORT, () => console.log(`Server is ready on the PORT http://localhost:${PORT}`));
