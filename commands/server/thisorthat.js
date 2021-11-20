const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { checkPerms } = require('../../import_folder/functions')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`thisorthat`)
        .setDescription('this or that?')
        .addStringOption(option => option.setName('this').setDescription('this …').setRequired(true))
        .addStringOption(option => option.setName('that').setDescription('or …').setRequired(true)),

    async execute(interaction) {
        var check = await checkPerms(interaction, '735069864636710923', '878377019191230535')
        if (check) {
            const This = interaction.options.getString('this')
            const That = interaction.options.getString('that')

            const randomemojiArr = ['<a:sevenorangequestion:822062607279456267>', '<a:sevenpickquestion:822062531060695041>', '<a:sevenbluequestion:822061984417710140>']
            var RandEmoji = randomemojiArr[Math.floor(Math.random() * randomemojiArr.length)];
            var tot = new Discord.MessageEmbed()
                .setTitle(`**this or that?**`)
                .setDescription(`╭・୨୧・・・・・・・・🍦 ╮\n︰\n${RandEmoji} !⠀︰**this or that**\n︰\n<a:seventhis:911623942052130856> ${This}\n<a:seventhat:911623941808848936> or ${That}\n: \n ╰ 🍦・・・・・・・・୨୧・╯`)
                .setColor(interaction.member.displayHexColor)
                .setTimestamp()
                .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }));

            await interaction.reply({ embeds: [tot], fetchReply: true }).then(async (m) => {
                interaction.channel.send(`<@&735077282636496913>`)
                m.react('911623942052130856')
                m.react('911623941808848936')

            })
        }
    },
};