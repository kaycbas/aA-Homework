import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchSearchGiphys } from './util/api_util';
import * as GiphyActions from './actions/giphy_actions';
import { fetchSearchGiphysAction } from './actions/giphy_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    window.store = store;
    window.receiveSearchGiphys = GiphyActions.receiveSearchGiphys;
    window.fetchSearchGiphys = fetchSearchGiphysAction;

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Hello</h1>, root);
})