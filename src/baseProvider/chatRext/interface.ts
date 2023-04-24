import { Reducer, Action } from 'redux';
import { RequestType } from "../common";

export interface ActionIdentity {
  CHAT_REXT_REQUEST: RequestType;
}

export type IChatRextActionDefinition = (params: IChatRextParams) => IChatRextAction;

export interface IChatRextActionCreators {
  request: IChatRextActionDefinition;
}

export interface IChatRextMeta {
  keys: IChatRextKeys;
  actions: RequestType;
}

export interface IChatRextKeys {
  identity: string;
  getBaseUrl: (state: any) => string;
  getToken: (state: any) => string;
  getXAPIToken: (state: any) => string;
}


export interface IChatRextParams {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  queryParams?: { [key: string]: string | number | boolean };
  urlParams?: { [key: string]: string | number };
  body?: {
    prompt: string
  };
  headers?: Headers;
}

export interface IChatRextAction extends Action {
  meta: IChatRextMeta;
  payload: {
    params?: IChatRextParams;
    response?: any;
    error?: string;
  };
}
/**
 * Reducers
 */
export interface IChatRextInfo {
  params?: IChatRextParams;
  fetching?: boolean;
  hasError?: boolean;
  message?: string;
}

export enum MessageType {
  USER = "USER",
  CHAT_BOT = "CHAT_BOT"
}

export interface IChatItem {
    id: string;
    message: string;
    type: MessageType;
    time: number;
}
export interface IChatRextItems {
  items: IChatItem[]
}

export interface IChatRextReducer {
  info: IChatRextInfo;
  items: IChatRextItems;
}

export interface IChatRext extends IChatRextActionCreators {
  reducers: Reducer<IChatRextReducer, IChatRextAction>;
  saga: any;
}
/**
 * Selector
 */
export interface IChatRextState {
  params: IChatRextParams;
  fetching?: boolean;
  data: IChatItem[];
  error: boolean;
  message: string;
}
