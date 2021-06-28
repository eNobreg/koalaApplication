// browser.js

const http = require ('http');
const { connect } = require('http2');
const puppeteer = require ('puppeteer');


let app = http.createServer((req, res) => {
	res.writeHead (200, {'Content-Type': 'text/plain'});
	(async () => {
		const browser = await puppeteer.launch({headless : false});
		const page = await browser.newPage();
		await page.goto('https://google.com');
	})();

	let sendScreenshot = (() => {
		
	})

	res.end("Running Puppeteer Server");
});

app.listen(3000, '127.0.0.1');
console.log("Node server running on port 3000");