const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Support the server by upvoting it'),

    async execute(interaction) {
        var VoteEmbed = new Discord.MessageEmbed()
            .setTitle('Server Voting Pages')
            .setColor(interaction.member.displayHexColor)
            .setDescription(`**Upvote the server on top.gg** and gain an amari xp multi of 2 and the <@&770921149541384222> for 12 hours!`)
            .setFooter(`thank you for voting`)
            .setTimestamp();
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('top.gg')
                    .setURL('https://top.gg/servers/688102135363141652/vote')
                    .setStyle('LINK'),
                new MessageButton()
                    .setLabel('dbl.com')
                    .setURL('https://discordbotlist.com/servers/your-eyes-tell/upvote')
                    .setStyle('LINK')
            );
        await interaction.reply({ embeds: [VoteEmbed], components: [row] });
    },
};