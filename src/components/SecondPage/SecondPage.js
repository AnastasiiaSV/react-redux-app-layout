import PropTypes from 'prop-types'

import './App.css';

function SecondPage(props) {

  const setReduxTestVal = (event) => {
    event.preventDefault()

    props.appActionCreator.setTest()

  }

  return (
    <div className="App">
      {/*<header className="App-header">

      </header>*/}

      <div className="layout-container">

        <button onClick={setReduxTestVal}>SET test val</button>

      </div>

    </div>
  );
}

SecondPage.propTypes = {
  appActionCreator: PropTypes.object.isRequired,
}

export default SecondPage;
