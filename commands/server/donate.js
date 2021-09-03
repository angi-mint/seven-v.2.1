const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { checkPerms } = require('../../import_folder/functions')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('donate to a giveaway!')
        .addStringOption(option => option.setName('prize').setDescription('specify the giveaway prize').setRequired(true))
        .addStringOption(option => option.setName('time').setDescription('specify the giveaway time').setRequired(true))
        .addNumberOption(option => option.setName('winners').setDescription('specify the amount of winners').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('specify a giveaway message').setRequired(false))
        .addStringOption(option => option.setName('requirement').setDescription('specify the (level) requirements').setRequired(false)),

    async execute(interaction) {
        var check = await checkPerms(interaction, null, "738458175187058698");
        if (check) {
            const msg = interaction.options.getString('message')
            const req = interaction.options.getString('requirement')

            var DonationEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(interaction.member.displayHexColor)
                .addFields(
                    { name: `Donator`, value: `${interaction.user} (${interaction.user.tag}) ` },
                    { name: 'Prize', value: `${interaction.options.getString('prize')}` },
                    { name: 'Time', value: `${interaction.options.getString('time')}` },
                    { name: 'Winners', value: `${interaction.options.getNumber('winners')}` })
                .setFooter(`Good luck!`, interaction.guild.iconURL({ dynamic: true }));
            if (msg) { DonationEmbed.addFields({ name: 'Message', value: msg }); }
            if (req) { DonationEmbed.addFields({ name: 'Requirements', value: req }); }

            await interaction.reply({ content: '<@&688386729807577284>', embeds: [DonationEmbed] });
        }
    },
};