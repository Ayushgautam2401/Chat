import { defaultChatRextAction } from './defautState';
import { IChatRextAction, IChatRextInfo, ActionIdentity, IChatRextItems, IChatItem, MessageType } from './interface';

export const infoReducer =
  (identity: ActionIdentity, defaultRextInfo: IChatRextInfo) =>
    (info: IChatRextInfo = defaultRextInfo, action: IChatRextAction = defaultChatRextAction) => {
      const { type, payload } = action;
      switch (type) {
        case identity.CHAT_REXT_REQUEST.REQUEST:
          return {
            ...info,
            params: payload.params,
            fetching: true,
            hasError: false,
            message: undefined,
          };
        case identity.CHAT_REXT_REQUEST.SUCCESS:
          return {
            ...info,
            params: payload.params,
            fetching: false,
            hasError: false
          };
        case identity.CHAT_REXT_REQUEST.FAILURE:
          return {
            ...info,
            params: payload.params,
            fetching: false,
            hasError: true,
            message: payload.error,
          };
        default:
          return info;
      }
    };
export const itemsReducer =
  (identity: ActionIdentity, defaultChatRextItems: IChatRextItems) =>
    (items: IChatRextItems = defaultChatRextItems, action: IChatRextAction = defaultChatRextAction) => {
      const { type, payload } = action;
      const { params, response } = payload || {};
      switch (type) { 
        case identity.CHAT_REXT_REQUEST.REQUEST:
          items.items.push(transformMessageToItem({ message: params?.queryParams?.q! as string, time: new Date().getTime() }, true))
          return items;
        case identity.CHAT_REXT_REQUEST.SUCCESS:
          items.items.push(transformMessageToItem(response, false))
          return items;
        default:
          return items;
      }
    };

export function makeid(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function transformMessageToItem(data: { message: string, time: number }, isRequest: boolean): IChatItem {
  return {
    id: makeid(16),
    message: data.message,
    type: isRequest ? MessageType.USER : MessageType.CHAT_BOT,
    time: data.time
  }
}
