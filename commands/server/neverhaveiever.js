const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { checkPerms } = require('../../import_folder/functions')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`neverhaveiever`)
        .setDescription('Ask a never have I ever question')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('the question you wish to ask')
                .setRequired(true)),
    async execute(interaction) {
        var check = await checkPerms(interaction, '735069864636710923', '878376933367373894')
        if (check) {
            const Question = interaction.options.getString('question')
            const randomemojiArr = ['<a:sevenorangequestion:822062607279456267>', '<a:sevenpickquestion:822062531060695041>', '<a:sevenbluequestion:822061984417710140>']
            var RandEmoji = randomemojiArr[Math.floor(Math.random() * randomemojiArr.length)];
            var nhie = new Discord.MessageEmbed()
                .setTitle(`**Never have I ever**`)
                .setDescription(`╭・୨୧・・・・・・・・:cupcake: ╮\n︰\n${RandEmoji} !⠀︰**${Question}**\n︰\n<:sevenyes:822064176750919681> I have\n<:sevencross:822064409689718874> I haven't\n: \n ╰ :cupcake:・・・・・・・・୨୧・╯`)
                .setColor(interaction.member.displayHexColor)
                .setTimestamp()
                .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }));

            const message = await interaction.reply({ content: '<@&735077282636496913>', embeds: [nhie], fetchReply: true })
            message.react('822064176750919681')
            message.react('822064409689718874')
        }
    },
};