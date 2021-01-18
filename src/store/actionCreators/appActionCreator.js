import appActions from '../actions/appActions'

export default {
    init: () => ({
        type: appActions.INIT,
        payload: null,
    }),

    initSuccess: () => ({
        type: appActions.INIT_SUCCESS,
        payload: null,
    }),

    initFailure: error => ({
        type: appActions.INIT_FAILURE,
        payload: error,
    }),

    setTest: data => ({
        type: appActions.SET_TEST_VAL,
        payload: data,
    }),
}
