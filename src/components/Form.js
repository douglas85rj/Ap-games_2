import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation



  return (
     
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Nome</Label>
      <Input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <P>Digite seu nome</P>}
      {errors?.firstName?.type === "maxLength" && (
        <P>O primeiro nome não pode exceder 20 caracteres</P>
      )}
      {errors?.firstName?.type === "pattern" && <P>Somente letras</P>}


      <Label>Sobrenome</Label>      
      <Input {...register("lastName",{ 
        required: true,  
        pattern: /^[A-Za-z]+$/i })} />

      {errors?.lastName?.type === "required" && <P>Digite seu sobrenome</P>}
      {errors?.lastName?.type === "pattern" && <P>Somente letras</P>}


      <Label>Idade</Label>
      <Input {...register("age",{
         required: true , 
         min: 18, max: 99 })} />

      {errors?.age?.type === "required" && <P>Digite a sua Idade</P>}
      {errors.age && <P>Você deve ter entre 18 e 99 anos</P>}
      <Input type="submit" data-testid="form_button" />
   
    </StyledForm>
    
  );
}

export const StyledForm = styled.form`

font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

max-width: 500px;
margin: 0 auto;
& .form {
  background: #0e101c;
  max-width: 400px;
  margin: 0 auto;
}
`;

const P = styled.p`
color: #bf1650;
&::before {
  display: inline;
    content: "⚠ ";
}
`;


const Input = styled.input`

display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    &:disabled {
      opacity: 0.4;
    }
`;



const Label = styled.label`
line-height: 2;
text-align: left;
display: block;
margin-bottom: 13px;
margin-top: 20px;
color: white;
font-size: 14px;
font-weight: 200;
`;