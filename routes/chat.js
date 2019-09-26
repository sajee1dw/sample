const express = require("express")
const Chat = express.Router()
const cors = require("cors")
const con_chat = require("../controllers/chat")

Chat.post('/Chat/loadChatList',con_chat.loadChatList);
Chat.post('/Chat/loadMsgHis',con_chat.loadMsgHis)


Chat.use(cors())
module.exports = Chat