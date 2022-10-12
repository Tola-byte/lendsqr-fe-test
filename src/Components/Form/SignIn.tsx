import { useState } from 'react'
import styles from './SignIn.module.scss'
import {useNavigate} from 'react-router'


export const SignIn = () => {
  const [email,setEmail]= useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmission = () => {
    setEmail(email)
    setPassword(password)
    navigate("/dashboard");
  }

  return (
    <div className={styles.main}>
      
        <div className={styles.container}>
          <div  className={styles.maindiv}>
        
        
          <img className = {styles.logo} src="./src/assets/Group.png" alt="lendsqr" />
          <img src="./src/assets/lendsqr.png" alt="logo" />
        
        
        </div>
       <div className={styles.content}>
          <div className={styles.title}>
            <h2>Welcome!</h2>
            <h5>Enter details to login.</h5>

            <form action="" onSubmit = {handleSubmission}>
            <input className={styles.input} type="email" placeholder='Email' value={email} />
            <div className={styles.passwordfield}>
            <input className = {styles.input} type="password" placeholder='Password' value={password} />
            <p className={styles.show}>SHOW</p>
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


