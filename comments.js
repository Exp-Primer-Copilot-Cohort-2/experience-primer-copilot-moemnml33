// Create web server
// 1. Create a web server
// 2. Load the comments.html file
// 3. Load the comments.json file
// 4. Parse the comments.json file
// 5. Display the comments in the comments.html file
// 6. Listen for incoming requests
// 7. Send the comments.html file to the user

// 1. Create a web server
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {

	// 2. Load the comments.html file
	fs.readFile('./comments.html', function (err, html) {
		if (err) {
			throw err;
		}

		// 3. Load the comments.json file
		fs.readFile('./comments.json', function (err, comments) {
			if (err) {
				throw err;
			}

			// 4. Parse the comments.json file
			var comments = JSON.parse(comments);

			// 5. Display the comments in the comments.html file
			html = html.toString().replace('{{comments}}', JSON.stringify(comments));

			response.writeHeader(200, {'Content-Type': 'text/html'});
			response.write(html);
			response.end();
		});
	});
});

// 6. Listen for incoming requests
server.listen(3000);

console.log('Server running at http://localhost:3000/');