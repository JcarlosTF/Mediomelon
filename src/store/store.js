// import { createStore, combineReducers,applyMiddleware   } from 'redux'
// import { deptoFrutasReducer} from '../Reducers/reducers.js'
// const reducers =  combineReducers({

//     deptoFrutasReducer,

// });


// export const store =  createStore(reducers, applyMiddleware(thunk));
// A very simple 
// import { createStore, combineReducers } from 'redux';
// // import {counter } from '../Reducers/reducers.js';

// let count= 0;

// function counter(state=count, action){
//   switch (action.type) {
//     case "Increment": count++;
//       break;
//     case "Decrement": count--;
//       break;
//   }
//   return count;
// }


// export let store = createStore(combineReducers({ count: counter }));

// import { createStore,combineReducers,applyMiddleware} from 'redux';
// import reducer from '../Reducers/reducers.js';

// const store = createStore(reducer, {
// key:'root'
// })

// // const reduc =  combineReducers({

// //     reducer,

// // });


// // const store =  createStore(reduc, applyMiddleware(thunk));
// export default store;
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from '../Reducers/reducers.js';
import storage from 'redux-persist/lib/storage';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })

const persistConfig = {
  key: 'root',
  storage,
  timeout:null,
}


const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };



















