import { SagaIterator } from 'redux-saga';
import { put, call, select, takeEvery } from 'redux-saga/effects';
import { rextActionFunctions } from './actions';
import { fetchRequest, getFullUrl } from '../../Api';
import { IChatRextAction, ActionIdentity } from './interface';

function* performRequestRextOperation(action: IChatRextAction): IterableIterator<{}> {

  const { meta, payload } = action;
  const { url, method, queryParams, urlParams } = payload.params!;
  const {
    keys: { getBaseUrl, getToken, getXAPIToken },
  } = meta;
  try {
    const token: string = (yield select(getToken))!;
    const apiKey: string =(yield select(getXAPIToken))!;

    const requesturl: string = getFullUrl((yield select(getBaseUrl))!, url, {queryParams, urlParams} );
    const response: any = yield call(
      fetchRequest,
      requesturl,
      token,
      method,
      apiKey,
      payload?.params?.body,
      payload?.params?.headers,
    );
    yield put(
      rextActionFunctions.success(
        meta,
        payload.params!,
        response.data || response.record || response
      ),
    );
  } catch (error: any) {
    const message = error.message || error.errorText || error ;
    yield put(rextActionFunctions.failure(meta, payload.params!, message));
  }
}

export default function (actionidentity: ActionIdentity) {
  return function* watchRextEvent(): SagaIterator {
    yield takeEvery(actionidentity.CHAT_REXT_REQUEST.REQUEST, performRequestRextOperation);
  };
}
