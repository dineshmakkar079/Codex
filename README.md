# Codex
Chrome extension that links Atom text editor with Codechef, Hackerearth, Interviewbit, GeeksForGeeks.

<h3>About</h3>
This extension automatically loads the question from above mentioned websites in Atom Text Editor.
<h5>Adavnatges</h5>
<ul>
<li>Saves code locally with problem statement so that next time you can easily see what the problem statement of this code.</li>
<li>Don't need to switch between browser and editor looking for problem statement again and again.</li>
<li>Problem statement and solution at one place with once click.</li>
</ul>

This is what this extension actually do.
<img src="https://raw.githubusercontent.com/dineshmakkar079/Codex/master/sample.png">

<h3>Usage</h3>
<ul>
<li>Download whole directory of extension with codex-server.js file.</li>
<li>Add following command at end of the file /home/{user}/.profile (so that you don't have to start the server manually, it automatically launches the server every time user logs in)
<pre>
nohup node /path/to/codex-server.js >> /path/to/file/in/which/to/log.log 2>&1 &
</pre>
</li>
<li>Go to "chrome://extensions" in chrome browser. Enable developer mode.</li>
<li>Click load unpacked extension and select the directory "extension" that you downloaded above.</li>
</ul>

<h4>Note : </h4> If you ever want to shut down the server manually. Follow as :
<ul>
<li>Type command in terminal <br><pre>ss -lntp "sport = :12165"</pre></li>
<li>Note the PID from above command and kill process using <br><pre>kill PID_OF_PROC</pre></li>
</ul>
<ul>Also : <br>
<li>Change the variable(CODE_PATH) in codex-server.js to folder where you want to save code</li>
<li>Create four folders with the names  geeksforgeeks ,  hackerearth, codechef, interviewbit inside the folder you made above.(with exactly these names.)</li>
</ul>

<h3>Star the repo if it helped you.</h3>
For help / suggestions - dineshmakkar079@gmail.com

<h2>Author</h2>
<h3>
Dinesh Makkar<br>
Pre-final year Undergrad<br>
IIT Guwahati.
</h3>
