var express = require('express');
//const fetch = require('node-fetch');
const fs = require('fs')

var app = express();

//  Start Serwera
app.listen(2137, async function() {
    await console.log('Server starting on port 2137!');
});
