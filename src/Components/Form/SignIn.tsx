import { SetStateAction, useState } from 'react'
import styles from './SignIn.module.scss'
import {useNavigate} from 'react-router'


export const SignIn = () => {
  // const [email,setEmail]= useState("")
  // const [password, setPassword] = useState("")
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(evnt: { target: { value: SetStateAction<string>; }; })=>{
      setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  const navigate = useNavigate();

  const handleSubmission = () => {
    
    navigate("/dashboard");
  }

  return (
    <div className={styles.main}>
      
        <div className={styles.container}>
          <div  className={styles.maindiv}>
        
        
          <img className = {styles.logo} src="/assets/Group.png" alt="lendsqr" />
          <img src="/assets/lendsqr.png" alt="logo" />
        
        
        </div>
       <div className={styles.content}>
          <div className={styles.title}>
            <h2>Welcome!</h2>
            <h5>Enter details to login.</h5>

            <form action="" onSubmit = {handleSubmission}>
            <input className={styles.input} type="email" placeholder='Email'  />
            <div className={styles.passwordfield}>
            <input className = {styles.input} placeholder='Password' type={passwordType} onChange={handlePasswordChange} value={passwordInput}  />
            {
              passwordType==="password" ? 
              <p className={styles.show} onClick={togglePassword}>SHOW</p>
              :
              <p className={styles.show} onClick={togglePassword}>HIDE</p>
            }
           
            </div>

            <p className={styles.forgot}>FORGOT PASSWORD?</p>
            <button type='submit' className={styles.submit}  > LOGIN </button>

            </form>
          </div>

        </div>

    </div>
    </div>

  )
}


