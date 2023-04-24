import { getChatRextState, IChatRextState } from "../../baseProvider/chatRext";
import { ApplicationState } from "../../store/reducers";

export function getChatState(state: ApplicationState): IChatRextState {
  console.log(state);
  return getChatRextState(state.chatState)
}
