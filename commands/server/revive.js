const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('revive')
        .setDescription('revive the server!')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('the question you wish to revive the server with')
                .setRequired(true)),


    async execute(interaction) {

        if (!interaction.member.roles.cache.has('737309369741606983')) {
            await interaction.reply({ content: 'Only Server Boosters can use this command', ephemeral: true })
        } if (interaction.channel.id !== '878371753934585856') {
            await interaction.reply({ content: 'You can only use this command in <#878371753934585856>', ephemeral: true })
        } else {
            const randomquestionArr = ['Who is your hero?', 'If you could live anywhere, where would it be?', 'What is your biggest fear?', 'What would you change about yourself if you could?', 'What really makes you angry?', 'What motivates you to work hard?', 'What is your favorite book to read?', 'What makes you laugh the most ? ', 'What did you want to be when you were small ? ', 'If you could choose to do anything for a day, what would it be ? ', 'Would you rather ride a bike, ride a horse, or drive a car ? ', 'Which would you rather do: wash dishes, mow the lawn, clean the bathroom, or vacuum the house ? ', 'If you could only eat one meal for the rest of your life, what would it be ? ', ' Who would you want to be stranded with on a deserted island ? ', 'If money was no object, what would you do all day ? ', 'If you could go back in time, what year would you travel to ? ', 'How would your friends describe you ? ', 'Who is your favorite staff member in the server ? ', 'What are your hobbies ? ', 'What would you do if you won the lottery ? ', 'If you could go back in time to change one thing, what would it be ? ', 'What\'s the longest you\'ve gone without sleep and why ? ', 'How often do you buy clothes ? ', 'Are you a clean or messy person ? ', ' How long does it take you to get ready in the morning ? ', 'What\'s your favorite fast food chain?', 'Do you love or hate roller coasters?', 'What\'s your favorite movie?', ' What three items would you take with you on a deserted island?', ' What was your favorite subject in school?', 'Are you related or distantly related to anyone famous?', 'Who was your first crush?', 'On a scale of 1-10 how funny would you say you are?', 'Pineapples on pizza? Yes or no?', 'How many languages do you speak?', 'If you eat yourself will you get twice as big or disappear completely?', 'Is cereal soup?', 'Is a hotdog a sandwich?', 'Shark diving,  bungee jumping, or skydiving?', 'What\'s your favorite Disney movie?', 'What makes you feel super loved?'];
            const randompictureArr = ['https://media.discordapp.net/attachments/688109298852692055/804857965693108244/pb2.gif', 'https://media.discordapp.net/attachments/688109298852692055/804857965693108244/pb2.gif', 'https://media.discordapp.net/attachments/688109298852692055/804857980565848064/heavy_urb_places_thats_gonna_get_flooded_when_sea_rise_1cm.gif', 'https://media.discordapp.net/attachments/688109298852692055/804884957151494164/rain.gif', 'https://media.discordapp.net/attachments/688109298852692055/804884961261912104/windchime1.gif', 'https://media.discordapp.net/attachments/688109298852692055/804884985731350559/stargazing.gif', 'https://media.discordapp.net/attachments/688109298852692055/804885016651759667/sky.gif'];

            var RandQuest = randomquestionArr[Math.floor(Math.random() * randomquestionArr.length)];
            var RandPic = randompictureArr[Math.floor(Math.random() * randompictureArr.length)];


            var ReviveEmbed = new Discord.MessageEmbed()
                .setTitle(`˚⁀➷ฅ୨<a:sevensparkle:804862730661920808> ꒰ Chat Revive ꒱`)
                .setDescription(`╭ :milk:  ∷ ᵕωᵕ  :watermelon: ⸝⸝ ഒ˚₊ here is a question to make the chat active:\n \u200b \n・ ✦ **${RandQuest}**`)
                .setTimestamp()
                .setColor(interaction.member.displayHexColor)
                .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                .setImage(`${RandPic}`)
                .setFooter('╰ ꕤ︵︵・ᕱ⑅ᕱ・︵︵ ഒ₊');


            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel('top.gg')
                        .setURL('https://top.gg/servers/688102135363141652/vote')
                        .setStyle('LINK'),
                );

            await interaction.reply({ content: '<@&790254693888426026>', embeds: [ReviveEmbed], components: [row] });
        }
    },
};