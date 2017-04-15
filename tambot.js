const Discord = require('discord.js')
const Client = new Discord.Client()
const Config = require('./config.json')
const Firebase = require('firebase')
Firebase.initializeApp(Config['firebase'])
const Database = Firebase.database()
const Prefix = "r!"

Client.on('ready', () => {
	console.log("Tambot -> Connected")
	Client.user.setGame('Tamriel')
})

Client.on('message', msg => {
	var tokens = msg.content.split(' ')
})

Client.login(Config['token'])