const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { checkCC } = require('../../import_folder/functions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Answers all your questions, 100% reliable')
        .addStringOption(option => option.setName('question').setDescription('the question you wish to ask').setRequired(true)),
    async execute(interaction) {
        var ccheck = await checkCC(interaction, null, null)
        if (ccheck) {
            const Answers = ['Yes', 'Of course', 'No', 'Maybe', 'Probably', 'Definitely', 'Not even in your [wildest dreams](https://www.youtube.com/watch?v=IdneKLhsWOQ)', 'Maybe not', 'Probably not', 'I don\'t know', 'Ask your mom', 'Who knows? I don\'t, lol', 'Error 404, Answer not found', 'Ask again later', 'I am not going to answer that']
            const AnswersArr = Answers[Math.floor(Math.random() * Answers.length)];
            const Question = interaction.options.getString('question')
            var AnswerEmbed = new Discord.MessageEmbed()
                .setColor(interaction.member.displayHexColor)
                .setDescription(`> _${interaction.user.username} asked "${Question}"_\nMy answer is: **${AnswersArr}**`)
                .setFooter(`Requested by ${interaction.user.username}`)
                .setTimestamp();
            await interaction.reply({ embeds: [AnswerEmbed] });
        }
    },
};