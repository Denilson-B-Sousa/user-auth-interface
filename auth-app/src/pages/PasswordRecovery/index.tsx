
export function PasswordRecovery() {
    return(
        <>
           <section className='flex flex-col justify-center items-center my-12'>
            <h1 className='text-2xl  mb-8 font-Montserrat font-bold'>Login</h1>
            
            <form className='inline-flex flex-col gap-1 bg-white p-4 rounded-sm'>
              <label>
                <span>Email:</span>
              </label>
                <input type="email" placeholder='example@gmail.com' className='border-2 border-slate-200 outline-slate-600 rounded-lg p-1 w-72' />
              <button className='bg-blue-600 py-1 px-2 mb-4 mt-4 rounded-md text-white '>Enviar Email</button>
              <div className="flex gap-36 text-blue-600">
                <a href="login">Login</a>
                <a href="sign-up">Cadastre-se </a>
              </div>
            </form>
        </section> 
        </>
    )
}