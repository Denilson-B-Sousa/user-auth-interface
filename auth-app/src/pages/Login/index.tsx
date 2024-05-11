import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createUserLoginSchema = z.object({
  email: z.string()
  .email('* Formato de email inválido!')
  .toLowerCase()
  .refine(email => {
    return email.endsWith('@gmail.com')
  }, 'O email precisa incluir @gmail.com'),
  password: z.string()
  .min(6, '* A senha deve ter 6 caracteres!')
})

type createuserLoginData = z.infer<typeof createUserLoginSchema>

export function Login() {

    const [output, setOutput] = useState('');
    const {
      register, 
      handleSubmit,
      formState: { errors }
    } = useForm<createuserLoginData>({
      resolver: zodResolver(createUserLoginSchema)
    });

    function loginUser(data: unknown) {
      setOutput(JSON.stringify(data, null, 2));
    }


    const [active, setActive] = useState('disabled');
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const handleChangeStyles = () => {
      setActive('active');
      setButtonEnabled(true);
    }
    
    return(
        <section className='flex flex-col justify-center items-center my-12'>
            <span className='text-white text-2xl text-center font-Montserrat mb-8 '><span className="text-5xl font-bold ">Olá,</span> <br/><br/>Faça o login para iniciar a sessão</span>
            <form onSubmit={handleSubmit(loginUser)} className='inline-flex flex-col gap-1 bg-white p-6 rounded-md w-96'>
              <label>
                <span>Email:</span>
              </label>
                <input 
                  type="email" 
                  placeholder='exemplo@gmail.com' 
                  className='border-2 border-slate-200 outline-slate-600 rounded-md p-2 w-80' 
                  {...register("email")}
                  
                />

                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

              <label className='inline-flex gap-32'>
                <span className=''>Senha:</span>
                <a href="recovery" className='text-blue-600'>Esqueceu a senha?</a>
              </label>
              <input 
                type="password" 
                className='border-2 border-slate-200 outline-slate-600 rounded-md p-2 w-80' 
                {...register("password")}
                onChange={handleChangeStyles}
              />
              {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
              <button disabled={!buttonEnabled} className={active === "active" ? `bg-blue-600 py-1 px-2 mt-4 mb-4 rounded-md text-white cursor-pointer` : `bg-disabled py-2 px-2 mt-4 mb-4 rounded-md text-white cursor-not-allowed`}>Login</button>
              <p className='inline-flex gap-1 text-base font-semibold'>Não tem uma conta? <a href="sign-up" className='text-blue-600'> Crie nova conta</a></p>
            </form>
            <pre>
              {output}
            </pre>
        </section>
    )
}