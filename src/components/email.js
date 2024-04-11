import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser'; // Import emailjs-com package
import './email.css'
import { useNavigate } from 'react-router-dom';
export default function Email() {
  const data = [
    { img: '/img3.jpeg', desc: 'I,m a designer looking to share my work', content: 'With over 7 million shots from a vast community of designers, Dribbble the leading source for design inspiration', status: false },
    { img: '/img2.jpeg', desc: 'I,m a designer looking to share my work', content: 'With over 7 million shots from a vast community of designers, Dribbble the leading source for design inspiration', status: false },
    { img: '/img1.jpeg', desc: 'I,m a designer looking to share my work', content: 'With over 7 million shots from a vast community of designers, Dribbble the leading source for design inspiration', status: false }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
   
  const navigator = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
  const response = await axios.get(`https://fullstack-node-9cxr.onrender.com/api/users/${id}`);
  setUserData(response.data);
  console.log(response.data); // Log the fetched user data
} catch (error) {
  console.error('Error fetching user data:', error);
}

    };

    fetchData();
  }, [id]);

  const handleCheckboxChange = (index) => {
    setSelectedOption(index);
  };

  const submit =async () => {
   
   
    
    emailjs.send('service_tiz9lpc', 'template_qck1jzk', userData, '3hrH0qH3xLUgUaS8f')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);

           navigator(`/success/${id}`)
         
        },
        (error) => {
          console.error('Error sending email:', error.text);
          // Optionally, you can add logic here to show an error message to the user
        }
      );
  };

  return (
    <div>
      <div className='flex flex-wrap'>
        <img src="/drib.jpeg" style={{ width: '200px', height: '200px', marginLeft: '20px', marginTop: '-50px' }} />
        <button className=' ml-10 w-6 h-8 mt-10 bg-gray-200 border-radius-5'onClick={()=>navigator(`/profile/${id}`)}>></button>
        </div>
      <h1 className='text-3xl font-sans font-semibold'>What brings you to Dribbble?</h1><br />
      <h1 className='text-l font-sans font-semibold text-gray-500'>Select the options that describe you Don't worry, you can explore other options later.</h1><br /><br /><br /><br />
      <div className='flex flex-wrap justify-around'>
        {data.map((item, index) => (
          <div key={index} className={` w-full mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 lg:mt-0 mt-40 ${selectedOption === index ? 'container2' : 'container'}`}>
            <div className='relative'>
              <img
  src={item.img}
  alt={`Image ${index + 1}`}
  className={`w-4/5 mx-auto  ${selectedOption === index ? 'img1' : 'img'}`}
/>

            </div>
            <br />
            <h2 className='text-center py-5 font-sans text-xl font-semibold'>{item.desc}</h2>
            <div className={selectedOption === index ? 'text1' : 'text'}>
              <h3 className='h-20 font-sans text-l font-semibold'>
                {item.content}
              </h3>
              <input type='checkbox' checked={selectedOption === index} onChange={() => handleCheckboxChange(index)} className='w-5 h-5 border-radius-10' style={{ borderRadius: '10px', backgroundColor: 'pink' }} />
            </div>
          </div>
        ))}
      </div><br/><br/>
            <h1 className='text-xl font-sans font-semibold'> Anything else? You can select multiple</h1>
      <button type="submit" className='w-40 h-10 bg-pink-600 text-white font-sans text-xl rounded-lg shadow-md mt-5' onClick={() => submit()}
        disabled={selectedOption === null}>Finish</button>
      <h1 className='text-l font-sans text-gray-500 font-semibold'>or  Press RETURN</h1>
      
    </div>
  );
}

