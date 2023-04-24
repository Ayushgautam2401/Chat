import { createChatRext, IChatRext } from "../../baseProvider/chatRext";

export const chatBot: IChatRext = createChatRext({
  identity: "chatBot",
  getBaseUrl: () => { return "http://localhost:5000"},
  getXAPIToken: () => { return ""},
  getToken: () => { return ""}
})
