import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'

import reducers from '../redux/reducers'
import sagas from '../sagas'

const sagaMiddleware=createSagaMiddleWare()
const middleWareList=[sagaMiddleware];
if(process.env.NODE_ENV === 'development'){
    middleWareList.push(createLogger());
}

const str = createStore(reducers,applyMiddleware(...middleWareList));
sagaMiddleware.run(sagas)


export const  store = str