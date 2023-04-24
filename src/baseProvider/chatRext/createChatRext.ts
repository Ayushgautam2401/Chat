import { combineReducers, Reducer } from 'redux';
import { infoReducer, itemsReducer } from './reducer';
import { rextActionFunctions, createIdentityAction } from './actions';
import {
  IChatRextKeys,
  IChatRextActionCreators,
  IChatRextParams,
  IChatRextAction,
  IChatRextInfo,
  IChatRext,
  ActionIdentity,
  IChatRextItems
} from './interface';
import { defaultChatRextInfo, defaultChatRextItems } from './defautState';
import createSagaEvent from './saga';

export const getRextActionCreators = (keys: IChatRextKeys, actionidentity: ActionIdentity): IChatRextActionCreators => {
  return {
    request: (params: IChatRextParams) =>
      rextActionFunctions.request(
        { actions: actionidentity.CHAT_REXT_REQUEST, keys}, params
      )
  };
};
export const rext = (
  items: Reducer<IChatRextItems, IChatRextAction>,
  info: Reducer<IChatRextInfo, IChatRextAction>,
  requestRextActionCreators: IChatRextActionCreators,
  saga: any,
): IChatRext => ({
  reducers: combineReducers({
    info,
    items
  }),
  ...requestRextActionCreators,
  saga,
});
export const createChatRext = (keys: IChatRextKeys): IChatRext => {
  const { identity } = keys;
  const actionidentity = createIdentityAction(identity);
  const info = infoReducer(actionidentity, defaultChatRextInfo);
  const items = itemsReducer(actionidentity, defaultChatRextItems);
  const rextActionCreators = getRextActionCreators(keys, actionidentity);
  const sagaEvent = createSagaEvent(actionidentity);
  return rext(items, info, rextActionCreators, sagaEvent);
};
