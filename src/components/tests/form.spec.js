import Form from '../Form'
import {render, screen} from '@testing-library/react'

describe ('Form component test rendering', () => {
   it('renders without crashing', () => {
  
    
    render (<Form />);
    const button = screen.getByTestId('form_button');
    const input_age = screen.getByTestId('form_age');
    const input_lastName = screen.getByTestId('form_lastName');
    const input_firstName = screen.getByTestId('form_firstName');

    expect(button).toBeInTheDocument();
    expect(input_age).toBeInTheDocument();
    expect(input_lastName).toBeInTheDocument();
    expect(input_firstName).toBeInTheDocument();
  });
    });

