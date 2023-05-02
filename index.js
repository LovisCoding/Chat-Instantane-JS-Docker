const app = require ('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let nbPersonne = 0;
var count = 0;

app.get('/', (req,res) => 
{
	res.sendFile(`${__dirname}/index.html`)
})

app.get('/style.css', (req,res) => 
{
	res.sendFile(`${__dirname}/style.css`)
})


io.on('connection',(socket) => 
{
	console.log('Un utilisateur s\'est connecté');
	io.sockets.emit('message', { count: count });
	socket.on('disconnect', () => 
	{
		console.log('Un utilisateur s\'est déconnecté');
		io.sockets.emit('message', { count: count });
	});
	socket.on('chat message', (msg) => 
	{
		io.emit('chat message', msg);
	});
	

});


server.listen(80, () => 
{
	console.log('Ecoute sur le port 80')
})
