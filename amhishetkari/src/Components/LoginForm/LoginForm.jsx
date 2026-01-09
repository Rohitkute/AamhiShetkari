// import React, { useReducer, useState } from 'react';
// import './LoginForm.css';
// import { FaHouseUser,FaLock } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// export const LoginForm = () => {
//   const init={
//     username:"",
//     password:""
//   }
//   const reducer = (state,action)=>{
//     switch(action.type)
//     {
//       case 'update':
//         return {...state,[action.fld]:action.val}
//       case 'reset':
//         return init;
//     }
//   }
//   const [info,dispatch] = useReducer(reducer,init);
//   const [msg,setMSG] = useState("");
//   const navigate = useNavigate();

//   const sendData = (e) =>{
//     e.preventDefault();
//     const reqOptions={
//       method:"POST",
//       headers:{'content-type':'application/JSON'},
//       body:JSON.stringify(info)
//   }
//   fetch("http://localhost:8080/chkLogin",reqOptions)
//     .then(resp=>{
//             if(resp.ok)
//             {
//               console.log(resp.status)
//               return resp.json();
//             }
//             else
//             {
//               console.log(resp.status)  
//               throw new Error("Server Error");
//             }
//     })
//     .then(obj=>{
//       if(Object.keys(obj).length===0)
//       {
//         setMSG("Plese Check Username And Password");
//       }
//       else
//       {
//          if(obj.status===false)
//          {
//           alert("Request has been Approved");
//          }
//          else
//          {
//           if(obj.role_id.role_id===1)
//           {
//               navigate("/FHome");
//           }
//           else if(obj.role_id.role_id===2)
//           {
//             navigate("/Student_Home");
//           }
//           else if(obj.role_id.role_id===3)
//           {
//             navigate("/Professor_Home");
//           }
//          }
//       }
//     })
//     .catch((error)=>alert("server error.Try After Some Time"));
//   }
//   return (
//     <div className='wrapper'>
//         <form action=''>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input type="text" placeholder='Username' required />
//             <FaHouseUser className='icon'/>
//           </div>
//           <div className="input-box">
//             <input type="password" placeholder='password' required />
//             <FaLock className='icon' />
//           </div>
//           <div className="remember-forgot">
//             <label><input type="Checkbox"/>remember me </label>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <button type="submit">Login</button>
//           <div className="register-link">
//               <p>Don't have an account? <a href="/ragistration">Register</a></p>
//           </div>
//         </form>
//     </div>
//   );
// };
// export default LoginForm;

import React, { useReducer, useState } from 'react';
import './LoginForm.css';
import { FaHouseUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const init = {
    username: "",
    password: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'reset':
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMSG] = useState("");
  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(info)
    };

    fetch("http://localhost:8080/chkLogin", reqOptions)
      .then(resp => {
        if (resp.ok) {
          console.log(resp.status);
          return resp.json();
        } else {
          console.log(resp.status);
          throw new Error("Server Error");
        }
      })
  .then(obj=>{
    if(Object.keys(obj).length===0)
    {
      setMSG("Plese Check Username And Password");
    }
    else
    {
       if(obj.status===false)
       {
        alert("Request has been Approved");
       }
       else
       {
        if(obj.role_id.role_id===1)
        {
            navigate("/FHome");
        }
        else if(obj.role_id.role_id===2)
        {
          navigate("/Student_Home");
        }
        else if(obj.role_id.role_id===3)
        {
          navigate("/Professor_Home");
        }
       }
    }
  })
  .catch((error)=>alert("server error.Try After Some Time"));
};

  return (
    <div className='wrapper'>
      <form onSubmit={sendData}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={info.username}
            onChange={(e) => dispatch({ type: 'update', fld: 'username', val: e.target.value })}
          />
          <FaHouseUser className='icon' />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={info.password}
            onChange={(e) => dispatch({ type: 'update', fld: 'password', val: e.target.value })}
          />
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        {msg && <div className="error-message">{msg}</div>} {/* Show error message if available */}
        <div className="register-link">
          <p>Don't have an account? <a href="/registration">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
