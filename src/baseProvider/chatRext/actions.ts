import { IChatRextParams, ActionIdentity, IChatRextAction, IChatRextMeta } from './interface';
import { defineRequestType } from "../common";

export function createIdentityAction(identity: string): ActionIdentity {
  return {
    CHAT_REXT_REQUEST: defineRequestType(`@${identity}CUSTOM_CHAT_REXT_REQUEST`)
  };
}

export const rextActionFunctions = {
  request: (meta: IChatRextMeta, params: IChatRextParams): IChatRextAction => {
    const { actions } = meta;
    return {
      type: actions.REQUEST,
      meta,
      payload: {
        params
      },
    };
  },
  success: (meta: IChatRextMeta, params: IChatRextParams, items: any): IChatRextAction => {
    const { actions } = meta;
    return {
      type: actions.SUCCESS,
      meta,
      payload: {
        params,
        response: items
      },
    };
  },
  failure: (meta: IChatRextMeta, params: IChatRextParams, error: string): IChatRextAction => {
    const { actions } = meta;
    return {
      type: actions.FAILURE,
      meta,
      payload: {
        params,
        error
      },
    };
  },
};
