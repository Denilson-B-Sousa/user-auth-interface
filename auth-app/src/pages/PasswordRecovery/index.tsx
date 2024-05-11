
export function PasswordRecovery() {
    return(
        <>
           <section className='flex flex-col justify-center items-center my-12'>
            <h1 className='text-3xl  mb-8 font-Montserrat text-white font-bold'>Recuperar Senha</h1>
            
            <form className='inline-flex flex-col gap-1 bg-white p-6 rounded-md'>
              <label>
                <span>Email:</span>
              </label>
                <input 
                type="email" 
                placeholder='exemplo@gmail.com' 
                className='border-2 border-slate-200 outline-slate-600 rounded-lg p-2 w-80' />
              <button className='bg-disabled w-full py-2 px-2 mb-4 mt-4 rounded-md text-white text-sm'>Enviar e-mail de recuperação</button>
              <div className="flex flex-col gap-4 font-semibold text-center">
                <p >Já possui uma conta? <a href="login" className="text-blue-600">Login</a></p>
                <p>Ainda não possui uma conta? <a href="sign-up" className="text-blue-600">Cadastre-se </a></p>
              </div>
            </form>
        </section> 
        </>
    )
}