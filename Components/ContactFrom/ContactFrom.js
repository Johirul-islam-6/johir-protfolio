import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import './Contact.css';
export const ContactFrom = () => {
  return (
    <>

<div class="container py-5 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section class="mb-32">
    <div class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
    <div class="container px-6 md:px-12">
        
      <div
        class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
      <h1 className='text-[#e9e8e8] text-2xl md:text-[45px] text-center font animation_p uppercase z-[10000] pb-7'>Contact</h1>
       
       
        <div class="contact-container-box flex gap-10 ">
          
          <div class="flex justify-start  items-start w-[40%] icon-contact">
            <div class="socal-icon block">
             
                
                <div class="md:flex items-center justify-start">
                 <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                       <FaEnvelope className='text-[25px]'/>
                    </div>
                  </div>
                  <div class="flex ">
                    <p class="mb-2  dark:text-white contact-text">
                      Email : johirulislam574206@gmail.com
                    </p>
                  </div>
                </div>
                <div class="md:flex items-center justify-start fb">
                 <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                       <FaFacebook className='text-[25px]'/>
                    </div>
                  </div>
                  <div class="flex ">
                    <p class="mb-2  dark:text-white contact-text">
                      Facbook : /rasel2023boss
                    </p>
                  </div>
                </div>
                <div class="md:flex items-center justify-start">
                 <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <FaGithub className='text-[25px]'/>
                    </div>
                  </div>
                  <div class="flex ">
                    <p class="mb-2  dark:text-white contact-text">
                      gitHub : johirul-islam-6
                    </p>
                  </div>
                </div>
                <div class="md:flex items-center justify-start">
                 <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                     <FaLinkedin className='text-[25px]'/>
                    </div>
                  </div>
                  <div class="flex ">
                    
                    <p class="mb-2  dark:text-white contact-text">
                      Linkind : /johirul-islam99
                    </p>
                  </div>
                </div>
                <div class="md:flex items-center justify-start tw">
                 <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaTwitter className='text-[25px]'/>
                    </div>
                  </div>
                  <div class="flex ">
                    <p class="mb-2  dark:text-white contact-text">
                      Twitter : /rasel2023
                    </p>
                  </div>
                </div>
                <div class="md:flex items-center justify-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <FaPhoneAlt className='text-[25px]'/>
                    </div>
                  </div>
                  <div class="flex ">
                    <p class="mb-2  dark:text-white contact-text">
                      Phone : +880 1824842336
                    </p>
                  </div>
                </div>

             
            
            </div>
          </div>

          {/* ----- frome ----- */}
          <div class="mb-12 w-full s md:px-3 lg:mb-0 2 lg:px-6">
            <form action="https://getform.io/f/346003ba-86ef-4b17-9fc1-6ebd93a3af1a" method="POST">
              <div className="relative">
                  <label for="name" className="leading-7 text-sm text-[#ffff]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#10121A] rounded border border-gray-100 focus:border-indigo-500 text-base outline-none text-[#fff] py-[6px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                 required />
                </div>
              <div className="relative my-2">
                  <label for="emil" className="leading-7 text-sm text-[#ffff]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#10121A] rounded border border-gray-100 focus:border-indigo-500 text-base outline-none text-[#fff] py-[6px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required />
                </div>
               <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-[#ffff]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-[#10121A] rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-[#fff] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                 required ></textarea>
                </div>
              <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                
                <label class="inline-block text-[16px] pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                  24 Houre reply to your message.
                </label>
              </div>
              <button type="submit" data-te-ripple-init data-te-ripple-color="light"
                class="mb-6 font-[600] inline-block w-full rounded bg-primary px-6 pt-2.5 py-3 text-[14px] md:text-[18px] pb-2  uppercase leading-normal hover:text-white text-[#c6c5c5] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>

</>
  )
}
