import { combineReducers } from 'redux';
import { IChatRextReducer } from '../../baseProvider/chatRext';
import { chatBot } from '../../store/chat/chat';


export interface ApplicationState {
  chatState: IChatRextReducer;
}

const rootReducer = () => combineReducers<ApplicationState>({
  chatState: chatBot.reducers
  
});

export default rootReducer;