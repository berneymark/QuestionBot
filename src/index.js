require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

fs.readdir('./src/events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require('../src/events/' + file.toString())
    const eventName = file.split('.')[0]
    
    client.on(eventName, args => eventHandler(client, args))
  })
})

client.login(process.env.BOT_TOKEN)