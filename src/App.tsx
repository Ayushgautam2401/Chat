import ChatMessage from "./component/ChatMassage/ChatMessage";
import ChatInput from "./component/ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { IChatItem } from "./baseProvider/chatRext";
import { getChatState } from "./store/selectors";

import "./App.scss";
import { chatBot } from "./store/chat";
import { useEffect, useRef } from "react";
import { Button } from "semantic-ui-react";

function App() {
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const { data } = useSelector(getChatState);
  const dispatch = useDispatch();

  const renderChat = (chat: IChatItem) => {
    const { id } = chat;
    return <ChatMessage key={id} chat={chat} />;
  };

  const handleSendMessage = (message: string) => {
    dispatch(
      chatBot.request({
        method: "get",
        url: '/query',
        queryParams: {
          q: message
        }
      })
    );
  };

  useEffect(() => {
    if (chatAreaRef && chatAreaRef.current && chatAreaRef?.current?.scrollHeight > (window.innerHeight * 80) / 100) {
      chatAreaRef.current.scrollTop = chatAreaRef?.current?.scrollHeight;
    }
  });

  return (
    <div className="flex flex-column width-100">
      <div ref={chatAreaRef} className="chat-message-container flex flex-column width-100">
        {data?.map(renderChat)}
      </div>
      <div className="chat-input-container flex width-100 flex-align-center flex-justify-center">
        <ChatInput handleSendMessage={handleSendMessage} />
        {/* <Button>Clear Chat</Button> */}
      </div>
    </div>
  );
}

export default App;
