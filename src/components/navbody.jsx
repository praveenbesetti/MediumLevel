import React from 'react'
import './nav.css'
export default function Navbody() {
   
  const data = [
    { t1: 'Go Pro!', t2: 'Post a job opening', t3: 'About', t4: 'Design jobs', t5: 'Freelancing' },
    { t1: 'Explore design work', t2: 'Post a freelance project', t3: 'Careers', t4: 'Designers for hire', t5: 'Design hiring' },
    { t1: 'Design blog', t2: 'Search for designers', t3: 'Support', t4: 'Freelance designer for hire', t5: 'Design Portfolio' },
    { t1: 'Overtime podcast', t2: 'Brands', t3: 'Testimonials', t4: 'Tags', t5: 'Design Education' },
    { t1: 'playoffs', t2: 'Advertise with us', t3: 'API', t4: 'Places', t5: 'Creative Process' },
    { t1: 'weekly Warm-Up', t2: '', t3: 'Terms of service', t4: 'Design assets', t5: 'Design Industry Trends' },
    { t1: 'Refer a Friend', t2: '', t3: 'Privacy policy', t4: 'Dribbble Marketplace', t5: '' },
    { t1: 'Code of conduct', t2: '', t3: 'Cooking policy', t4: 'Creative Market', t5: '' },
    { t1: '', t2: '', t3: '', t4: 'Fontspring', t5: '' },
    { t1: '', t2: '', t3: '', t4: 'Font Squirrel', t5: '' },
    

  ];

  return (
    <div>
     <div class="flex justify-center">
    <div class="mt-300 text-center">
        <h1 class="text-5xl font-sans mt-20">Please verify your email</h1>
        <img src="/email.jpeg" class="w-250 h-100 mx-auto" alt="Email Image"style={{width:'250px',height:'200px'}} /><br/>
        <h1 className='text-l text-gray-500 p-2 font-semibold'>Please verify your email address. We've sent a confirmation email to:</h1>
        <h2 className='text-xl text-black font-semibold p-2'>account@refero.dessign</h2>
        <p className='text-l text-gray-500 p-2 font-semibold'>Click the confirmation link in that email to begin using Dribbble.<br />
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If<br />
            you still don't see it, you can <span className='text-pink-600'>resend the confirmation email.</span><br />
            Wrong email address?<span className='text-pink-600'>Change</span> </p>
      </div><br/>
      
      </div><br/>
      <div className='flex flex-wrap justify-center top-0 bg-gray-200'>
        <div className='bg-gray-200' >
          <img src='/drib.jpeg' style={{ width: '150px', height:'130px', mixBlendMode:'multiply' }} />
          <h1 className='text-xl  text-gray-800 font-sans font-semibold text-start '>Dribbble is the world's leading<br />
            community for creatives to share, grow<br/>
            and get hired</h1>
           <div class="w-full md:w-4/5 h-12 flex justify-center md:justify-start items-center mt-5">
        <img src="/Twitter.png" class="w-10 h-10 md:w-12 md:h-12" alt="Twitter" />
        <img src="/Facebook F.png" class="w-10 h-10 md:w-10 md:h-10 ml-5" alt="Facebook" />
        <img src="/Instagram.png" class="w-10 h-10 md:w-10 md:h-10 ml-5" alt="Instagram" />
        <img src="/LinkedIn 2.png" class="w-10 h-10 md:w-10 md:h-10 ml-5" alt="LinkedIn" />
        <img src="/YouTube.png" class="w-10 h-10 md:w-10 md:h-10 ml-5" alt="YouTube" />
    </div>
        </div>
       <div style={{ overflowY: 'auto' }}>
    <table>
        <thead>
            <tr>
                <th>For designers</th>
                <th>Hire designers</th>
                <th>Company</th>
                <th>Directories</th>
                <th>Design Resources</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.t1}</td>
                    <td>{item.t2}</td>
                    <td>{item.t3}</td>
                    <td>{item.t4}</td>
                    <td>{item.t5}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
      </div>
</div>
  )
}
