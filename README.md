# Server

Pre-requisite: You must have Node.js installed on your machine to run this. 

This script utilizes Node.js to create a request and response server without the need for a web browser, but utilizes user input through a web browser to respond to the server.

To spin up this server:
  1. Save both the Server.js and all html pages in a folder on your machine. 
  2. Open that folder within your code editor.
  3. You must add a Username and Password in the 'users' object on line 7 of the script.
  4. Type 'node (filename).js' in a new Terminal window within your code editor.
  5. Open a web browser and navigate to 'localhost:{PORT}' in the url navigation bar. The port hard coded in the Server.js script is 5000 but you can change that on line 6 of the script.

When the server is running, you can open the developer tools within the browser to monitor the network of sending a response to the server. In the future, SSH and a DBMS will be enabled for this script (long in the future).
  
