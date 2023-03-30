import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css'

const Signup = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [error,setError] = useState("")

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
try {
    const url= "http://localhost:8080/api/auth";
    const {data:res} = await axios.post(url,data); 
    localStorage.setItem("token",res.data)
    window.location="/"
    console.log(res.messege)
    alert(res.messege)
} catch (error) {
    if(error.response && error.response.status >= 400&& error.response.status <= 500 ){
setError(error.response.data.messege)
    }
}
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left} >
                   
                <form  onSubmit={handleSubmit} className={styles.form_container}>
                        <h1>Login To your Account</h1>
                    
                        <input
                            className={styles.input}
                            onChange={handleChange}
                            type="email"
                            placeholder='Email Address'
                            name='email'
                            required
                            value={data.email} />
                        <input
                            className={styles.input}
                            onChange={handleChange}
                            type="password"
                            placeholder='password'
                            name='password'
                            required
                            value={data.password} />
                            {error&& <div className={styles.error_msg}>{error}</div>}
                            <button type='submit'className={styles.green_btn}>Sign in</button>
                    </form>
                </div>
                <div className={styles.right} >
                <h1>New Here ?</h1>
                    <Link to='/signup'>
                        <button type='button' className={styles.white_btn}>Sign Up</button>
                    </Link>

                </div>
            </div>
        </div>
    )
};
export default Signup;