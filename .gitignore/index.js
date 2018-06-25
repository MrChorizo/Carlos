const Discord = require("discord.js");

const Google = require('./commands/google')

var bot = new Discord.Client();


bot.on("ready", function() {
    bot.user.setGame("Baiser ta mère");
    console.log("Carlos débarque dans le game");
});

bot.on('guildMemberAdd', function (member) {
   message.channel.send('Wesh le shab')
}

bot.on('message', function (message) {
    if Google.match(message)) {
        Google.action(message)
    }
    if (message.content === 'ping') {
        message.channel.send('pong')
    }
})

bot.on('message', function (message) {
    if (message.content === 'caca') {
        message.channel.send('Par caca tu veux dire prof ?')
    }
})

bot.on('message', function (message) {
    if (message.content === 'lol') {
        message.channel.send('lol c 1 deadgame')
    }
})

bot.on('message', function (message) {
    if (message.content === 'League of Legends') {
        message.channel.send('LoL c 1 deadgame')
    }
})

bot.on('message', function (message) {
    if (message.content === 'league des légendes') {
        message.channel.send('lol c 1 deadgame')
    }
})

bot.login("NDYwNjE0NzUwMTc1MjMyMDA0.DhJkGg.Khblelnig_LfR-JKBBqpgEYy3_Y");
