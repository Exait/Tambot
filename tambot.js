const Discord = require('discord.js')
const Client = new Discord.Client()
const Config = require('./config.json')
const Firebase = require('firebase')
Firebase.initializeApp(Config['firebase'])
const Database = Firebase.database()

Client.on('ready', () => {
	console.log("Tambot -> Connected")
	Client.user.setGame('Tamriel')
})

Client.on('message', msg => {

})

Client.login(Config['token'])