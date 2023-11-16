// Button.test.jsx
import { render, screen, userEvent } from '@testing-library/react';
import Button from "./Button";
import { vi } from 'vitest';

describe('Button', () => {
  it('should render the button', () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it('should render the disabled button', () => {
    render(<Button disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it('should be clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} >Click me</Button>);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('should render the text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent('Click me');
  });
});
