import React from "react";
import './Footer';
import { shallow } from 'enzyme';
import Footer from "./Footer";

describe('<Footer/>', () => {
    it('Shallow render the Footer component to verify it renders without crashing', () => {
        const component = shallow(<Footer/>);
        expect(component).toHaveLength(1);
    });
});