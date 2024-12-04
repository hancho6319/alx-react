import React from "react";
import './Header';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('<Header/>', () => {
    it('Shallow render the Header component to verify it renders without crashing', () => {
        const component = shallow(<Header/>);
        expect(component).toHaveLength(1);
    });
});