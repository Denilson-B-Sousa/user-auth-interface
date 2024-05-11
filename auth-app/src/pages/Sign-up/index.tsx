import { useState } from "react";
import {useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  name: z.string()
  .min(2, "Nome deve ter até 2 caracteres. ex: Zé")
  .transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),


  email: z.string()
    .email('Formato de email inválido!')
    .toLowerCase()
    .refine( email => {
      return email.endsWith('@gmail.com')
    }, 'O e-email precisa incluir .gmail.com'),

  password: z.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  
  confirmPassword: z.string()
  .min(6, "A senha deve ter no mínimo 6 caracteres")
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas não são iguais!'
})

/*Determinando o tipo dos dados em CreateUserSchema */
type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function SignUp() {
  
    const [output, setOutput] = useState('');
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const { 
      register, 
      handleSubmit, 
      formState: { errors },
    } = useForm<CreateUserFormData>({
      resolver: zodResolver(createUserFormSchema),
    });

    function createUser(data: unknown) {
      setOutput(JSON.stringify(data, null, 2))
    }

    const handleChangeStyles = () => {
      setButtonEnabled(true);
    }

    return(
        <section className='flex flex-col justify-center items-center my-8'>
             <h1 className='text-4xl text-white mb-8 font-Montserrat font-bold'>Cadastre-se</h1>
            <form 
              className='inline-flex flex-col w-96  gap-1 bg-slate-100 p-8 rounded-md'
              onSubmit={handleSubmit(createUser)}
            >
              <label htmlFor="name">
                <span>Nome:</span>
              </label>
                <input 
                  type="text" 
                  maxLength={100} 
                  placeholder='José da Silva' 
                  className='border-2 border-slate-200 outline-slate-600/80 rounded-md p-2 w-80' 
                  {...register("name")}
                />
                {errors.name && <span className="text-red-600 text-xs">*{errors.name.message}</span>}

              <label className="email">
                <span>Email:</span>
              </label>
                <input 
                  type="email" 
                  placeholder='exemplo@gmail.com' 
                  className='border-2 border-slate-200 outline-slate-600/80  rounded-md p-2' 
                  {...register("email")} // campo name colocado automáticamente 
                />
                {errors.email && <span className="text-red-600 text-xs">*{errors.email.message}</span>}

              <label htmlFor="password" className='inline-flex gap-32'>
                <span className=''>Senha:</span>
              </label>
              <input 
                type="password" 
                className='border-2 border-slate-200 outline-slate-600/80 rounded-md  p-2' 
                {...register("password")}
              />
                {errors.password && <span className="text-red-600 text-xs">*{errors.password.message}</span>}

              <label htmlFor="password" className='inline-flex gap-16'>
                <span className=''>Confirmar Senha:</span>
              </label>
                <input 
                  type="password" 
                  className='border-2 border-slate-200 outline-slate-600/80 rounded-md  p-2' 
                  {...register("confirmPassword")}
                  onChange={handleChangeStyles}
                /> 
                {errors.confirmPassword && <span className="text-red-600 text-xs">*{errors.confirmPassword.message}</span>}
 
              <button disabled={!buttonEnabled} className={ buttonEnabled === true ? 'bg-blue-600 py-1 px-2 my-4 rounded-md text-white ' : 'bg-disabled py-2 px-2 mt-4 mb-4 rounded-md text-white cursor-not-allowed'}>Cadastre-se</button>
              <p className='inline-flex items-center gap-1 text-sm font-semibold'>Já possui uma conta? <a href="login" className='text-blue-600 text-base'>login</a></p>
            </form>

            <pre>
              {output}
            </pre>
        </section>
    )
}