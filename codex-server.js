var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var fs = require('fs');
var exec = require('child_process').exec;
app.post('/',(req,res)=>{
	var probStatement = req.body.statement;
	var probTitle = req.body.title;
	var probUrl = req.body.url;
	var host = req.body.host;

	probTitle = probTitle.split(' ').join('_');
	//if(probTitle.length){probTitle}
	//console.log(probStatement);
	l = probStatement.length;
	newProbStatement = '';
	var maxLength = 95, start = 0;
	while(start < l){
		newProbStatement += probStatement.substr(start, maxLength) + '\n';
		start += maxLength;
	}
	probStatement = newProbStatement;
	
	fs.appendFileSync('/home/makkar/Documents/Coding/'+ host + '/' + probTitle + '.cpp' , '/*\nURL : ' + probUrl + '\n' + probStatement +'\n-------------------------------------------------------\n*/\n')
	
	//console.log(probStatement)
	exec("/home/makkar/Downloads/VSCode-linux-x64/code /home/makkar/Documents/Coding/" + host + "/"+probTitle+".cpp &", ()=>{
	 	console.log('launched VS Code.')
		res.send("Done");
	});
})
app.listen(12165);
console.log('server started.')
