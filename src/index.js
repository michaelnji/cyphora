const { Events, Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config(); 

const bot = new Client({ intents: GatewayIntentBits.Guilds });

bot.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Bot has logged in as $(bot.user.tag)`);
});

bot.login(process.env.cyphus);

