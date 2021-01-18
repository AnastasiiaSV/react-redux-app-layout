import { put, takeEvery } from 'redux-saga/effects'

import type from '../actions/appActions'
import appActions from '../actionCreators/appActionCreator'

function* init() {
    try {

        console.log('MESSAGE FROM INIT SAGA')

       /* const { experiments: experiment } = yield api.get(experimentQuery.getAllWithParams, {
            limit: 5, orderBy: 'BY_ACCESS_DATE', cursor: '',
        })

        yield put(appActions.getSuccess())*/


        yield put(appActions.initSuccess())
    } catch (error) {
        yield put(appActions.initFailure(error.message))
    }
}

function* appSaga() {
    yield takeEvery(type.INIT, init)
}

export  {appSaga}