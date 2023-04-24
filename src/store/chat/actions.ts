import { chatBot } from "./chat";

export function requestMessageToChatBot(prompt: string) {
  return chatBot.request({
    method: "post",
    url: "/openai/chat",
    body: {
      prompt
    }
  });
}