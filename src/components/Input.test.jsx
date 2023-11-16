import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('should render the input field', () => {
    render(<Input label="Username" type="text" id="username" name="username" value="" onChange={() => {}} />);
    const input = screen.getByLabelText('Username');
    expect(input).toBeInTheDocument();
  });

  it('should be typed', () => {
    render(<Input label="Username" type="text" id="username" name="username"/>);
    const input = screen.getByLabelText('Username');

    fireEvent.change(input, { target: { value: 'testuser' } });
    expect(input.value).toBe('testuser');
  });

  it('label should render', () => {
    render(<Input label="Username" type="text" id="username" name="username" value="" onChange={() => {}} />);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
  });
});
