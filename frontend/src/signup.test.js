import React from 'react';
import { shallow } from 'enzyme'; // You'll need to install enzyme and enzyme-adapter-react-16
import signupTest as SignupForm from './signup2.js'; // Adjust the import path as needed

describe('SignupForm', () => {
  it('should update state when input fields change', () => {
    const wrapper = shallow(<SignupForm />);
    const usernameInput = wrapper.find('input[name="username"]');
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');

    // Simulate input changes
    usernameInput.simulate('change', {
      target: { name: 'username', value: 'testuser' },
    });
    emailInput.simulate('change', {
      target: { name: 'email', value: 'test@example.com' },
    });
    passwordInput.simulate('change', {
      target: { name: 'password', value: 'testpassword' },
    });

    // Check if the state has been updated correctly
    expect(wrapper.state('username')).toBe('testuser');
    expect(wrapper.state('email')).toBe('test@example.com');
    expect(wrapper.state('password')).toBe('testpassword');
  });

  it('should handle form submission', () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<SignupForm />);
    wrapper.instance().handleSubmit = mockSubmit; // Mock the handleSubmit method

    // Simulate form submission
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}, // Mock the preventDefault function
    });

    // Verify that the handleSubmit method was called
    expect(mockSubmit).toHaveBeenCalled();
  });
});