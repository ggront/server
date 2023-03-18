# Server

Pre-requisite: You must have Node.js installed on your machine to run this. 

This script utilizes Node.js to create a request and response server without the need for a web browser, but utilizes user input through a web browser to create back end database. Currently the backend only consists of one user input and dynamically updates that response in a .txt file.

To spin up this server:
  1. Save both the Server.js and Routes.js file in a folder on your machine. 
  2. Open that folder within your code editor.
  3. Type node (filename).js in a new Terminal window within your code editor.
  4. Open a web browser and navigate to 'localhost:3000' in the url navigation bar.
  5. Upon entering text into the input field and pressing 'Send', the browser will send a response back to the server and create or alter the existing .txt file.

When the server is running, you can open the developer tools within the browser to monitor the network of sending a response to the backend. i.e click 'Send' after entering a response in the input field and you will see a POST method with a 200 status code to the backend.
  
