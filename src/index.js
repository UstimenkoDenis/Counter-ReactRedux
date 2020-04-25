import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counter from './reducer';



//  создаем хранилище
const store = createStore(counter);

ReactDom.render(<Provider store = {store}>
                     <App/>
                </Provider>, document.getElementById('root'));
