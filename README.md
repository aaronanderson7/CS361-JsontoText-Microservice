# Json-to-Text-Microservice
Aaron Anderson

# About
This repository will hold the code for my json to text microservice I am constructing for my partner's to do list application. 

# Instructions
1. Clone the repo to your local machine.
2. Open the project in a text editor.
3. Run ```npm install```
4. Run ```npm start```

# How to access the microservice
Json payload data can be sent to http://localhost:3000/json-to-text using http post requests in the following format:
#
A json payload will be sent in a request to the url above in the following format:
```
{"1": "laundry",
 "2": "homework",
 ...}
 ```
 #
 The http post response will be received from the API:
 ```
1:      laundry
2:      homework
...
 ```
 #
 With the text data, you can add the data to the new file as such:
 
 ```
 // npm install file-saver for the project.
 import { saveAs } from ("file-saver");
 
 // Create blob object with file content
var blob = new Blob(["HTTP RESPONSE TEXT DATA"], {
   type: "text/plain;charset=utf-8",
});
// Create and save the file using the FileWriter library
saveAs(Content, fileName);
```

or example HTML return code for REACT components can follow the below format:
```
<html>
<head>
   <script src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js" integrity="sha512-csNcFYJniKjJxRWRV1R7fvnXrycHP6qDR21mgz1ZP55xY5d+aHLfo9/FcGDQLfn2IfngbAHd8LdfsagcCqgTcQ==" crossorigin = "anonymous" referrerpolicy = "no-referrer"> </script>
</head>
   <body>
   <h2>Create text file and save it to local computer using <i> FileSaver </i> JavaScript Library.</h2>
   <button type = "button" onclick = "CreateTextFile();">Create Text File</button>
   <script>
      function CreateTextFile() {
         var blob = new Blob(["HTTP RESPONSE TEXT DATA"], {
            type: "text/plain;charset=utf-8",
         });
         saveAs(blob, "download.txt");
      }
   </script>
</body>
</html>
```
 
 
 # UML Diagram
<img width="764" alt="Screen Shot 2023-05-08 at 11 22 45 PM" src="https://user-images.githubusercontent.com/107898465/237011310-00097709-fc34-49e2-be8c-81f83b619a68.png">


