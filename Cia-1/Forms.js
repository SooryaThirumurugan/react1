// import React, { useState, useEffect } from 'react';
// import mm from './Login.module.css';

// function Dynamicform() {
//     const initValue={username:'',email:'',password:''};
//     const[formValues,setFormValues]=useState(initValue);
//     const[formErrors,setFormErrors]=useState({});
//     const[isSubmit,setisSubmit]=useState(false);
//     const handleChange = (event) =>{
//         const {id,value}= event.target;
//         setFormValues({...formValues,[id]:value})
//         console.log(formValues);
//     }
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         setFormErrors(validate(formValues));
//         setisSubmit(true);
//     }
//     const validate=(values)=>{
//        const error={};
//        const reg=new RegExp("[0-9]+")
//        const preg=new RegExp("[A-Z][A-Za-z0-9$_]+")
//        if(!values.username)
//           error.username = "Please Fill the column";
//         else if(values.username.length<5)
//           error.username ="UserName must be 5 letters";
//         else if(reg.test(values.username))
//              error.username = "Username must be in letters";
//         if(!values.email)
//           error.email="Invalid Email";
//         if(!values.password)
//           error.password="Please Fill the password";
//         // else if(values.password.length<8)
//         //   error.password="Password must be 8 letters";
//         else if(!preg.test(values.password))
//           error.password="Incorrect Format";
//         return error;
        
//     }

// return(
//     <>
//     <center>
//        <h1 className={mm.h1} > Dynamic Form </h1><br/>
//        <div className={mm.body}>
//        <form onChange={handleSubmit}>

//        <div className={mm.container}>



//        <div class='row'>
//         <label  className={mm.label}>Enter your username </label>
//         <input style={{border:"2px solid red"}} type="text" id="username" placeholder='your Username'
//                 value={formValues.username}
//                 onChange={handleChange}
//                 />
//             </div>
//             <br/>
//             <p style={{color:'Red'}}>{formErrors.username}</p>
//             <div className='row'>
//         <label className={mm.label}>Enter your email </label>
//         <input style={{border:"2px solid red"}}type="email" id="email" placeholder='Your Email'
//                 value={formValues.email}
//                 onChange={handleChange}
//                 />
//             </div>
//             <br/>
//             <p style={{color:'red'}}>{formErrors.email}</p>
//             <div className='row'>
//         <label className={mm.label}>Enter your password</label>
//         <input style={{border:"2px solid red"}} type="Password" id="password" placeholder='Your Password'
//                 value={formValues.password}
//                 onChange={handleChange}
//                 />
//             </div>
//             <p style={{color:'red'}}>{formErrors.password}</p>
            
//         </div>
//        </form>
//        </div>
//     </center>
    
//     </>
// )
// }
// export default Dynamicform;