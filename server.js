const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000; //set port as enviroment variable
const mainRouter = require('./routes/index')
const productRouter = require('./routes/products')
const ErrorHnadler = require('./Errorhandler/errorHandler');
app.use(express.static('public'))//serving static files
app.set('view engine', 'ejs'); //define template engine
app.use(mainRouter); //set routes 
app.use(productRouter); //set routes 
app.use(express.json());

app.use((req,res,next)=>
{
    return res.json({message : 'Page not found'});
    next();
})
app.use((err,req,res,next)=>
{
      if (err instanceof ErrorHnadler)
    {
        res.status(err.status).json({
             error : 
             {
                 message : err.message,
                 status: err.status
             }
            });
    }
    else 
    {
        res.status(500).json
        ({
          error : 
          {
              message : err.message,
              status: err.status

          }
        })
    }
    next();
})
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

