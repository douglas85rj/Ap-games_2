import Form from '../Form'
import {render, screen} from '@testing-library/react'

test("validar valores do label",() => { 

render(<Form />)
const inputName = screen.getByDisplayValue('firstName')
const inputSobrenome = screen.getByDisplayValue('lastName')

expect(inputName).toHaveAttribute("input", "firstName")
expect(inputSobrenome).toHaveAttribute("input", "lastName")


})

