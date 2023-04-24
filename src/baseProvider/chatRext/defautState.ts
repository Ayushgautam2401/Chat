import { IChatRextAction, IChatRextInfo, IChatRextItems } from './interface';

export const defaultChatRextInfo: IChatRextInfo = {
  hasError: false,
  message: undefined,
  params: undefined,
  fetching: false
};

export const defaultChatRextItems: IChatRextItems = {
  items: []
};

export const defaultChatRextAction: IChatRextAction = {
  meta: {
    actions: {} as any,
    keys: {} as any
  },
  payload: {},
  type: ""
}