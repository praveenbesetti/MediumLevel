import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigator = useNavigate();
  const [email, setEmail] = useState(null);
const [user, setUser] = useState(null);


  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    checkbox: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://fullstack-node-9cxr.onrender.com/api/users');
      const usersData = response.data;

      const usernameExists = usersData.some(user => user.username === formData.username);
      setUser(usernameExists);

      const emailExists = usersData.some(user => user.email === formData.email);
      setEmail(emailExists);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchData();
}, [formData.username, formData.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.username || !formData.email || formData.password.length < 6 || !formData.checkbox) {
  alert('Invalid form data');
     
    }

    try {//https://fullstack-node-9cxr.onrender.com
      const response = await axios.post('https://fullstack-node-9cxr.onrender.com/api/data', formData);
      const { id } = response.data;
      console.log('Inserted ID:', id);
      navigator(`/profile/${id}`);
    } catch (error) {
      console.error('Error:', error);
    }
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      checkbox: false
    });
  };

  return (
    <div className="flex flex-wrap scrollbar-hidden ">
      <div className='flex flex-wrap float-start lg:w-2/5 ' style={{height:'925px'}} >
        <img
          className=" lg:w-full lg:h-full w-full   top-0 left-0"
          src="/side1.jpeg"
          alt="Background"
        />
      </div>
      <div className="w-full lg:w-1/2 p-8 lg:ml-20 ">
        <div className="text-end ">
          <h4 className="text-base font-sans  text-end md:mt-">Already a member?<span className="text-blue-500 'cursor-pointer"> Sign In</span></h4>
        </div><br/>
        <div className=' lg:mt-10' >
          <h1 className="text-4xl md:text-7xl font-sans font-semibold mb-10 lg:mt-10 text-start  " >Sign in to Dribbble</h1>
        {user === true ? (
  <><span className='text-red-700 text-xl font-sans font-semibold'>Username already exists</span><br /></>
) : ''}
{email === true ? (
  <><span className='text-red-700 text-xl font-sans font-semibold'>Email already exists</span><br /><br /></>
) : ''}

          <form className={`form-container`} onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4  mb-4 md:mb-0 text-start">
                <label htmlFor="name" className="text-xl font-sans text-start">Name</label><br/>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full text-black h-12 rounded-lg border outline-none px-4  bg-gray-200" />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 text-start    ">
                <label htmlFor="username" className="text-xl font-sans text-start ">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full h-12 rounded-lg border outline-none px-4  ${user ? 'bg-red-300' : 'bg-gray-200'}`}
                />
              </div>
            </div> <br/>
            <div className="mb-4 text-start justify-center">
              <label htmlFor="email" className="text-xl font-sans text-start">Email</label><br/>
              <input type="email"
                id="email" name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full h-12 rounded-lg border outline-none px-4 mt-2 ${email ? 'bg-red-300' : 'bg-gray-200'}`} />
            </div><br/>
            <div className="mb-4  text-start lg:mt-5">
              <label htmlFor="password" className="text-xl font-sans text-start ">Password</label><br/>
              <input type="password" id="password" name="password" placeholder='+ 6' value={formData.password} onChange={handleChange} className="w-full h-12 rounded-lg border outline-none px-4 mt-2 bg-gray-200" />
            </div><br/>
            <div className="mb-4 flex flex-warp text-center  lg:ml-20">
              <input type="checkbox" id="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} className="h-5 w-5 cursor-pointer mt-1 text-green lg:ml-20" />
              <p className='text-gray-500 font-sans   lg:ml-7 '> Create an account means you're okay with our Terms of services<br /> <span className='text-blue-600 cursor-pointer'>privacy policy</span> , and our default notification settings</p>
            </div>
            <button
              type="submit"
              className={`bg-red-400 justify-center text-white font-bold py-2 px-4 rounded lg:mt-1 ${
                email || user ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
              style={{ width: '250px' }}
              disabled={email || user} // Disable the button if email or user is true
            >
              Submit
            </button>
            <p className='text-gray-500 font-sans mt-5'>This site is Protected by reCAPTCHA and the<br /> <span className='text-blue-600 cursor-pointer'>Google privacy</span> policy of service apply.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
