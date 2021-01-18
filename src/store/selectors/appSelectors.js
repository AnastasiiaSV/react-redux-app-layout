import { createSelector } from 'reselect'
import _ from 'lodash'

const getState = state => _.get(state, 'app', {})

export default {
    getTestValue: createSelector(
        getState,
        state => _.get(state, 'test', []),
    ),

    getErrors: createSelector(
        getState,
        state => _.get(state, 'error', []),
    ),
}
