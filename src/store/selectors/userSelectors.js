import { createSelector } from 'reselect'
import _ from 'lodash'

const getState = state => _.get(state, 'app', {})

export default {
    getErrors: createSelector(
        getState,
        state => _.get(state, 'error', []),
    ),
}
