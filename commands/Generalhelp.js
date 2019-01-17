const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setFooter(message.author.username + " Needed help.", message.author.avatarURL)
   .setAuthor("General Commands.")
   .setTitle(message.author.username)
   .setColor("BLUE")
   .setDescription("[This commands can be used by everyone](https://www.google.com)")
   message.channel.send(embed)
}

module.exports.help = {
    name: "general help",
    aliases: []
}
