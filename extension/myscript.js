$(document).ready(function(){

    chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	url = document.URL;
    	if(url.indexOf('interviewbit') != -1){
    		statement = document.getElementById("problem-content").innerText;
    		title = document.getElementsByClassName("panel-title pull-left")[0].innerText;
    		console.log("title :" + title)
	    	response = `statement=`+statement+`&title=`+title+`&url=`+url+`&host=interviewbit`;
	        sendResponse(response);
    	}else if(url.indexOf('codechef') != -1){
    		el = document.getElementsByClassName("problem-statement")[0]; 
    		children = el.childElementCount ; 
    		statement = ''; 
    		for(var i=0;i<children - 2;i++){
    			statement += el.children[i].innerText+ '\n';
    		}
    		statement = statement.trim();
    		title = document.getElementsByTagName("h1")[1].innerText.split('Problem Code')[0].trim();
    		response = `statement=`+statement+`&title=`+title+`&url=`+url+`&host=codechef`;
    		sendResponse(response);
    	}else if(url.indexOf('hackerearth') != -1){
    		title = document.getElementById("fullscreen-problem-title").innerText;
    		statement = document.getElementsByClassName("starwars-lab")[0].innerText + 
    					document.getElementsByClassName("less-margin-2 input-output-container")[0].innerText;
    		response = `statement=`+statement+`&title=`+title+`&url=`+url+`&host=hackerearth`;
			sendResponse(response);    		
    	}	
    });
});