const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {if ((message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365"))
  message.stop();
  message.delete();
    var embed = new Discord.RichEmbed()
    .setAuthor("⚙Soft Shutdown In progess ⚙", "https://media.discordapp.net/attachments/596716658857345026/635949584887316510/image0.gif")
    .setColor("#000000")

   
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/637394515430211605/image0.gif")
    
          
    
    message.channel.send(embed);  
                                      console.log("oof")                }
module.exports.help = {
      name:"",
    description: "A dev commands help",
    usage: "for devs only"
    
}            