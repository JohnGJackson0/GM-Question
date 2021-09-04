import React from 'react';
import {render} from '@testing-library/react-native';
import { GithubCommit } from '../GithubCommit';


describe('HomeScreen', () => {
  test('Should render correctly', () => {
    const wrapper = render(<GithubCommit />);
    wrapper.getByTestId('home-screen');
  });
});