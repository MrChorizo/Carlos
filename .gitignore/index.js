const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Carlos, !help");
    console.log("Carlos débarque dans le game");
});

bot.on('message', function (message) {
    if (message.content === 'ping') {
        message.reply('pong')
    }
})

bot.login("NDYwNjE0NzUwMTc1MjMyMDA0.DhJkGg.Khblelnig_LfR-JKBBqpgEYy3_Y");
