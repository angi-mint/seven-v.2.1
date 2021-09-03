async function checkPerms(interaction, roleId, channelId) {
    if (roleId) {
        if (!interaction.member.roles.cache.has(roleId)) {
            await interaction.reply({ content: `Only <@&${roleId}> can use this command`, ephemeral: true })
            return false
        }
    }
    if (channelId) {
        if (interaction.channel.id !== channelId) {
            await interaction.reply({ content: `You can only use this command in <#${channelId}>`, ephemeral: true })
            return false
        }
    }
    return true
}

async function checkCC(interaction, categoryArray, channelArray) {
    var categories = categoryArray || ['878381216431243324', '878371183941283890', '878383976866271313', '878375374625579098', '878385184104382474', '878382909667541062']
    var channels = channelArray || ['749323243537694770', '688365623838900338', '815308130908373032', '804341865586360420', '804840317827940393', '804342118746161183', '880060414619177030']

    categories.forEach(category => {
        interaction.client.channels.cache.get(category).children.forEach(child => {
            channels.push(child.id);
        })
    })

    if (channels.includes(interaction.channel.id)) {
        await interaction.reply({ content: `You can't use this command here!`, ephemeral: true })
        return false
    }
    return true
}
module.exports = { checkPerms, checkCC };