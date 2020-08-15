// redux最核心的管理对象store
import {applyMiddleware, createStore} from 'redux'
// import {comments} from "./reducers";
import reducers from "./reducers";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(
    // comments,
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)
