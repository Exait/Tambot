const Discord = require('discord.js')
const Client = new Discord.Client()
const Config = require('./config.json')

Client.on('ready', () => {
	console.log("Tambot -> Connected")
	Client.user.setGame('Tamriel')
})

Client.on('message', msg => {

})

Client.login(Config['token'])