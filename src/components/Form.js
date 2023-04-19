import React from "react";
import { useForm } from "react-hook-form";
import  {FormStyle} from "../styles/FormStyle";

export default function Form() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
     
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <p>Digite seu nome</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>O primeiro nome não pode exceder 20 caracteres</p>
      )}
      {errors?.firstName?.type === "pattern" && <p>Somente letras</p>}


      <label>Sobrenome</label>      
      <input {...register("lastName",{ 
        required: true,  
        pattern: /^[A-Za-z]+$/i })} />

      {errors?.lastName?.type === "required" && <p>Digite seu sobrenome</p>}
      {errors?.lastName?.type === "pattern" && <p>Somente letras</p>}


      <label>Idade</label>
      <input {...register("age",{
         required: true , 
         min: 18, max: 99 })} />

      {errors?.age?.type === "required" && <p>Digite a sua Idade</p>}
      {errors.age && <p>Você deve ter entre 18 e 99 anos</p>}
      <input type="submit" data-testid="form_button" />
      <FormStyle />
    </form>
  );
}






