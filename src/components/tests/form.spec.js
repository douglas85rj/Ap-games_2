import Form from '../Form'
import {render, screen} from '@testing-library/react'

describe ('Form component test', () => {
    test('renders without crashing', () => {
  it('renders a form', () => {
    
    render (<Form />);
    const input = screen.getByTestId('form_button');
    

    expect(input).toBeInTheDocument();
  });
    });
});
