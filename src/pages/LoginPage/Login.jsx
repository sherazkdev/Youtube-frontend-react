import React,{ useRef,useState,useEffect, useContext } from 'react'
import {motion,AnimatePresence} from "framer-motion";
import {useForm } from "react-hook-form"
import Icons from "../../assets/Icons";
import {handleGetUserByEmailIsExist,handleLoginUser} from "../../api/AxiosInstance";
import { useNavigate } from 'react-router-dom';
import { AuthProvider,AuthContext } from '../../context/AuthContext';

function Login() {

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const placeholder = useRef();
  const emailInput = useRef();
  const [showPasswordCheckBox,setShowPasswordCheckBox] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [loading,setLoading] = useState(false);
  const [step,setStep] = useState(1);
  const [user,setUser] = useState(undefined);
  const [emailVerified,setEmailVerified] = useState(false);
  const {setLoggedInUser} = useContext(AuthContext);


  useEffect( () => {
    const handleClickOutside = (e) => {
      if (
        emailInput.current &&
        !emailInput.current.contains(e.target)
      ) {
        // Remove focus if clicked outside and input is empty
        if (emailInput.current.value === '') {
          setIsFocused(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  },[] )

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handelCreateAccount = () => {
    alert();
  }

  const waitTwoSeconds = new Promise( (resolve) => setTimeout(resolve,3000) );

  useEffect( () => {

    if(user && emailVerified) {
      setLoggedInUser(user);
      setUser(null);
      setEmailVerified(false);
      setTimeout( () => {
        Navigate("/",{replace:true})
      }, 200 )
    }

  },[user])

  const onSubmit = async(data) => {

    if(emailVerified === false){
      
      try {
      
        setLoading(true)
        const [response] = await Promise.all([handleGetUserByEmailIsExist(data.email),waitTwoSeconds])
        if(response && response?.data?.statusCode == 200){
          setStep(2);
          setEmailVerified(true)
          setLoading(false);
        }
  
      } catch (error) {
        setTimeout( () => {
          if(error && error?.response){
            if(error.response?.status == 404){
                setEmailVerified(false)
                setError("email",{message:"Couldn’t find your Google Account"})
                console.log(errors)
            }
          }
          setLoading(false);
        },1500 )
  
      }

    }


    if(emailVerified === true ) {
      // verify email and password genrate session cookies
      try {
        setLoading(true)
        const [response] = await Promise.all([handleLoginUser(data.email,data.password),waitTwoSeconds]);
        if(response && response?.data.statusCode == 200){
          setUser(response?.data?.data);
          // window.location.href = "/";
        }
        setLoading(false);
      } catch (error) {
        setTimeout(() => {
          if(error?.response?.status == 401) {
            setLoading(false)
            setError("password",{message:"Wrong password. Try again or click Forgot password to reset it."});
          }else if(error?.response?.status == 400){
            alert()
            setLoading(false);
            window.location.href = '/login';
          }
        }, 1500);
      }
    }

  }

  return (
    <>
      <main className='bg-[#f1f4f9] w-full min-h-screen flex justify-center items-center'>

        <section id="loginOrSignUp">

          {/* Login Section */}
          <section id='loginSection' className='bg-[#ffffff] relative w-[1040px] h-[422px] rounded-xl shadow-[0px_0px_3px_#d9d9d9] border-none flex flex-col p-7'>
              
              {loading && (

                // {/* Loading Bar */}
                <div className="absolute inset-0 bg-gray-100/20 z-40 flex items-start justify-center">
                  <div className="w-full h-[5px] bg-[#ececec] relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-[3px] w-[120px] bg-blue-600 z-50 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{
                        width: ["0%", "50%", "100%"],
                        x: ["-120px", "45vw"],
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </div>

              )}

              <form onSubmit={handleSubmit(onSubmit)}>

                {step === 1 ? (
                  // {/* Step 1 Email || Username */}
                  <div id="step1" className='flex flex-col space-y-2'>

                    {/* top section */}
                    <div>
                      
                      {/* Google Logo */}
                      <div>
                          <Icons.Google />
                      </div>

                    </div>
                    
                    {/* center email or username submit forgot section */}
                    <div className='flex w-[961px] justify-between  h-[278px]'>
                      
                      {/* Left section */}
                      <div className='flex space-y-1 flex-col'>
                        
                        {/* Sign In Label */}
                        <div>
                          <h1 className='text-[44px] text-[#1f1f1f] font-medium'>Sign In</h1>
                        </div>
                        
                        {/* use your google account label */}
                        <div>
                          <p className='text-[16px] font-normal text-[#1f1f1f] font-roboto'>Use your Google Account</p>
                        </div>

                      </div>

                      {/* Right email or username submit forgot section */}
                      <div className='flex flex-col space-y-8'>

                        {/* Input and forgot link */}
                        <div className='flex flex-col relative'>
                          
                          <input type='text' id='email' ref={emailInput} onFocus={handleInputFocus} {...register("email",{required:{value:true,message:"Enter an email or phone number"},minLength:{value:3, message:"Enter a valid email or phone number"},maxLength:{value:25,message:"Enter a valid email or phone number"}})} onClick={handleInputFocus} className={`${isFocused ? `border-[2px] border-[#305bce]` : `border border-[#747775]`} transition-all duration-300 outline-none w-[460px] h-[55px] p-3 rounded-md`} />
                          
                          <p ref={placeholder} className={`bg-[#ffffff] absolute text-[17px] ${isFocused ? `top-[-14px] left-3 text-[#305bce] ` : "top-4 left-3"} transition-all duration-300`}> Email or username </p>
                          
                          {errors?.email && (<span className='flex space-x-1 items-center text-[#a52821]'> <span> <Icons.Info /> </span> <span className='text-[13px] text-semibold'> {errors?.email?.message} </span> </span>)}

                          <a href="#" className='mt-1 text-[#305bce] font-medium'>Forgot email?</a>
                        </div>
                        
                        {/* details */}
                        <div className='flex space-x-1 flex-nowrap w-[430px]'>
                          <p className='text-[15px]'>Not your computer? Use Guest mode to sign in privately. <a href='#' className='text-[#305bce] font-medium'>Learn more about using Guest mode</a> </p>
                        </div>

                        {/* next and create account button */}
                        <div className='flex justify-end space-x-5'>
                            
                            {/* Create account button */}
                            <button type='button' className='text-[#305bce] font-medium hover:bg-[#f7f9fd] px-2 py-2 rounded-full mt-4' onClick={handelCreateAccount}> Create account </button>

                            {/* Next Button */}
                            <button type='submit' className='bg-[#305bce] px-4 py-2 text-[#ffffff] font-medium rounded-full mt-4'>Next</button>
                        </div>

                      </div>

                    </div>

                  </div>
                ) : step === 2 ? (

                  // {/* Step 2 Password */}
                  <div id="step2" className='flex flex-col  space-y-2'>

                    {/* top section */}
                    <div>
                      
                      {/* Google Logo */}
                      <div>
                          <Icons.Google />
                      </div>

                    </div>
                    
                    {/* center email or username submit forgot section */}
                    <div className='flex w-[961px] justify-between  h-[278px]'>
                      
                      {/* Left section */}
                      <div className='flex space-y-2 flex-col'>
                        
                        {/* Sign In Label */}
                        <div>
                          <h1 className='text-[44px] text-[#1f1f1f] font-roboto'>Welcome</h1>
                        </div>
                        
                        {/* use your google account label */}
                        <div className='flex space-x-1 items-center border border-[#747775] hover:bg-[#f7f9fd] cursor-pointer px-1 py-1 rounded-full'>
                          <span><Icons.Avatar /></span>
                          <p className='text-[16px] font-normal text-[#1f1f1f] font-roboto'>{watch("email")}</p>
                          <span><Icons.MarkDown /></span>
                        </div>

                      </div>

                      {/* Right email or username submit forgot section */}
                      <div className='flex flex-col items-cen space-y-8 mt-[70px]'>

                        {/* Input and forgot link */}
                        <div className='flex flex-col  space-y-2 relative'>
                          
                          {/* input */}
                          <div>

                            <input type={`${showPasswordCheckBox ? "text" : "password" }`} id='email' ref={emailInput} {...register("password",{required:{value:true,message:"Enter a password"}})}  onFocus={handleInputFocus} onClick={handleInputFocus} className={`${isFocused ? `border-[2px] border-[#305bce]` : `border border-[#747775]`} transition-all duration-300 outline-none w-[460px] h-[55px] p-3 rounded-md`} />
                            <p ref={placeholder} className={`bg-[#ffffff] absolute text-[17px] ${isFocused ? `top-[-14px] left-3 text-[#305bce] ` : "top-4 left-3"} transition-all duration-300`}> Enter your password </p>

                            {errors?.password && (<span className='flex space-x-1 items-center text-[#a52821]'> <span><Icons.Info /></span> <span className='text-[13px] text-semibold'> {errors?.password?.message} </span> </span>)}

                          </div>

                          {/* show password toggle */}
                          <div className='flex space-x-2'>
                            <input type="checkbox" id="showPassword" onClick={ (e) => (e.target.checked ? setShowPasswordCheckBox(true) : setShowPasswordCheckBox(false))} className='w-[18px] hover:bg-[#f7f9fd]' />
                            <label htmlFor="showPassword">Show password</label>
                          </div>

                        </div>

                        {/* next and create account button */}
                        <div className='flex justify-end space-x-5'>
                            
                            {/* Create account button */}
                            <button type='button' className='text-[#305bce] font-medium hover:bg-[#f7f9fd] px-2 py-2 rounded-full ' onClick={handelCreateAccount}> Forgot password?</button>

                            {/* Next Button */}
                            <button type='subimit' className='bg-[#305bce] px-4 py-2 text-[#ffffff] font-medium rounded-full' >Next</button>
                        </div>

                      </div>

                    </div>

                  </div>
                ) : null }

              </form>
         
          </section>


          {/* Sign Up section */}

        </section>
      
      </main>
    </>
  )

}
export default Login;
