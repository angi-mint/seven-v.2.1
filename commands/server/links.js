const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('links')
        .setDescription('view server-related links'),
    async execute(interaction) {
        const linkEmbed = new Discord.MessageEmbed()
            .setTitle(`Server Links`)
            .setDescription(`Here are all important server-related links.`)
            .setTimestamp()
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setColor(interaction.member.displayHexColor)
            .setFooter('thank you for your hard work!');

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton().setLabel('dyno').setURL('https://dyno.gg/manage/688102135363141652').setStyle('LINK'),
                new MessageButton().setLabel('carl-bot').setURL('https://carl.gg/dashboard/688102135363141652/botsettings').setStyle('LINK'),
                new MessageButton().setLabel('seven repo').setURL('https://github.com/angi-mint/seven-v.2.1').setStyle('LINK'),
                new MessageButton().setLabel('top.gg').setURL('https://top.gg/servers/688102135363141652/vote').setStyle('LINK'),
                new MessageButton().setLabel('dbl.com').setURL('https://discordbotlist.com/servers/your-eyes-tell/upvote').setStyle('LINK')
            ); await interaction.reply({ embeds: [linkEmbed], components: [row] });
    },
};