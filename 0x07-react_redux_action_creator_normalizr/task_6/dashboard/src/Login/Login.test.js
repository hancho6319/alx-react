import React from "react";
import { shallow } from 'enzyme';
import Login from "./Login";

describe('<Login/>', () => {
    it('Shallow render the Login component to verify it renders without crashing', () => {
        const component = shallow(<Login/>);
        expect(component).toHaveLength(1);
    });
});