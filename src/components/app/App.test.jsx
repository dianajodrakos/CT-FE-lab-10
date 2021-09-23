import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('tests rendered behavior of App component', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement;

    const display = screen.getByRole('display');
    expect(display.style.backgroundColor).toEqual('rgb(255,0,0)');

  });
});
