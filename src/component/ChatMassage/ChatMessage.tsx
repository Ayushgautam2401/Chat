import { IChatItem, MessageType } from "../../baseProvider/chatRext";
import classNames from "classnames";
import moment from "moment";
import "./ChatMessage.scss";
interface ChatProps {
  chat: IChatItem;
}

function ChatMessage(props: ChatProps) {
  const {
    chat: { message, time, type },
  } = props;
  const isBotMessage = type === MessageType.CHAT_BOT;

  return (
    <div className={classNames(["width-100 flex flex-row padding-4 position-relative", { "flex-justify-start": isBotMessage, "flex-justify-end": !isBotMessage }])}>
      <div className={classNames(["flex flex-column flex-justify-center chat-item margin-l-9 position-relative", { light: isBotMessage, dark: !isBotMessage }])}>
        <span className={"padding-4"}>
          {message}
          <span className={classNames(["message-time position-absolute text-sm "], { "margin-r-2": isBotMessage })}>{moment(time).format("hh:mm")}</span>
        </span>
      </div>
      <div className="flex flex-column flex-justify-end padding-l-2">
        {/* {isBotMessage && <img src="logo192.png"className={classNames(["border-radius-50"])}/> } */}
        <img src="https://www.w3schools.com/howto/img_avatar.png" width="25px" height="25px" className={classNames(["border-radius-50", { "bot-image position-absolute": isBotMessage }])} alt=" " />
      </div>
    </div>
  );
}

export default ChatMessage;
