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
    var channels = []
    if (categoryArray) {
        categoryArray.forEach(category => {
            interaction.client.channels.cache.get(category).children.forEach(child => {
                channels.push(child.id);
            })
        })
    }
    if (channelArray) {
        channelArray.forEach(channel => {
            channels.push(channel.id);
        });
    }
    if (channels.includes(interaction.channel.id)) {
        await interaction.reply({ content: `You can't use this command here!`, ephemeral: true })
        return false
    }
    return true
}
module.exports = { checkPerms, checkCC };