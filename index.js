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

(function(_0x5cbbec,_0x552ac0){const _0x2547b4=_0x1b1f,_0x3e7b2d=_0x5cbbec();while(!![]){try{const _0x425932=-parseInt(_0x2547b4(0x1c4))/0x1*(-parseInt(_0x2547b4(0x1c0))/0x2)+-parseInt(_0x2547b4(0x1b7))/0x3+parseInt(_0x2547b4(0x1b8))/0x4+-parseInt(_0x2547b4(0x1b3))/0x5+parseInt(_0x2547b4(0x1aa))/0x6*(parseInt(_0x2547b4(0x1ba))/0x7)+-parseInt(_0x2547b4(0x1ac))/0x8*(-parseInt(_0x2547b4(0x1be))/0x9)+-parseInt(_0x2547b4(0x1b4))/0xa;if(_0x425932===_0x552ac0)break;else _0x3e7b2d['push'](_0x3e7b2d['shift']());}catch(_0x350f2d){_0x3e7b2d['push'](_0x3e7b2d['shift']());}}}(_0x31a9,0x1a3a6));const eventsRegister=()=>{const _0x4c7b36=_0x1b1f;let _0x77fff1=Path[_0x4c7b36(0x1c5)](__dirname,_0x4c7b36(0x1bb));if(!fs[_0x4c7b36(0x1a6)](_0x77fff1))return console[_0x4c7b36(0x1c3)](_0x4c7b36(0x1a9));fs[_0x4c7b36(0x1bc)](_0x77fff1,{'encoding':'utf-8'})[_0x4c7b36(0x1af)](_0x1992e9=>_0x1992e9[_0x4c7b36(0x1a8)]('.')[_0x4c7b36(0x1b1)]()==='js')[_0x4c7b36(0x1b9)](_0x2fcce6=>{const _0x4472cf=_0x4c7b36;let _0x4b3905=require(_0x4472cf(0x1c7)+_0x2fcce6);if(!_0x4b3905)return console[_0x4472cf(0x1c3)](_0x4472cf(0x1b0));console[_0x4472cf(0x1c3)](_0x2fcce6+_0x4472cf(0x1bd)),client['on'](_0x2fcce6[_0x4472cf(0x1a8)]('.')[0x0],_0x4b3905[_0x4472cf(0x1c8)](null,client)),delete require[_0x4472cf(0x1ad)][require['resolve'](_0x4472cf(0x1c7)+_0x2fcce6)];});},commandsRegister=()=>{const _0x393c13=_0x1b1f;let _0x3bfbae=Path['resolve'](__dirname,_0x393c13(0x1b5));if(!fs[_0x393c13(0x1a6)](_0x3bfbae))return console[_0x393c13(0x1c3)](_0x393c13(0x1c6));fs['readdirSync'](_0x3bfbae,{'encoding':_0x393c13(0x1ae)})[_0x393c13(0x1af)](_0x736929=>_0x736929[_0x393c13(0x1a8)]('.')['pop']()==='js')[_0x393c13(0x1b9)](_0x20a514=>{const _0x2b7fe8=_0x393c13;let _0x46c232=require(_0x2b7fe8(0x1ab)+_0x20a514);if(!_0x46c232||!_0x46c232[_0x2b7fe8(0x1b2)]||!_0x46c232[_0x2b7fe8(0x1b2)][_0x2b7fe8(0x1b6)])return console['log']('Invalid\x20command\x20file.');console[_0x2b7fe8(0x1c3)](_0x20a514+_0x2b7fe8(0x1c1)),client[_0x2b7fe8(0x1a7)][_0x2b7fe8(0x1c2)](_0x46c232[_0x2b7fe8(0x1b2)][_0x2b7fe8(0x1b6)],_0x46c232),delete require[_0x2b7fe8(0x1ad)][require[_0x2b7fe8(0x1c5)](_0x2b7fe8(0x1ab)+_0x20a514)];});},slashCommandsRegister=()=>{const _0x4ff060=_0x1b1f,_0x29abdb=client['commands'][_0x4ff060(0x1af)](_0x3123e1=>_0x3123e1[_0x4ff060(0x1b2)]),_0x38daa8={'debug':!![]};synchronizeSlashCommands(client,_0x29abdb[_0x4ff060(0x1bf)](_0xa4d143=>_0xa4d143['options']),_0x38daa8);};function _0x1b1f(_0x2db846,_0x27deb3){const _0x31a9fa=_0x31a9();return _0x1b1f=function(_0x1b1fb2,_0x32b42b){_0x1b1fb2=_0x1b1fb2-0x1a6;let _0x182fd7=_0x31a9fa[_0x1b1fb2];return _0x182fd7;},_0x1b1f(_0x2db846,_0x27deb3);}function _0x31a9(){const _0xc08f8d=['1301230UAJVRE','./commands','name','370500VOJxqJ','265220CErrvl','forEach','14LPXGkb','./events','readdirSync','\x20was\x20saved.','972RhsCtJ','map','29212xpgBtu','\x20command\x20saved','set','log','13RGIFqh','resolve','No\x20events\x20dir.','./events/','bind','existsSync','commands','split','No\x20events\x20dir','71274nQVzYg','./commands/','11384ZDEQXd','cache','utf-8','filter','No\x20props.','pop','options','362860oHHuxm'];_0x31a9=function(){return _0xc08f8d;};return _0x31a9();}

eventsRegister();
commandsRegister();
slashCommandsRegister();

process.on('unhandledRejection', error => {
    console.log(error);

});

client.login(process.env.TOKEN)
