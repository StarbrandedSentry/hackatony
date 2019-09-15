// [START NODE SCRIPT]
const https = require('https');

const options = {
    hostname: 'www.gstatic.com',
    port: 443,
    path: '/firebasejs/releases.json',
    method: 'GET',
};

const request = https.request(options, response => {
    let data = '';
    response.on('data', chunk => {
        data += chunk;
    });
    response.on('end', () => {
        console.log(data);
    });
});
request.end();
// [END NODE SCRIPT]