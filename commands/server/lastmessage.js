const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { checkPerms } = require('../../import_folder/functions');
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lastmessage')
        .setDescription('start a last message event')
        .addUserOption(option => option.setName('donator').setDescription('select a donator or leave empty if you\'re the donator').setRequired(false))
        .addStringOption(option => option.setName('message').setDescription('input message to display in the embed').setRequired(false)),

    async execute(interaction) {
        var check = await checkPerms(interaction, '688386729807577284', '759704464423780422')
        if (check) {
            const host = interaction.options.getUser('donator') || interaction.user;
            const lmmsg = interaction.options.getString('message')
            var lmEmbed = new Discord.MessageEmbed()
                .setTitle(`<:sevenmessage:750647888958324747> Last Message Event <:sevenmessage:750647888958324747>`)
                .setDescription(`<a:sevenmoney:750415278973648947> The **last person to send a message in the channel wins**.\n⋅<a:sevenjoin:747770291278577695> The channel will be unlocked once the event starts and it'll be locked randomly at any point and whoever has sent the last message will win the event\n⋅ react with <:sevenupdate:747770556610248754> if you're ready to play!`)
                .setAuthor(host.username, host.displayAvatarURL({ dynamic: true }))
                .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                .setColor(host.displayHexColor)
                .setTimestamp()
                .setFooter(`Event starts in 10 seconds · Good luck!`, interaction.guild.iconURL({ dynamic: true }));
            if (lmmsg) {
                lmEmbed.addFields({ name: '<:sevenmessage:750647888958324747> Message', value: lmmsg });
            }
            const startEmbed = new Discord.MessageEmbed()
                .setTitle('Event has started!')
                .setDescription('Prize: 1 <:seventrophy:883468123309760532>')
                .setAuthor(host.username, host.displayAvatarURL({ dynamic: true }))
                .setColor(host.displayHexColor)
                .setFooter(`Good luck!`)
                .setTimestamp();

            // is thinking…, interaction token valid for 15 mins
            await interaction.deferReply();
            await wait(1000);

            // send the ping embed and separately pings the role (interaction replies cannot ping)
            await interaction.channel.send(`<@&735077282636496913>`)
            const message = await interaction.followUp({ embeds: [lmEmbed], fetchReply: true });
            message.react('747770556610248754')

            //send the start embed + unlocks channel
            await wait(10000);
            await interaction.followUp({ embeds: [startEmbed] }).then(async (int) => {
                int.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: true });
            })
            //send the stop embed + lock the channel
            var time = Math.floor(Math.random() * 25) + 10;
            await wait(time * 1000)
            await interaction.channel.messages.fetch({ limit: 1 }).then(async (m) => {
                const endEmbed = new Discord.MessageEmbed()
                    .setTitle(`<:sevenmessage:750647888958324747> The event has ended! <:sevenmessage:750647888958324747>`)
                    .setDescription(`<a:sevenmoney:750415278973648947> The winner is <@${m.first().author.id}>!\nYou won the <:seventrophy:883468123309760532>!`)
                    .setColor('#00fa9a')
                    .setThumbnail(m.first().guild.iconURL({ dynamic: true }))
                    .setFooter(`thanks for playing!`);

                await interaction.channel.send({ embeds: [endEmbed] }).then(async (int) => {
                    int.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: false });
                })
            })
        }
    },
};