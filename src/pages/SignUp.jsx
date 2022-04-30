import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg"
import { Link , useNavigate} from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { db} from '../firebase.config'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { useState } from "react"

function SignUp() {
  const [ showPassword , setShowPassword] = useState(false)
  const [ formData , setFormData]=useState({
    name:'',
    email:'',
    password:''
  })
  const { name , email , password} = formData

  const navigate = useNavigate()
  const onchange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
   
      
    }))
    
  }


  const onsubmit =async (e)=>{
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredentinal= await createUserWithEmailAndPassword(auth,email,password)
      const user= userCredentinal.user
      updateProfile(auth.currentUser,{
        displayName:name
      })
      navigate('/')
    } catch (error) {
      alert("this exist")
    }
  }
  return (
    <>
        <div className="pageContainer">
          <header>
            <p className="pageHeader">
            welcome back! 
            </p>
          </header>
          <main>
            <form  onSubmit={onsubmit}>
              <input type="text" className="nameInput"  placeholder="Name" id="name" value={name} onChange={onchange}/>
              <input type="email" className="emailInput"  placeholder="Email" id="email" value={email} onChange={onchange}/>
              <div className="passwordInputDiv">
                <input type={showPassword ? "text" : "password" }  className=" passwordInput" placeholder="Password" value={password} id="password" onChange={onchange}/>
                <img src={visibilityIcon} alt="show password" className="showPassword" onClick={()=> setShowPassword(!showPassword)} />
              </div>
              <Link to='/forget-password' className="forgotPasswordLink"> forgot password</Link>
              <div className="signUpBar">
                <p className="signUpText">
                  sign up
                </p>
                <button className="signUpButton">
                  <ArrowRightIcon fill="#ffffff" width='34px' height='34px'/> 
                </button>
              </div>
            </form>
            <Link to='/signin' className="registerLink">sign in instead </Link>
          </main>
        </div>
        </>
  )
}

export default SignUp