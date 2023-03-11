const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
    intents:
     [
           GatewayIntentBits.Guilds,
           GatewayIntentBits.GuildMembers,
           GatewayIntentBits.GuildEmojisAndStickers,
           GatewayIntentBits.GuildIntegrations,
           GatewayIntentBits.GuildWebhooks,
           GatewayIntentBits.GuildInvites,
           GatewayIntentBits.GuildVoiceStates,
           GatewayIntentBits.GuildPresences,
           GatewayIntentBits.GuildMessages,
           GatewayIntentBits.GuildMessageReactions,
           GatewayIntentBits.GuildMessageTyping,
           GatewayIntentBits.DirectMessages,
           GatewayIntentBits.DirectMessageReactions,
           GatewayIntentBits.DirectMessageTyping,
           GatewayIntentBits.MessageContent],
           shards: "auto",
           partials:
          [
          Partials.Message,
          Partials.Channel,
          Partials.GuildMember,
          Partials.Reaction, Partials.GuildScheduledEvent,
          Partials.User,
          Partials.ThreadMember
        ]});

const Discord = require("discord.js");
const fs = require("fs");
const Path = require("path");
client.commands = global.commands = new Discord.Collection();
const synchronizeSlashCommands = require('discord-sync-commands-v14');

const eventsRegister = () => {
    let eventsDir = Path.resolve(__dirname, './events');
    if (!fs.existsSync(eventsDir)) return console.log("No events dir");
    fs.readdirSync(eventsDir, { encoding: "utf-8" }).filter((cmd) => cmd.split(".").pop() === "js").forEach((event) => {
        let prop = require(`./events/${event}`);
        if (!prop) return console.log("No props.");
        console.log(`${event} was saved.`);
        client.on(event.split('.')[0], prop.bind(null, client));
        delete require.cache[require.resolve(`./events/${event}`)];
    });
};

const commandsRegister = () => {
  let commandsDir = Path.resolve(__dirname, './commands');
  if (!fs.existsSync(commandsDir)) return console.log("No events dir.");
  fs.readdirSync(commandsDir, { encoding: "utf-8" }).filter((cmd) => cmd.split(".").pop() === "js").forEach((command) => {
      let prop = require(`./commands/${command}`);
      if (!prop || !prop.options || !prop.options.name) return console.log("Invalid command file.");
      console.log(`${command} command saved`);
      client.commands.set(prop.options.name, prop);
      delete require.cache[require.resolve(`./commands/${command}`)];
  });
};

const slashCommandsRegister = () => {
    const commands = client.commands.filter((c) => c.options);
    const fetchOptions = { debug: true };
    synchronizeSlashCommands(client, commands.map((c) => c.options), fetchOptions);
};

eventsRegister();
commandsRegister();
slashCommandsRegister();

process.on('unhandledRejection', error => {
    console.log(error);

});

client.login(process.env.TOKEN)
