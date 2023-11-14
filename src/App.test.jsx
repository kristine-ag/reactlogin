import { render, screen } from '@testing-library/react';
import App from "../src/App";


describe('App', () => {
  it('should render the App', () => {
    render(<App />);
    
    screen.debug()

    const appContainer = screen.getByTestId(/app-container/i);
    expect(appContainer).toBeInTheDocument();
    // const username = screen.getByText(/username/i);
    // expect(username).toBeInTheDocument();
  });
});