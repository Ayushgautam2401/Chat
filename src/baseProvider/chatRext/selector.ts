import { IChatRextReducer, IChatRextState, IChatRextInfo } from './interface';
export function getChatRextState(rext: IChatRextReducer): IChatRextState {
  console.log(rext);
  const info: IChatRextInfo = rext.info;
  const item: any = rext.items.items;
  return {
    fetching: info.fetching,
    error: info.hasError || false,
    message: info.message!,
    data: item || [],
    params: rext.info.params!,
  };
}
