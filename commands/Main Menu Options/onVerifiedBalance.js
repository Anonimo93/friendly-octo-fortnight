/*CMD
  command: onVerifiedBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Main Menu Options
  answer: 
  keyboard: 
  aliases: 
CMD*/

var min = Bot.getProperty("min")
var channel = "@YourChannelUsername"
var user_link = Libs.commonLib.getLinkFor(user)
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
userPayment.add(+message)
if (isNaN(message)) {
} else {
}
if (message < min) {
  Bot.sendMessage("_❌ Minimum Withdraw " + min + " " + currency + "_")
  return
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "_❌ Maximum Withdraw " +
        balance.value().toFixed(6) +
        " " +
        currency +
        "_"
    )
    return
  } else
    Bot.sendMessage(
      "*✅ Withdrawal Sent Successfully\nIt takes some transaction fee\n\n💳 Transaction Details = \n 💰Amount = " +
        message +
        " " +
        currency +
        "\n💼 Wallet = " +
        wallet +
        "\n\n⏰Wait 2 Mins We Will Check And Pay You🎧 \n\n✅ Important❗**\n_If You Do Fake Refer You Will Banned\n\n🌹 Payment Channel : " +
        chann +
        "*"
    )
  balance.add(-message)
  Api.sendMessage({
    chat_id: channel,
    text:
      "*🔋 New Withdraw Request 🏦\n\n▪️ Status = Pending\n▪️ User =* " +
      user_link +
      "*\n▪️ User ID = " +
      user.telegramid +
      "\n▪️ Amount = " +
      message +
      " " +
      currency +
      "\n▪️ User Referrals = " +
      refList.length +
      "\n\n💳 Wallet =\n " +
      wallet +
      "\n\n👮🏻‍♂ Bot = @" +
      bot.name +
      "*",
    parse_mode: "Markdown"
  })
}

