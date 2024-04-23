
export function PasswordRecovery() {
    return(
        <>
           <section className='flex flex-col justify-center items-center my-12'>
            <h1 className='text-2xl  mb-8 font-Montserrat font-bold'>Recuperar Senha</h1>
            
            <form className='inline-flex flex-col gap-1 bg-white p-4 rounded-sm'>
              <label>
                <span>Email:</span>
              </label>
                <input type="email" placeholder='exemplo@gmail.com' className='border-2 border-slate-200 outline-slate-600 rounded-lg p-1 w-72' />
              <button className='bg-disabled w-36 py-2 px-2 mb-4 mt-4 rounded-md text-white text-sm'>Recuperar Senha</button>
              <div className="flex gap-4 text-blue-600">
                <a href="login">Login</a>
                <a href="sign-up">Cadastre-se </a>
              </div>
            </form>
        </section> 
        </>
    )
}