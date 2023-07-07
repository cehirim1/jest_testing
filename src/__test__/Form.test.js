import {render, screen, cleanup} from "@testing-library/react";
import Form from "../Form";
import userEvent from "@testing-library/user-event";

beforeEach(()=>{
    render(<Form/>);
});

describe("Test the Form component", ()=>{
    test("render the form with 1 button", async ()=>{
        const buttonSubmit = await screen.findAllByRole("button");
        expect(buttonSubmit).toHaveLength(1);
    });

   test("email input field should accept only email format", ()=>{
    const email = screen.getByPlaceholderText(/email/i);
    userEvent.type(email, "chisom");
    expect(email.value).not.toMatch('chisom@gmail.com');
   });


   test("last name should have type text", ()=>{
    const lastName = screen.getByLabelText(/last name/i);
    expect(lastName).toHaveAttribute("type", "text");
   });
});