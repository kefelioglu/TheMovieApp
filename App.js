import React from 'react';
import AppNavigationContainer from './src/navigation/AppNavigation'
import TabNavigationContainer from './src/navigation/TabNavigation'
import {persistor,store} from './src/config/store'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'



function App() {
  return (
    <Provider store={store}>
      
        <AppNavigationContainer/>
      
    </Provider>

  )
};

export default App;
