import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from "./redux/store";
import App from './components/App/App';
import { ListenNuiMessages, onEvent } from "./Nui"
import { useRootDispatch, useRootSelector } from './redux/hooks';
import { selectVisibility, setVisibility } from './rootSlice';

// Initialize NUI message listening
ListenNuiMessages();

const RootComponent: React.FunctionComponent = (props) => {
    const visibility = useRootSelector(selectVisibility);
    const dispatch = useRootDispatch();

    onEvent("display", (payload: boolean) => {
        dispatch(setVisibility(payload));
    });

    return visibility ? <App /> : null;
}

ReactDOM.render((
    <Provider store={store}>
        <RootComponent />
    </Provider>
),
    document.getElementById('app'),
);