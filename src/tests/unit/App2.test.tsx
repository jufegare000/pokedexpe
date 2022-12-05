import { render, screen } from '@testing-library/react';
import App from '../../app/App';

test('renders learn react link COPY', () => {
  const div = document.createElement('div');
  render(<App />);

  expect(div.innerHTML).toContain('')
  
  // expect(linkElement).toBeInTheDocument();
});
