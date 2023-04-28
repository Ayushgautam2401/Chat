import { createChatRext, IChatRext } from "../../baseProvider/chatRext";

export const chatBot: IChatRext = createChatRext({
  identity: "chatBot",
  getBaseUrl: () => { return "http://3.8.72.214:5000"},
  getXAPIToken: () => { return ""},
  getToken: () => { return ""}
})
