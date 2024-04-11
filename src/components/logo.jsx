import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate directly

const Logo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [loc, setLoc] = useState('');
  const [status, setStatus] = useState(false);

  const handleChange = async(e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
   

    if (!selectedImage) {
      console.log('Please upload an image');
      return;
    }

    const data = new FormData();
    data.append('file', selectedImage);
    data.append('upload_preset', 'mycloud');
    data.append('cloud_name', 'dsz4qeze5');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dbyoondqs/image/upload', {
        method: 'POST',
        body: data,
      });
      const cloudData = await res.json();
      ////console.log('Cloudinary Response:', cloudData);
      if (cloudData.url) {
        setUrl(cloudData.url);
         console.log('Image URL:', cloudData.url);
        console.log(url);
        if (loc != '') {
          try {
            const response = await axios.post('https://fullstack-node-9cxr.onrender.com/api/update-url', {
              id: id,
              url: cloudData.url,
              location: loc,
            });
            console.log('Update URL response:', response.data);
          } catch (error) {
            console.error('Error updating URL:', error);
          }
        }
      } else {
        console.error('Cloudinary response does not contain URL:', cloudData);
      }
    } catch (error) {
      console.error('Error uploading image or updating URL:', error);
    }
  };

  const postUrl = () => {
    
   
    if(loc!='')
      navigate(`/conformation/${id}`);
    else {
      alert('please enter location');
    }
  };

  return (
    <div className='md:mx-5'>
      <div style={{ display: 'flex' }}>
      <img src="/drib.jpeg" style={{ width: '200px', height: '200px', marginLeft: '20px' }} alt="Logo" />

      </div>
      <div className='w-full md:w-1/2 mx-auto lg:mt-[-20]'>
        <h1 className='text-5xl font-semibold text-start ml-3 lg:ml-10'>Welcome! Let's create your profile</h1><br />
        <h2 className='text-xl font-sans text-gray-500 text-start mx-3 lg:ml-10'>Let others get to know you better! You can do these later</h2><br />
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-sans font-semibold lg:text-start lg:ml-20">Add an avatar</h1><br />
          <div className='flex flex-wrap border-none justify-center sm:justify-center'>
            <div className=' justify-start lg:mr-20  lg:flex lg:flex-wrap '>
              <div>
            <img src={image ? URL.createObjectURL(image) : ''} className="w-48 h-48 border-2 border-dashed border-gray-300 rounded-full mt-4 md:justify-center flex md:ml-20 mx-auto"  />
             </div> <br/>
              
              <div className='lg:ml-10 md:justify-center '>
              <div className="relative h-10 bg-whtie lg:ml-5 lg:mt-10  mx-auto md:mr-10 flex justify-center mt-20" style={{ width: '200px', border: '2px dashed gray', cursor: 'pointer' }}>
                <h1 className='font-sans text-xl text-gray-500 p-1 text-center '>Choose image</h1>
              </div><br />
                <p className='text-l text-gray-500 font-sans mx-5'> Or Let others get to know you better! you can do these later</p></div><br />
              <div className='md:justify-center text-center flex md:ml-10'>
              <h2 className='text-3xl font-sans text-start text-bold lg:ml-10 mt-10 mx-auto'>Add your location </h2><br />
              </div>
                <input
                  type="file"
                  onChange={(e) => handleChange(e)}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
              
              <br />
              
            </div><br />
          </div>
        </div>
       <input
  type='text'
  placeholder='Enter a location'
  onChange={(e) => setLoc(e.target.value)}
  className='border-b-2 border-gray-500 focus:border-gray-500 outline-none text-left lg:w-full w-1/2 text-2xl lg:ml-10 font-sans'
        /> <br /><br />
        <div className='flex lg:justify-start justify-center lg:ml-20'>
        <button onClick={() => postUrl()} style={{ width: '200px', height: '50px', backgroundColor: 'rgb(255, 94, 120)', fontFamily: 'sans-serif', fontSize: '22px', color: 'white', marginBottom: '20px', borderRadius: '5px', alignItems:'flex-start' }}>Next</button>
         </div>
        </div>
    </div>
  )
}

export default Logo;
