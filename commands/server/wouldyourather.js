const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { checkPerms } = require('../../import_folder/functions')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`wouldyourather`)
        .setDescription('this or that?')
        .addStringOption(option => option.setName('option1').setDescription('would you rather …').setRequired(true))
        .addStringOption(option => option.setName('option2').setDescription('or …').setRequired(true)),

    async execute(interaction) {
        var check = await checkPerms(interaction, '735069864636710923', '878377019191230535')
        if (check) {
            const Option1 = interaction.options.getString('option1')
            const Option2 = interaction.options.getString('option2')

            const randomemojiArr = ['<a:sevenorangequestion:822062607279456267>', '<a:sevenpickquestion:822062531060695041>', '<a:sevenbluequestion:822061984417710140>']
            var RandEmoji = randomemojiArr[Math.floor(Math.random() * randomemojiArr.length)];
            var wyr = new Discord.MessageEmbed()
                .setTitle(`**Would you rather**`)
                .setDescription(`╭・୨୧・・・・・・・・:cupcake: ╮\n︰\n${RandEmoji} !⠀︰**Would you rather…**\n︰\n<:sevenone:883456409075851304> ${Option1}\n<:seventwo:883456408979386398> or ${Option2}\n: \n ╰ :cupcake:・・・・・・・・୨୧・╯`)
                .setColor(interaction.member.displayHexColor)
                .setTimestamp()
                .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }));

            const message = await interaction.reply({ content: '<@&735077282636496913>', embeds: [wyr], fetchReply: true })
            message.react('883456409075851304')
            message.react('883456408979386398')
        }
    },
};