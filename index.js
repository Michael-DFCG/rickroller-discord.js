const Discord = require('discord.js);
const client = new Discord.Client();
const pagination = require('discord.js-pagination');

client.on('message', message => {

  if (message.content === `${prefix}minigame`) {

    const pagina1 = new Discord.MessageEmbed()

    .setTitle('reagisci con ā¶ļø per iniziare')

    

    const pagina2 = new Discord.MessageEmbed()

    .setTitle("KEK\n usa il dito per giocare")

    .setDescription("š©š©š©š©š©\nš©š©š©š©š©\nš©š©š¦š©š©\nš©š©š©š©š©\nš©š©š©š©š©")

    

    const pagina3 = new Discord.MessageEmbed()

    .setImage('https://raw.githubusercontent.com/Michael-DFCG/rickastley/main/tenor.gif')

    

    const pages = [

      pagina1,

      pagina2,

      pagina3

      ];

    const emoji = ["š", "ā¶ļø"]

    const timeout = '1000000000'

    pagination(message, pages, emoji, timeout)

  }

})

