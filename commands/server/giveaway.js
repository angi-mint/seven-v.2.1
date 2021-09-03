const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { checkPerms } = require('../../import_folder/functions')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('ping the giveaway ping!')
        .addUserOption(option => option.setName('donator').setDescription('select a donator or leave empty if you\'re the donator').setRequired(false))
        .addStringOption(option => option.setName('message').setDescription('input message to display in the embed').setRequired(false)),


    async execute(interaction) {
        var check = await checkPerms(interaction, '688386729807577284', '759704464423780422')
        if (check) {
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