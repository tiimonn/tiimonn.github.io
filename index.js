require('dotenv').config()

const hostname = process.env.HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;
const apiKey = process.env.API_KEY;

console.log(hostname);
console.log(database);
console.log(port);

var https = require("https");

var options = {
	hostname: `api.ipdata.co`,
	port: 443,
	path: `/?api-key=${apiKey}`,
	method: 'GET'
};

const req = https.request(options, res => {
	console.log(`statusCode: ${res.statusCode}`)

	res.on('data', d => {
		process.stdout.write(d)
	})
})

req.on('error', error => {
	console.error(error)
})

req.end()

// setCookie("hello", "200", 3000)

// setCookie("", "200", 3000)

console.log(apiKey)