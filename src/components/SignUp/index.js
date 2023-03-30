import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.css'

const Signup = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [error,setError] = useState("")
const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
try {
    const url= "http://localhost:8080/api/users";
    const {data:res} = await axios.post(url,data); 
    navigate("/login")
    console.log(res.messege)
} catch (error) {
    alert(error)
    if(error.response && error.response.status >= 400&& error.response.status <= 500 ){
setError(error.response.data.messege)
console.log(error.response.data.messege)
    }
}
    }

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left} >
                    <h1>Welcome </h1>
                    <Link to='/login'>
                        <button type='button' className={styles.white_btn}>Sign In</button>
                    </Link>
                </div>
                <div className={styles.right} >
                    <form  onSubmit={handleSubmit} className={styles.form_container}>
                        <h1>Create Account</h1>
                        <input
                            className={styles.input}
                            onChange={handleChange}
                            type="text"
                            placeholder='First Name'
                            name='firstName'
                            required
                            value={data.firstName} />
                        <input
                            className={styles.input}
                            onChange={handleChange}
                            type="text"
                            placeholder='Last Name'
                            name='lastName'
                            required
                            value={data.lastName} />
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
                            {error&& <div className={styles.error_msg}>{error}</div> }
                            <button type='submit'className={styles.green_btn}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Signup;