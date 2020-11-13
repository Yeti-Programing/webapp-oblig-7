import { shallow } from 'enzyme';
import { App } from '../src/App';

it('Should contain the text "Hello World"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContainElement('Hello World')
})