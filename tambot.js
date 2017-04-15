const Discord = require('discord.js')
const Client = new Discord.Client()
const Config = require('./config.json')

Client.on('ready', () => {

})

Client.on('message', msg => {

})

Client.login(Config['token'])