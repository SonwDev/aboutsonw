import { describe, it, expect } from 'vitest';
import Button from './button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const button = shallow(<Button label="Click Me" />);
    expect(button.text()).toBe('Click Me');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    const button = shallow(<Button label="Click Me" onClick={handleClick} />);
    button.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});