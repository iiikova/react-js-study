import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UseContext from './UseContext';

describe('<UseContext />', () => {
  test('it should mount', () => {
    render(<UseContext />);
    
    const useContext = screen.getByTestId('UseContext');

    expect(useContext).toBeInTheDocument();
  });
});