import appActions from '../actions/appActions'

const initialState = {
    test: 'test111',
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case appActions.INIT_SUCCESS: {
            return {
                ...state,
                isInitDone: true,
            }
        }

        case appActions.INIT_FAILURE: {
            return {
                ...state,
                isInitDone: false,
                error: action.payload,
            }
        }




        case appActions.SET_TEST_VAL: {
            return {
                ...state,
                test: 'test222',
            }
        }


        default:
            return state
    }
}
