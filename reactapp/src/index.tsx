import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from "react-redux";

export default class ProviderWeb extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
document.getElementById('root') && ReactDOM.render(
    <ProviderWeb />,
    document.getElementById('root')
);