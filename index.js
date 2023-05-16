const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


      
app.get('/', (req,res) => 
{
	res.sendFile(`${__dirname}/index.html`)
})

app.get('/style.css', (req,res) => 
{
	res.sendFile(`${__dirname}/style.css`)
})

app.get('/images/bkgrnd.jpg', (req,res) => 
{
	res.sendFile(`${__dirname}/images/bkgrnd.jpg`)
})
app.get('/images/test.jpg', (req,res) => 
{
	res.sendFile(`${__dirname}/images/test.jpg`)
})
app.get('/images/icon.ico', (req,res) => 
{
	res.sendFile(`${__dirname}/images/icon.ico`)
})

io.on('connection',(socket) => 
{
	console.log('Un utilisateur s\'est connecté');
	socket.on('disconnect', () => 
	{
		console.log('Un utilisateur s\'est déconnecté');
	});
	socket.on('chat message', (msg) => 
	{
		io.emit('chat message', msg);
	});
	

});


server.listen(8080, () => 
{
	console.log('Ecoute sur le port 8080')
})
