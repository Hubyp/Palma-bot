const { Client, GatewayIntentBits, Partials, Collection, ActivityType, EmbedBuilder } = require('discord.js');
const fs = require("fs");
const discord = require("discord.js");
const path = require('node:path');
const ms = require("ms");

const client = new Client({
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
  },
   partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
          Partials.Channel, 
          Partials.Message, 
          Partials.User, 
          Partials.GuildMember, 
          Partials.Reaction
  ]
});
module.exports = client;
      
//anti ping Coding Crypting [By: Hubyp] don't steal
const _0x51d13b=_0x2519;(function(_0x5de61e,_0x5a08ee){const _0x581160=_0x2519,_0x510b45=_0x5de61e();while(!![]){try{const _0x550ea6=parseInt(_0x581160(0x11e))/0x1*(parseInt(_0x581160(0x11d))/0x2)+parseInt(_0x581160(0x120))/0x3*(-parseInt(_0x581160(0x12a))/0x4)+-parseInt(_0x581160(0x127))/0x5*(parseInt(_0x581160(0x118))/0x6)+parseInt(_0x581160(0x111))/0x7*(parseInt(_0x581160(0x11f))/0x8)+-parseInt(_0x581160(0x116))/0x9*(parseInt(_0x581160(0x121))/0xa)+parseInt(_0x581160(0x12c))/0xb*(-parseInt(_0x581160(0x114))/0xc)+parseInt(_0x581160(0x12e))/0xd*(parseInt(_0x581160(0x126))/0xe);if(_0x550ea6===_0x5a08ee)break;else _0x510b45['push'](_0x510b45['shift']());}catch(_0x5f57ae){_0x510b45['push'](_0x510b45['shift']());}}}(_0x47fd,0x2fe5f));const ownerId=['948916911293497344',_0x51d13b(0x112),'749277897214263368','781051635928531015'];function _0x2519(_0x3e2a10,_0x2b3c63){const _0x47fd60=_0x47fd();return _0x2519=function(_0x251953,_0x3c3354){_0x251953=_0x251953-0x10e;let _0x23fb54=_0x47fd60[_0x251953];return _0x23fb54;},_0x2519(_0x3e2a10,_0x2b3c63);}client['on'](_0x51d13b(0x122),async _0x40aa59=>{const _0x7677f2=_0x51d13b;if(_0x40aa59['author']['bot'])return![];if(_0x40aa59[_0x7677f2(0x125)][_0x7677f2(0x110)][_0x7677f2(0x128)][_0x7677f2(0x123)](_0x32256d=>_0x32256d[_0x7677f2(0x113)]===_0x7677f2(0x12f))){if(ownerId[_0x7677f2(0x119)](_0x931559=>_0x40aa59[_0x7677f2(0x11a)][_0x7677f2(0x11c)](_0x931559))){_0x40aa59[_0x7677f2(0x129)](),_0x40aa59[_0x7677f2(0x125)][_0x7677f2(0x11b)](0x18*0x32*0x32*0x7d0);const _0x4d835d=new EmbedBuilder()['setDescription'](_0x7677f2(0x10f))[_0x7677f2(0x12d)]({'name':_0x7677f2(0x10e),'value':_0x40aa59[_0x7677f2(0x117)]+_0x7677f2(0x124)+_0x40aa59[_0x7677f2(0x117)]['tag']+'`\x20|\x20`'+_0x40aa59[_0x7677f2(0x117)]['id']+'`'},{'name':_0x7677f2(0x115),'value':_0x40aa59[_0x7677f2(0x117)]+_0x7677f2(0x12b),'inline':!![]})['setColor'](0x99ff);_0x40aa59['channel']['send']({'embeds':[_0x4d835d]});}}});function _0x47fd(){const _0x301159=['Anti\x20ping\x20**Owner/Developer...**','roles','14UhAATP','982521325308481628','name','6408gQgoBN','Do\x20not\x20Ping\x20Owner/Developer!','3231HtqhIk','author','225426nFJNKB','some','mentions','timeout','has','178jPMyyK','263JJtiUt','281696ijPPWT','178572HTLftc','2890BWxrZz','messageCreate','find','\x20|\x20`','member','1764574NgKVhB','10LThKLF','cache','delete','4jAvqon',',\x20Please\x20don\x27t\x20ever\x20ping\x20Owner/Developer\x0a\x20**You\x20get\x20mute\x201d!**','5962uRyDjS','addFields','65OkTacc','Members','Pinged\x20By'];_0x47fd=function(){return _0x301159;};return _0x47fd();}

//events
const _0x19b876=_0x4827;function _0x12f5(){const _0x1edc71=['endsWith','readdir','./events/','3619126NNVCNh','12152448fVJhJz','bind','log','42440784qprKgB','./events','forEach','10507884iRDbgS','1154450onOCeN','resolve','752550dOstLA','👌\x20Loadded\x20Event:\x20','44524PkRWTU','324wdgmat','cache'];_0x12f5=function(){return _0x1edc71;};return _0x12f5();}function _0x4827(_0x4e1ce9,_0x383702){const _0x12f514=_0x12f5();return _0x4827=function(_0x48278e,_0x4ed90e){_0x48278e=_0x48278e-0x1a5;let _0x5d11c7=_0x12f514[_0x48278e];return _0x5d11c7;},_0x4827(_0x4e1ce9,_0x383702);}(function(_0x1f0c8b,_0x553db1){const _0x57628=_0x4827,_0x5f0a8e=_0x1f0c8b();while(!![]){try{const _0x960e24=-parseInt(_0x57628(0x1b6))/0x1+-parseInt(_0x57628(0x1ae))/0x2+parseInt(_0x57628(0x1a9))/0x3*(-parseInt(_0x57628(0x1a8))/0x4)+-parseInt(_0x57628(0x1a6))/0x5+-parseInt(_0x57628(0x1b5))/0x6+parseInt(_0x57628(0x1af))/0x7+parseInt(_0x57628(0x1b2))/0x8;if(_0x960e24===_0x553db1)break;else _0x5f0a8e['push'](_0x5f0a8e['shift']());}catch(_0x44b9c3){_0x5f0a8e['push'](_0x5f0a8e['shift']());}}}(_0x12f5,0xed979),fs[_0x19b876(0x1ac)](_0x19b876(0x1b3),(_0x35ff91,_0x3314f5)=>{const _0x110f88=_0x19b876;_0x3314f5[_0x110f88(0x1b4)](_0x18da85=>{const _0x3fbfbc=_0x110f88;if(!_0x18da85[_0x3fbfbc(0x1ab)]('.js'))return;const _0x569bd5=require('./events/'+_0x18da85);let _0x4e22fe=_0x18da85['split']('.')[0x0];console[_0x3fbfbc(0x1b1)](_0x3fbfbc(0x1a7)+_0x4e22fe),client['on'](_0x4e22fe,_0x569bd5[_0x3fbfbc(0x1b0)](null,client)),delete require[_0x3fbfbc(0x1aa)][require[_0x3fbfbc(0x1a5)](_0x3fbfbc(0x1ad)+_0x18da85)];});}));

client.on("messageCreate", (message) => {
        if (message.content.startsWith("Download")) {
         const exampleEmbed = new EmbedBuilder()
    .setDescription(`**Download Info...**`)
    .addFields(
      { name: 'Hi ', value: `${message.author} | \`${message.author.tag}\` | \`${message.author.id}\`` },
      { name: '**The executor has just started the work, we hope it will be on ??/05/2023! The website will be launched soon!**', value: `So Wait xD`, inline: true },
    )
    .setColor(0x0099FF)
                 message.channel.send({ embeds: [exampleEmbed] });
                //message.channel.send(`**Please don't ping Owner/Developer!**`)
         }
  /*if (message.content.startsWith("Download")) {
    message.reply(`Hello <@${message.author.id}>! The executor has just started the work, we hope it will be on ??/05/2023! **The website will be launched soon!**`)
  } else {
          
  }*/

// get role by name

//if (message.member.roles.cache.find(role => role.name === 'Developer')) { }

/*Auto kill*/
(function(_0x408573,_0x2e64be){const _0xec08fe=_0x49b8,_0x2a48ae=_0x408573();while(!![]){try{const _0x4ddbc6=parseInt(_0xec08fe(0xdd))/0x1+parseInt(_0xec08fe(0xda))/0x2+parseInt(_0xec08fe(0xe0))/0x3+parseInt(_0xec08fe(0xdf))/0x4+parseInt(_0xec08fe(0xe1))/0x5+parseInt(_0xec08fe(0xe4))/0x6+parseInt(_0xec08fe(0xe5))/0x7*(-parseInt(_0xec08fe(0xe3))/0x8);if(_0x4ddbc6===_0x2e64be)break;else _0x2a48ae['push'](_0x2a48ae['shift']());}catch(_0x14daaa){_0x2a48ae['push'](_0x2a48ae['shift']());}}}(_0x1bf6,0x97303));function _0x49b8(_0x1721e3,_0x50f2c5){const _0x1bf68b=_0x1bf6();return _0x49b8=function(_0x49b81e,_0x2f2c58){_0x49b81e=_0x49b81e-0xda;let _0x1f95e1=_0x1bf68b[_0x49b81e];return _0x1f95e1;},_0x49b8(_0x1721e3,_0x50f2c5);}function _0x1bf6(){const _0x4096ca=['519464BEVooY','The\x20Client\x20Has\x20Logged\x20In\x20Successfully','4091116fgSiLV','2950398MzYJTf','2587660oNyFeh','brightRed','4376tYTmYP','7225422WElDSD','48293NbmaZY','291084qSQOrQ','kill','log'];_0x1bf6=function(){return _0x4096ca;};return _0x1bf6();}const colors=require('colors');setInterval(()=>{const _0x1e0146=_0x49b8;!client||!client['user']?(console[_0x1e0146(0xdc)]('The\x20Client\x20Didn\x27t\x20Login\x20Proccesing\x20Kill\x201'[_0x1e0146(0xe2)]),process[_0x1e0146(0xdb)](0x1)):console[_0x1e0146(0xdc)](_0x1e0146(0xde)['brightGreen']);},0x7530);

//Server 
const _0x4b700b=_0x3d79;function _0x3d79(_0x1f5da9,_0x217b39){const _0x4222ba=_0x4222();return _0x3d79=function(_0x3d794c,_0x3d26ce){_0x3d794c=_0x3d794c-0x14b;let _0x556839=_0x4222ba[_0x3d794c];return _0x556839;},_0x3d79(_0x1f5da9,_0x217b39);}(function(_0x5d2209,_0x5a2f33){const _0x3402f7=_0x3d79,_0x37afd4=_0x5d2209();while(!![]){try{const _0x1f2776=-parseInt(_0x3402f7(0x155))/0x1+-parseInt(_0x3402f7(0x14b))/0x2*(parseInt(_0x3402f7(0x15b))/0x3)+-parseInt(_0x3402f7(0x14c))/0x4+-parseInt(_0x3402f7(0x14e))/0x5*(parseInt(_0x3402f7(0x152))/0x6)+-parseInt(_0x3402f7(0x15e))/0x7+-parseInt(_0x3402f7(0x153))/0x8*(-parseInt(_0x3402f7(0x150))/0x9)+parseInt(_0x3402f7(0x15c))/0xa*(parseInt(_0x3402f7(0x14d))/0xb);if(_0x1f2776===_0x5a2f33)break;else _0x37afd4['push'](_0x37afd4['shift']());}catch(_0x5109c0){_0x37afd4['push'](_0x37afd4['shift']());}}}(_0x4222,0xc3561));function _0x4222(){const _0x52f3d1=['788745RjdYhF','env','20835OCnNnS','end','6MfqDtP','2696TSvSPg','http','291492RvAwDk','Content-Type','PORT','log','Listening\x20on\x20port','createServer','39WOVNfg','10GkrZNf','listen','9185330OLeqvv','36942RqMBuy','3331196dOQBCb','31397245AMXtaV'];_0x4222=function(){return _0x52f3d1;};return _0x4222();}const http=require(_0x4b700b(0x154)),port=process[_0x4b700b(0x14f)][_0x4b700b(0x157)]||0x1f40,server=http[_0x4b700b(0x15a)](function(_0x19b889,_0x45f033){const _0xf7ef65=_0x4b700b;_0x45f033['setHeader'](_0xf7ef65(0x156),'text/plain'),_0x45f033[_0xf7ef65(0x151)]('Coding\x20Made\x20By:\x20Hubyp');});server[_0x4b700b(0x15d)](port,function(){const _0x4ee66e=_0x4b700b;console[_0x4ee66e(0x158)](_0x4ee66e(0x159),port);});

//get token
client.login(process.env.TOKEN)
