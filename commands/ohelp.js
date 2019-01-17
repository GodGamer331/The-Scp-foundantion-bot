const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms") // lol

module.exports.run = async (bot, message, args) => {
   let oRole = message.guild.roles.find("name", "dev")
   if(!oRole) return message.reply("You are not authorized to view this.\n If you have permission from dev then please tell them to screen you this help.")
   if(message.member.roles.has(oRole.id)) {
   var embed = new Discord.RichEmbed()
   .setColor("0x1518a8")
   .setAuthor("<- Your icon, Help for devs.", message.author.avatarURL)
   .setThumbnail(message.author.avatarURL)
   .setDescription("FOR DEVS ONLY [HERE](http://www.scp-wiki.net)")
   message.channel.send(embed)
   }
}

module.exports.help = {
    name: "ohelp",
    aliases: []
}
