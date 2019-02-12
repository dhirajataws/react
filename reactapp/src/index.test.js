import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import ProviderWeb from '.';

it('provider renders store ', () => {
    let providerWeb = mount(<ProviderWeb />);
    const isReduxProvider = providerWeb.find(ProviderWeb).find('Provider');
    expect(isReduxProvider).toHaveLength(1);
}); 