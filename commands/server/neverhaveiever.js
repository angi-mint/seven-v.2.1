const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`neverhaveiever`)
        .setDescription('Ask a never have I ever question')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('the question you wish to ask')
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.member.roles.cache.has('735069864636710923')) {
            await interaction.reply({ content: 'Only Event Managers can use this command', ephemeral: true })
        } if (interaction.channel.id !== '878376933367373894') {
            await interaction.reply({ content: 'You can only use this command in <#878376933367373894>', ephemeral: true })
        } else {
            const Question = interaction.options.getString('question')
            const randomemojiArr = ['<a:sevenorangequestion:822062607279456267>', '<a:sevenpickquestion:822062531060695041>', '<a:sevenbluequestion:822061984417710140>']
            var RandEmoji = randomemojiArr[Math.floor(Math.random() * randomemojiArr.length)];
            var nhie = new Discord.MessageEmbed()
                .setTitle(`**Never have I ever**`)
                .setDescription(`╭・୨୧・・・・・・・・:cupcake: ╮\n︰\n${RandEmoji} !⠀︰**${Question}**\n︰\n<:sevenyes:822064176750919681> I have\n<:sevencross:822064409689718874> I haven't\n: \n ╰ :cupcake:・・・・・・・・୨୧・╯`)
                .setColor(interaction.member.displayHexColor)
                .setTimestamp()
                .setFooter(``)
                .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }));

            const message = await interaction.reply({ embeds: [nhie], fetchReply: true })
            message.react('822064176750919681')
            message.react('822064409689718874')
        }
    },
};