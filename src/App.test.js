import { render, screen } from '@testing-library/react';
import Form from './Form';

test('fname input should be rendered', ()=>{
  render(<Form/>);

  const fnameInput = screen.getByPlaceholderText(/fname/i);
  expect(fnameInput).toBeInTheDocument()
})

test('render fisrt name component in the document', ()=>{
  render(<Form/>);

  const fname = screen.getByLabelText(/first name/i);
  expect(fname).toBeInTheDocument()
})