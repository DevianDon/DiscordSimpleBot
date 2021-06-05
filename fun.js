let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Catgirl simulator" } });
});

client.login("Your bot's token here")

const prefix = "~"//in this case "~" would be my prefix but remember, it is always customizable
client.on("message", message => {

  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if(command === "~gay") 
{
  let replies = ["You are 69% gay :rainbow_flag:", "You are 1% gay :rainbow_flag:", "You are is 42.0% gay :rainbow_flag:", "You are 78% gay :rainbow_flag:", "NAH BRO YOURE 100% GAY YOU SLEPT WITH MY DAD:rainbow_flag:", "You are 1% gay :rainbow_flag:", "You are 21% gay :rainbow_flag:", "You are possibly gay. fuck the commies.", "You are 60% gay :rainbow_flag:", "You are half gay and half sex lover :rainbow_flag:", "You are 82% gay :rainbow_flag:", "You are 13% gay: rainbow_flag:", "You are 92% homophobic yet you suck dogs cock wtf :rainbow_flag:", "You are 21% gay :rainbow_flag:", "You are -100% gay. :rainbow_flag:", "Youre trans and you love girls now :rainbow_flag:", "Youre unidentified. Boy or girl we dont know.", "you claim youre not gay but someone deep throated you and you said you loved it so... :rainbow_flag:", "99.9% of you is gay and 0.1 is cum cause yeah everyone saw mate. :rainbow_flag:", "You asked your best friend if he could stick his cock up your ass so... :rainbow_flag:", "Your gayness level is over 9000 :rainbow_flag:", "You were 100% gay but now youre 99% cum :rainbow_flag:", "you are 61% gay :rainbow_flag:", "you are so gay that you broke the gay r8 machine :rainbow_flag", "you are 41% gay :rainbow_flag:", "you are 19% gay :rainbow_flag", "you are 4% gay :rainbow_flag"]
  message.channel.send(replies[Math.floor(Math.random() * replies.length)])
}
if(command === "~stepsis") 
{
  let replies = ["Damn bro, you fucked her deep that the cum came out of her mouth", "Your step sis said no to fucking but to you, she didn't have a choice and you enjoyed it", "Your setp sis pussy was to little for your ding dong so the muth was a good spot", "You wanted to try something new so you went with the ears, she's def now.", "No fucking today for you", "Your step sis turned out to be a boy but that didn't stop you :rainbow_flag:"]
  message.channel.send(replies[Math.floor(Math.random() * replies.length)])
}
if(message.content === "~8binfo") {
 let embed = new Discord.MessageEmbed()
 .setTitle("8ball Info")
 .setDescription("`~8ball` is to start 8ball.\nPlease dont message like this: `~8ball` or `~8ball yeeee` that will just frick things up bro\nUse a sentence that works with a question mark\nThats all. Now start using 8ball.")
 message.channel.send(embed) ///the usage of 8ball
 }
 if(message.content.startsWith("~8ball")) {
 let replies = ["Yes.", "No.", "Could happen.", "Maybe.", "Totally.", "Signs lead to no.", "Signs lead to yes.", "Yes. Wait no. Ummm...No.", "Reply hazy. Try again.", "Get a brain fool.", "no", "yes", "Sure.", "Why not?", "No way that is possible.", "Definitely not.", "Without a doubt.", "Hell no." ] ///if you want you can add more ways to reply
 let embed = new Discord.MessageEmbed()
 .setTitle("8ball says:")
 .setDescription(`8ball's Answer: ${replies[Math.floor(Math.random() * replies.length)]}`)
 .setColor("RED")
 .setFooter("8ball has given you an answer")
 message.channel.send(embed)
 }
if(message.content === "~help") {
 let embed = new Discord.MessageEmbed()
 .setTitle("Here are the list of commands in our epic server")
 .setDescription("**Fun** \n Gay, simprate, stepsis, 8ball. four very entertaining commands. Have fun!")
 .addField('Suggestion','This is for making suggestions about the bot, it could be a commands you\'d like changed or explained or a cool feature you\'d like to see, just make sure it is something that is reasonible and serious.\n **(We do not have time for jokes)** \n **This is NOT for YouTube or video suggestions.**')
 .setColor("RED")
  .setFooter("DM DevianDon#4640 for more information");
 message.channel.send(embed)
}
//━━━━━━━━━━━━━━━━━━━  NSFW SHIT ━━━━━━━━━━━━━━━━━━━
if(command === "~porn")  
{
  if(message.channel.nsfw === true)
  {
    message.channel.send("https://78.media.tumblr.com/3f64e05427b3f038cdaa72af446e9db0/tumblr_mtadyk3ClW1sidrbto1_400.gif")
  } 
  else if(message.channel.nsfw === false) 
  {
    message.channel.send("```Woah slow down. Only in NSFW please.```")
  }
}
if(command === 'ass')
{
  if(message.channel.nsfw === true)
  {
    message.channel.send("https://external-preview.redd.it/w-N7dhHXvnM9dI49MfQ6Fv-grDDda6EywAcyBUm_0tM.gif?s=2d63425aa116d9de02b0c67ec6cab23ea838b0d3")
  } 
  else if(message.channel.nsfw === false) 
  {
    message.channel.send("```Woah slow down. Only in NSFW please.```")//this is also customizable. feel free to add more images
  }
}
if(command === "boobs") 
{
  if(message.channel.nsfw === true)
  {
    message.channel.send("https://imgpile.com/images/1aQSS2.gif")
  } 
  else if(message.channel.nsfw === false) 
  {
    message.channel.send("```You wanna see some grannys titts? then GO TO THE FUCKING NSFW CHANNEL THANK YOU.```")//also customizable
  }
}
if(command === "hentaibomb") 
{
  if(message.channel.nsfw === true)
  {
    let replies = ["https://pbs.twimg.com/media/CH0Cy1GWwAAthFS.jpg https://ae01.alicdn.com/kf/HTB1BieGJ21TBuNjy0Fjq6yjyXXaF/anime-girl-hot-body-metroid-PDM118-custom-print-wall-art-fabric-poster-frame-available-for-room.jpg https://i.ytimg.com/vi/wsp8rJdg9S4/maxresdefault.jpg", "https://www.luscious.net/albums/hentai-pics_302545/read/?index=2&view=slideshow&sorting=rating_all_time&only_animated=false https://www.luscious.net/albums/hentai-pics_302545/read/?index=7&view=slideshow&sorting=rating_all_time&only_animated=false https://www.luscious.net/albums/hentai-pics_302545/read/?index=14&view=slideshow&sorting=rating_all_time&only_animated=false", "https://livewallpapers4free.com/wp-content/uploads/2020/11/thumb-60.jpg https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.ak.crunchyroll.com%2Fi%2Fspire4%2F02122008%2Fd%2F5%2Fa%2Ff%2Fd5af877e6035d0_full.jpg&f=1&nofb=1", "https://i1.wp.com/haruhichan.com/wpblog/wp-content/uploads/Megami-Magazine-August-anime-posters-overlord.jpg https://www.luscious.net/albums/hentai-pics_302545/read/?index=24&view=slideshow&sorting=rating_all_time&only_animated=false https://www.luscious.net/albums/hentai-pics_302545/read/?index=16&view=slideshow&sorting=rating_all_time&only_animated=false", "https://www.luscious.net/albums/hentai-pics_302545/read/?index=24&view=slideshow&sorting=rating_all_time&only_animated=false https://www.luscious.net/albums/hentai-pics_302545/read/?index=39&view=slideshow&sorting=rating_all_time&only_animated=false", "https://www.luscious.net/albums/hentai-pics_302545/read/?index=75&view=slideshow&sorting=rating_all_time&only_animated=false https://www.luscious.net/albums/hentai-pics_302545/read/?index=89&view=slideshow&sorting=rating_all_time&only_animated=false https://cdn.discordapp.com/attachments/831573482919821352/833108664621072474/image0.png", "https://konachan.com/image/0998215813e954662be36a8f7ce247af/Konachan.com%20-%20238793%20aliasing%20blush%20breasts%20brown_hair%20cum%20futanari%20green_eyes%20green_hair%20hakurei_reimu%20kochiya_sanae%20nipples%20nude%20pussy_juice%20red_eyes%20sex%20touhou%20yuri.png https://konachan.com/image/908c6c4ab97d3dc4b60a94c9fa26c3b6/Konachan.com%20-%20189073%20blonde_hair%20blush%20breasts%20cum%20green_eyes%20mizuhashi_parsee%20navel%20nipples%20nude%20pointed_ears%20shijimi-sama%20thighhighs%20touhou%20wet.png"]
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])//you can always add more of them
  } 
  else if(message.channel.nsfw === false) 
  {
    message.channel.send("```Woah slow down. Only in NSFW please.```")//in this case, the bot will send different images each time the command is executed
  }
}})
client.on("message", message => {
   if(message.content.startsWith("~simprate")){
const replies = ["you are 8% simp", "You are 1% simp", "you are 50% simp", "you are 100% simp", "you watch pokimane's streams so... big simp", "you are 8% simp", "you are a simp... for the opposite gender", "you are 30% simp", "you are 45% simp", "you are 66% simp", "you are 69% simp", "you are 71% simp", "you paid girl streamers your entire fortune just so they can say uwu", "you are 99% simp", "wow dude, you are not a simp, GG", "you are 0.001% simp", "you are 54% simp", "you are the biggest simp ever", "you aren't the simp, your fans are", "you are a **s i m p** = retarded hoe", "you are 39% simp", "you are 49% simp", "you spend your whole day simping and simping for pokimane", "you only simp for boys, is that a thing?", "you are 56% simp", "you are 61% simp"];//you can add more of them if you want
let embed = new Discord.MessageEmbed()
.setTitle("The simpr8 machine is analyzing")
.setColor("RED")
.setDescription(replies[Math.floor(Math.random() * replies.length)])
message.channel.send(embed)
}
})
