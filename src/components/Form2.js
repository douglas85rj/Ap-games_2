import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";



export default function Form2() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
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
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>Digite seu nome</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>O primeiro nome não pode exceder 20 caracteres</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Somente letras</p>
      )}
      <label>Sobrenome</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p>Somente letras</p>
      )}
      <label>Idade</label>a
      <input {...register("age", { min: 18, max: 99 })} />
      {errors.age && (
        <p>Você deve ter entre 18 e 99 anos</p>
      )}
      <input type="submit" />
    </form>
  );
}


