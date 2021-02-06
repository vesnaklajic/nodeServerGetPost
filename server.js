//require Core Node Moduls
const http = require('http');
const fs = require('fs');

//Creatin a server on the post 3000 using http core modul; attributes of the server are "req" and "res"
const server = http.createServer((req, res) => {
    console.log('**Server created! Request is send to localhost 3000****');
    console.log("My url: " + req.url, "My method: " + req.method);

    //response if the clients url request is / and method GET
    if (req.url == "/" && req.method == "GET") { 
        //using fs core module to make rs variable with content of index.html
        let rs = fs.createReadStream('index.html');
        //striming between indew and server response
        rs.pipe(res);
    }

    //response if the clients url request is /data and method GET (pressed Get Data in index page)
    else if (req.url == "/data" && req.method == "GET") { 
        //using fs module to create read stream variabme rs
        let rs = fs.createReadStream('data.json');
        //piping between rs variable and server response 
        rs.pipe(res);
    }
});

//make a listener if port 3000 is activated, give a comment
server.listen(3000, () => {
    console.log('Listening to port 3000');

})



