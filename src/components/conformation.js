import React, { useState,useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Navbody from './navbody';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './nav.css'
const Header = () => {
    const { id } = useParams();
    console.log(id);
    const [img, setimg] = useState(''); 
    let Links=["Inspiration",
'Find Work',
"Learn Design",
'Go Pro',
'Hire DEsigners',
    ];
         useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fullstack-node-9cxr.onrender.com/api/users/${id}`);
        setimg(response.data.imgurl);
        console.log(response.data); // Log the fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [id]);
  let [open, setOpen] = useState(false);
  console.log(img)

    return (
        <div>
       <div className='shadow-md w-full left-0 bg-slate-50 z-50 '>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7' id="zindex">
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
              <img src='/black.jpeg' className='w-100 h-0 text-blue-600 mt-7' style={{ width:'100px',height:'50px'}}/>
        </div>
        {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 '>
            {open ? <XMarkIcon/> : <Bars3BottomRightIcon  style={{zIndex:1}}/>}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 justify-center align-middle pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            {Links.map((link, index) => (
                <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href={link} className='text-gray-800 hover:text-blue-400 duration-500 text-lg'>{link}</a>
                </li>
            ))}
              <input type='text' style={{width:'130px',height:'50px',backgroundColor:'lightgray', marginLeft:'5px',borderRadius:'10px',padding:'10px', marginRight:'5px'}} className='hidden lg:block 'placeholder='Search'/><br/>
              <img src='/bag.jpeg' className='lg:w-10 lg:h-10  hidden  lg:block  mx-auto mt-2 ml-5 mr-5'/>
                        <img src={img} className='lg:w-10 lg:h-10 rounded-full hidden lg:block mx-auto lg:mt-5 mb-5'/>
            <button className='btn bg-pink-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static '>Up grade</button>
            </ul>
          </div>   
</div>
        <Navbody/>
</div>
    );
};

export default Header;