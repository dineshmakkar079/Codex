var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var fs = require('fs');
var exec = require('child_process').exec;
app.post('/',(req,res)=>{
	console.log('post requset recieved')
	var probStatement = req.body.statement;
	var probTitle = req.body.title;
	var probUrl = req.body.url;
	var host = req.body.host;

	probTitle = probTitle.split(' ').join('_');

	starterCode = "#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main(){\n\n\treturn 0;\n}\n"

	// To display limited line length in IDE.
	l = probStatement.length;
	newProbStatement = '';
	var maxLength = 95, start = 0,end = maxLength;
	while(start < l){
		for(var i=end;i<l && probStatement[i]!=' ';i++);
		end = i+1;
		newProbStatement = newProbStatement + probStatement.substring(start,end) + '\n';
		start = end ;
		end = start + maxLength;
	}
	probStatement = newProbStatement;

	// Make new file only if file doesn't exist already (i.e. if opened earlier) 
	if(fs.readdirSync('/home/makkar/Documents/Coding/'+ host + '/').indexOf(probTitle + '.cpp') == -1)
		fs.appendFileSync('/home/makkar/Documents/Coding/'+ host + '/' + probTitle + '.cpp' , '/*\nTime : ' +  (new Date()).toString()  +'\nURL : ' + probUrl + '\n' + probStatement +'\n*/\n\n' + starterCode)
	
	exec("/home/makkar/Downloads/VSCode-linux-x64/code /home/makkar/Documents/Coding/" + host + "/"+probTitle+".cpp &", ()=>{
	 	console.log('launched VS Code.')
		res.send("Done");
	});
})
app.listen(12165);
console.log('server started.')
