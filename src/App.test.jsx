import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from "../src/App";

describe('App', () => {
  it('should render the App', async () => {
    render(<App />);
    const appContainer = screen.getByTestId(/app-container/i);
    expect(appContainer).toBeInTheDocument();
  });

  it('should enable the button if two textboxes were typed', async () => {
    render(<App />);
    
    const usernameInput = screen.getByLabelText('Username');
    fireEvent.change(usernameInput, { target: { value: 'root' } });

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'root' } });

    await screen.findByRole('button', { name: 'Login' });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).not.toBeDisabled();
  });
});
