/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu Options
  answer: 
  keyboard: 
  aliases: 💰 balance
CMD*/

Bot.sendMessage(
  "*✏️ User : *" +
     Libs.commonLib.getLinkFor(user)+
    "*\n\n💰 Balance : " +
    balance.value() +
    " " +
    currency +
    "\n\n⚜️Refer And Earn More*"
)
