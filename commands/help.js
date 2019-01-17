const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("Help commands!", message.author.avatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .addField("mhelp", "Shows help for moderators!")
   .addField("ghelp", "Shows commands for everyone.")
   .addField("ohelp", "Shows help to 3 people only!")
   .setFooter(message.author.username + " requested this help.");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: []
}
