
export function Login() {
    return(
        <section className='flex flex-col justify-center items-center my-12'>
            <h1 className='text-2xl  mb-8 font-Montserrat font-bold'>Login</h1>
            <form className='inline-flex flex-col gap-1 bg-white p-4 rounded-sm'>
              <label>
                <span>Email:</span>
              </label>
                <input type="email" placeholder='example@gmail.com' className='border-2 border-slate-200 outline-slate-600 rounded-md p-1' />
              <label className='inline-flex gap-16'>
                <span className=''>Password:</span>
                <a href="recovery" className='text-blue-600'>Esqueceu a senha?</a>
              </label>
              <input type="password" className='border-2 border-slate-200 outline-slate-600 rounded-md mb-4 p-1' />
              <button className='bg-blue-600 py-1 px-2 mb-4 rounded-md text-white '>Login</button>
              <p className='inline-flex gap-1 text-sm'>Não tem uma conta? <a href="sign-up" className='text-blue-600'>Crie nova conta</a></p>
            </form>
        </section>
    )
}