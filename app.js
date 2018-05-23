//https://discordapp.com/oauth2/authorize?client_id=385213920690044929&scope=bot&permissions=1074121792
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "'";
const fs = require("fs");

let info = JSON.parse(fs.readFileSync("./info.json"));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(prefix+"help | Used in "+(info.guildcount+client.guilds.size)+" guilds | "+info.packcount+" packs installed");
});

var emojiPacks = {
    'thonk':[
        {name:"thonk", link:"./emojis/thonk/thonk.png", emoji:"<:thonk:385414502872514581>"},
        {name:"thonkcool", link:"./emojis/thonk/thonkcool.png", emoji:"<:thonkcool:385414503946256384>"},
        {name:"thonkderp", link:"./emojis/thonk/thonkderp.png", emoji:"<:thonkderp:385414504516681730>"},
        {name:"thonkgrapes", link:"./emojis/thonk/thonkgrapes.png", emoji:"<:thonkgrapes:385414505498148866>"},
        {name:"hyperthonk", link:"./emojis/thonk/hyperthonk.png", emoji:"<:hyperthonk:385421805831061504>"},
        {name:"thonkery", link:"./emojis/thonk/thonkery.png", emoji:"<:thonkery:387961002030792724>"},
    ],
    'blob1':[
        {name:"blobclown", link:`./emojis/blob1/blobclown.png`, emoji:"<:blobclown:385411555262726147>"},
        {name:"blobconfused", link:`./emojis/blob1/blobconfused.png`, emoji:"<:blobconfused:385411556218896384>"},
        {name:"blobcool", link:`./emojis/blob1/blobcool.png`, emoji:"<:blobcool:385411556680269835>"},
        {name:"blobfrown", link:`./emojis/blob1/blobfrown.png`, emoji:"<:blobfrown:385411557464735745>"},
        {name:"blobgrin", link:`./emojis/blob1/blobgrin.png`, emoji:"<:blobgrin:385414013548363776>"},
        {name:"blobjoy", link:`./emojis/blob1/blobjoy.png`, emoji:"<:blobjoy:385411558391414784>"},
        {name:"blobmad", link:`./emojis/blob1/blobmad.png`, emoji:"<:blobmad:385411561520365568>"},
        {name:"blobmoney", link:`./emojis/blob1/blobmoney.png`, emoji:"<:blobmoney:385411560794882063>"},
        {name:"blobneutral", link:`./emojis/blob1/blobneutral.png`, emoji:"<:blobneutral:385411562199973888>"},
        {name:"blobrofl", link:`./emojis/blob1/blobrofl.png`, emoji:"<:blobrofl:385411559104577536>"},
        {name:"blobrollingeyes", link:`./emojis/blob1/blobrollingeyes.png`, emoji:"<:blobrollingeyes:385411565706280961>"},
        {name:"blobsmile", link:`./emojis/blob1/blobsmile.png`, emoji:"<:blobsmile:385411565186187264>"},
        {name:"blobsmirk", link:`./emojis/blob1/blobsmirk.png`, emoji:"<:blobsmirk:385411559935049729>"},
        {name:"blobthink", link:`./emojis/blob1/blobthink.png`, emoji:"<:blobthink:385411563709923328>"},
        {name:"blobtongue", link:`./emojis/blob1/blobtongue.png`, emoji:"<:blobtongue:385411562523066369>"},
        {name:"blobwink", link:`./emojis/blob1/blobwink.png`, emoji:"<:blobwink:385411564360040463>"},
        {name:"blobwow", link:`./emojis/blob1/blobwow.png`, emoji:"<:blobwow:385411566402666508>"},
    ],
    'blob2':[
        {name:"blobanger", link:"./emojis/blob2/blobanger.png", emoji:"<:blobanger:385415356937928706>"},
        {name:"blobastonished", link:"./emojis/blob2/blobastonished.png", emoji:"<:blobastonished:385415357726326785>"},
        {name:"blobbarf", link:"./emojis/blob2/blobbarf.png", emoji:"<:blobbarf:385415358586028044>"},
        {name:"blobconfounded", link:"./emojis/blob2/blobconfounded.png", emoji:"<:blobconfounded:385415361622835201>"},
        {name:"blobdrool", link:"./emojis/blob2/blobdrool.png", emoji:"<:blobdrool:385415359840387073>"},
        {name:"blobgrimace", link:"./emojis/blob2/blobgrimace.png", emoji:"<:blobgrimace:385415360632979457>"},
        {name:"blobheart", link:"./emojis/blob2/blobheart.png", emoji:"<:blobheart:385415362503639040>"},
        {name:"blobhug", link:"./emojis/blob2/blobhug.png", emoji:"<:blobhug:385415365833916416>"},
        {name:"blobhush", link:"./emojis/blob2/blobhush.png", emoji:"<:blobhush:385415364202332160>"},
        {name:"blobkiss", link:"./emojis/blob2/blobkiss.png", emoji:"<:blobkiss:385415363363602433>"},
        {name:"blobnerd", link:"./emojis/blob2/blobnerd.png", emoji:"<:blobnerd:385415364961370112>"},
        {name:"blobrelief", link:"./emojis/blob2/blobrelief.png", emoji:"<:blobrelief:385415367763427328>"},
        {name:"blobsleep", link:"./emojis/blob2/blobsleep.png", emoji:"<:blobsleep:385415368472264715>"},
        {name:"blobsneeze", link:"./emojis/blob2/blobsneeze.png", emoji:"<:blobsneeze:385415366542884867>"},
        {name:"blobupsidedown", link:"./emojis/blob2/blobupsidedown.png", emoji:"<:blobupsidedown:385415374298152960>"},
        {name:"blobworried", link:"./emojis/blob2/blobworried.png", emoji:"<:blobworried:385415375321432064>"},
        {name:"blobyay", link:"./emojis/blob2/blobyay.png", emoji:"<:blobyay:385415369415720962>"},
    ],
    'google':[
      {name:"googlegrin", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/grinning-face_1f600.png", emoji:""},
      {name:"googlesmile", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/grinning-face-with-smiling-eyes_1f601.png", emoji:""},
      {name:"googlejoy", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/face-with-tears-of-joy_1f602.png", emoji:""},
      {name:"googlerofl", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/rolling-on-the-floor-laughing_1f923.png", emoji:""},
      {name:"googlexd", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png", emoji:""},
      {name:"googlewink", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/winking-face_1f609.png", emoji:""},
      {name:"googlemoney", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/money-mouth-face_1f911.png", emoji:""},
      {name:"googlesleep", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/sleeping-face_1f634.png", emoji:""},
      {name:"googlethink", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/thinking-face_1f914.png", emoji:""},
      {name:"googleexpressionless", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/expressionless-face_1f611.png", emoji:""},
      {name:"googlezippermouth", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/zipper-mouth-face_1f910.png", emoji:""},
      {name:"googlerollingeyes", link:"https://emojipedia-us.s3.amazonaws.com/thumbs/72/google/119/face-with-rolling-eyes_1f644.png", emoji:""},
      /*
      {name:"google", link:"", emoji:""},
      {name:"google", link:"", emoji:""},
      {name:"google", link:"", emoji:""},
      {name:"google", link:"", emoji:""},
      {name:"google", link:"", emoji:""},*/
    ],
};

var leaveTimer;

var num = 0;

client.on('message', message => {
  let args = message.content.split(" ").splice(1);
  if (message.content.startsWith("Adding emoji pack...")&&message.author === client.user) {
    setTimeout(function() {
              message.edit(":tada: I have successfully added "+num+" emojis from the "+args[0]+" pack. :tada:");
            }, 3000);
  }
  var s = message.content.toLowerCase();
  if (s.startsWith(prefix+`addpack`)) {
      if (message.member.hasPermission("MANAGE_EMOJIS")) {
        if (emojiPacks[args[0]]) {
            var f = emojiPacks[args[0]];
            for(var n = 0; n < f.length; n++) {
                message.guild.createEmoji(f[n].link, f[n].name)
                .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
                .catch(console.error);
            }
            message.channel.send("Adding emoji pack...");
            num = f.length;
            clearTimeout(leaveTimer);
            if (!info.packcount) {
              info.packcount = 0;
            }
            info.packcount++;
            client.user.setGame(prefix+"help | Used in "+(info.guildcount+client.guilds.size)+" guilds | "+info.packcount+" packs installed");
            leaveTimer = setTimeout(function() {
              message.channel.send("<@"+message.guild.ownerID+">**, are you done with me?**\nIf you are done adding emoji packs, you can use the command `'leave` and I will leave your server.");
            }, 300000);
        }else{
            message.reply("That doesn't seem to be one of my emoji packs.");
        }
      }else{
          message.reply("It looks like you'll need the `Manage Emojis` permission in order to use this command.");
      }
  }
  if (s.startsWith(prefix+`listall`)) {
      var fie = [];
      for(var i in emojiPacks) {
        let r = "";
          for(var j = 0; j < emojiPacks[i].length; j++) {
            r += emojiPacks[i][j].emoji;
          }
          fie.push({name:i.toUpperCase(), value:r});
      }
      message.channel.send({embed:{
          title:"All Emoji Packs",
          fields:fie,
      }});
  }
  if (s.startsWith(prefix+`help`)) {
      message.channel.send({embed:{
          title:"Emoji Packs",
          description:"This bot can help you with your custom emojis for this server!",
          fields:[
              {
                name:"Commands",
                value:"`'help` - Shows all commands\n`'listall` - Lists all emoji packs\n`'addpack [pack]` - Adds emojis to server\n`'leave` - Makes the bot leave",
              },
              {
                name:"Invite Link",
                value:"[Invite me to your server](https://discordapp.com/oauth2/authorize?client_id=385213920690044929&scope=bot&permissions=1074121792)",
              }
          ],
      }});
  }
  if (s.startsWith(prefix+`leave`)) {
    message.channel.send("<:blobwave:385423961867157504> Goodbye!");
    message.guild.leave();
  }
  fs.writeFile("./info.json", JSON.stringify(info), (err) => {
        if (err) console.error(err);
  });
});
client.on('guildDelete', (guild) => {
  if (!info.guildcount) {
    info.guildcount = 0;
  }
  info.guildcount ++;
  client.user.setGame(prefix+"help | Used in "+(info.guildcount+client.guilds.size)+" guilds | "+info.packcount+" packs installed");
});

client.login(process.env.BOT_TOKEN);
