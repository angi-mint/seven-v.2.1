const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('ping the giveaway ping!')
        .addUserOption(option => option.setName('donator').setDescription('select a donator or leave empty if you\'re the donator').setRequired(false))
        .addStringOption(option => option.setName('message').setDescription('input message to display in the embed').setRequired(false)),


    async execute(interaction) {

        if (!interaction.member.roles.cache.has('688386729807577284')) {
            await interaction.reply({ content: 'Only Giveaway Managers can use this command', ephemeral: true })
        } if (interaction.channel.id !== '759704464423780422') {
            await interaction.reply({ content: 'You can only use this command in <#759704464423780422>', ephemeral: true })
        } else {
            const host = interaction.options.getUser('donator') || interaction.user;
            const gwmsg = interaction.options.getString('message')
            var gwEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                .setColor(host.displayHexColor)
                .addFields({ name: `<a:sevenrich:750415401694920727> Donated by`, value: `${host}` })
                .setFooter(`Good luck!`, interaction.guild.iconURL({ dynamic: true }));
            if (gwmsg) {
                gwEmbed.addFields({ name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
            }

            await interaction.reply({ content: '<@&688428862672994307>', embeds: [gwEmbed] });
        }
    },
};