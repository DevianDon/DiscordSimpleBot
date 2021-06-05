 if(message.content.startsWith("~purge")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(':white_check_mark: Succesfully cleared ${clear} messages')
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}
 if(message.content.startsWith("~mute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to mute!")
 else {
 member.roles.add("843059102573789184")
 message.channel.send("Member has been succesfully muted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
if(message.content.startsWith("~warn")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("mention someone to warn.")
 else {
 let embed = new Discord.MessageEmbed()
 .setTitle("Warnings")
 .setDescription(`${victim} got warned by ${message.author}!`)
 .addField('Expires after:', '1 day')
 .setColor("RANDOM")
 .setFooter(`Moderater : ${message.author.username}`)
 .setTimestamp()
 
 message.channel.send(embed)
 }
}
if (message.content.startsWith("~kick")) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Successfully kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
 if(message.content.startsWith("~unmute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to unmute!")
 else {
 member.roles.remove("843059102573789184")
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
if(message.content === "~server") {
 let embed = new Discord.MessageEmbed()
 .setTitle("Your server name here")
 .setDescription("**Members** \n member count here")
 .addField('Bots', 'Bot count here') 
 .addField('Boosts', 'Your boost count here')
 .addField('Goal', 'Your server goal here')
 .setColor("PURPLE")
  .setFooter("for more information, contact DevianDon#4640");
 message.channel.send(embed)
}
if (message.content.startsWith('~ban')) {//your bot needs to have ban member permission for this to work
if(message.member.hasPermission("BAN_MEMBERS")) {
 const user = message.mentions.users.first();
 
 if (user) {
 
 const member = message.guild.member(user);

 if (member) {

 member
 .ban({
 reason: 'They were bad!',
 })
 .then(() => {
 // We let the message author know we were able to ban the person
 message.reply(`Successfully banned ${user.tag}`);
 })
 .catch(err => {

 message.reply("I was unable to ban the member");
 
 console.error(err);
 });
 } else {
 
 message.reply("That user isn't in this guild!");
 }
 } else {
 
 message.reply("You didn't mention the user to ban!");
 }
 }
}
if (message.content.startsWith("~say")) {//your bot should have "DELETE_MESSAGE" permissions in order for the bot to delete the original message "~say whatever you want lol"
 
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("WHAT DO YOU WANT ME TO SAY?")
 message.delete();

 if (sentence.startsWith("~")) {
 message.reply("Are you trying to execute a command through me? Manipulating an innocent bot?? :'( . Welp you can't")
 console.log(message.author.username + " said :- " + sentence)
 return;
 }

 if (sentence.includes("@")) {
 message.reply("you aint pinging anyone")
 console.log(message.author.username + " said :- " + sentence)
 return;
 }

 if (sentence.includes("@everyone") || sentence.includes("@here")) {
 console.log(message.author.username + " said :- " + sentence)
 message.reply("don't even think bout it")
 return;
 }

 if (sentence != "~say" || "@everyone") {
 message.channel.send(sentence);
 }
 console.log(message.author.username + " said :- " + sentence)
 } else {
 
 
}
