const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const mySecret = process.env['token']

const commands = [];
const dir = './commands/'
	fs.readdirSync(dir).forEach(dirs => {
		const commandFiles = fs.readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));
		for (const file of commandFiles) {
			const command = require(`${dir}/${dirs}/${file}`);
      	commands.push(command.data.toJSON());

			// Set a new item in the Collection
			// With the key as the command name and the value as the exported module
		}
	});
// Place your client and guild ids here
const clientId = '737933523918389328';
const guildId = '688102135363141652';


const rest = new REST({ version: '9' }).setToken(mySecret);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();