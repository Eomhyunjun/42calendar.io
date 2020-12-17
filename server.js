var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'me',
	password : 'secret',
	database : 'my_db'
});
app.get('/db', function(req, res){
	vpool.getConnection(function(err, connection) {
		if (err) throw err; // not connected!

		// Use the connection
		connection.query('select * from Test', function (error, results, fields) {
			res.send(JSON.strinify(results));
			console.log('results', results);

			// When done with the connection, release it.
			connection.release();

			// Handle error after the release.
			if (error) throw error;

			// Don't use the connection here, it has been returned to the pool.
		});
	}); 
})


