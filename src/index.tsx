import React from 'react';
import {AppWithRedux} from './AppWithRedux';

import { store} from './componets/redux/redux-store';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';




// export const renderTree = () =>   {
    ReactDOM.render(
        <Provider store={store}>
            <AppWithRedux />
        </Provider>,
        document.getElementById('root')
    );
// }


// store.subscribe(()=>{
//     renderTree()
// })

