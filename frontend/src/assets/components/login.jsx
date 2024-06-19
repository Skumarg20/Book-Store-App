// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Close modal after login

//   };

//   return (
//     <div className="">
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
          
//           <h3 className="font-bold text-lg">Login</h3>
//           <div className="mt-5 space-y-2">
//             <span>Email</span>
//             <br />
//             <input
//               type="text"
//               placeholder="Email"
//               className="rounded-lg w-80 px-3 outline-none h-7"
//               value={email}
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div className="mt-5 space-y-2">
//             <span>Password</span>
//             <br />
//             <input
//               type="text"
//               placeholder="password"
//               className="rounded-lg w-80 px-3 outline-none h-7"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <div className="flex justify-around mt-5">
//             <button className="btn btn-secondary w-auto" type="submit">Login</button>
//             <p className="mt-7">
//               Not registered? <Link to="/signup">Signup</Link>
//             </p>
//           </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form"
export default function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmailChange = (e) => setEmail(e.target.value);
  // const handlePasswordChange = (e) => setPassword(e.target.value);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   // Close modal after login
  //   document.getElementById("my_modal_3").close();
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const loginInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch('http://localhost:4001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Login success:', result);
        localStorage.setItem("User", JSON.stringify(result));
      } else {
        console.error('Login failed:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
                  {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
            />
                  {errors.password && <span>This field is required</span>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Login
            </button>

            <h1>if you do not have account !! {" "}
              <span><Link to='/signup'>SignUp</Link></span>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
