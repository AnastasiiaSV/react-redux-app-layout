import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/*import userSelectors from 'store/user/selector'
import routerSelectors from 'store/router/selector'*/

import SecondPage from './SecondPage'
import appSelectors from "../../store/selectors/appSelectors";
import appActionCreator from "../../store/actionCreators/appActionCreator";

const mapStateToProps = state => ({
    app: appSelectors.getTestValue(state)

   // signUpState: userSelectors.getSignUpState(state),
   // currentUrl: routerSelectors.getCurrentUrl(state),
})

const mapDispatchToProps = dispatch => ({
    appActionCreator: bindActionCreators(appActionCreator, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SecondPage)
