const toolHelper = require('./helpers/tool-helper');
const express = require('express')
const port = process.env.PORT | 3000;

module.exports.start= () => {
    const app = express()
    app.set('view engine', 'ejs');
    app.set('views', __dirname + "/views");
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use(function(req, res, next) {
        res.locals.query = req.query;
        res.locals.url   = req.originalUrl;
        res.locals.toolBase = false;
        res.locals.outputPresent = false;
        next();
    });

    app.get('/', function(req, res, next) {
        if(toolHelper.checkTool(req.params.toolName, 30)) {
            toolHelper.invoke(req, res).then(x => {
                res.render('pages/index');
            })
        } else 
            res.render('pages/index');
    });
            
    app.listen(port, () => {
      console.log(`FTIO tool listening at http://localhost:${port}`)
    })
}