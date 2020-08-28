const fs = require('fs');

module.exports.TOOL_PATH= process.cwd();

module.exports.checkTool = () => {
    return fs.existsSync(this.TOOL_PATH + "/meta.json");
}

module.exports.getToolMeta = () => {
    var tool = require(this.TOOL_PATH + "/meta.json");
    return tool;
}

module.exports.getToolBase = (toolName) => {
    return this.TOOL_PATH;
}

module.exports.inputPresent = (toolName) => {
    return fs.existsSync(this.TOOL_PATH + "/input.ejs");
}

module.exports.runTool = (toolName, input) => {
    var tool = require(this.getToolBase() + "/run.js");
    return tool.run(input);
}

module.exports.invoke = (req, res) => {
    return new Promise((resolve, reject) => {
        res.locals.toolMeta = this.getToolMeta();
        res.locals.toolBase = this.getToolBase();
        res.locals.inputPresent = this.inputPresent();
        this.runTool(req.params.toolName, req).then(output => {
            res.locals.output = output;
    
            if(!res.locals.output)
                res.locals.output = {}
    
            if(!('status' in res.locals.output))
                res.locals.output.status = undefined;
            
            if(res.locals.output.title)
                res.locals.title = res.locals.output.title + " | " + res.locals.title;

            resolve();
        })
    });
}