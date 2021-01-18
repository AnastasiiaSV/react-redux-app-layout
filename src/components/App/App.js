import PropTypes from 'prop-types'

import './App.css';

function App(props) {

  const testSagas = (event) => {
    event.preventDefault()
    props.appActionCreator.init()
  }

  const setReduxTestVal = (event) => {
    event.preventDefault()
    props.appActionCreator.setTest()
  }

  return (
    <div className="App">
      {/*<header className="App-header">

      </header>*/}

      <div className="layout-container">

        <button onClick={setReduxTestVal}>SET test Redux val</button>

        <button onClick={testSagas}>Test async saga</button>

      </div>

    </div>
  );
}

App.propTypes = {
  appActionCreator: PropTypes.object.isRequired,
}

export default App;
