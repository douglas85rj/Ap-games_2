import Form from '../Form'
import {render, screen} from '@testing-library/react'

describe ('Form component test and Form render', () => {
    test('renders without crashing', () => {
  
    
    render (<Form />);
    const input = screen.getByTestId('form_button');
    

    expect(input).toBeInTheDocument();
  });
    });

