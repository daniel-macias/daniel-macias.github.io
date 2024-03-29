import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

import LogoSide from '../public/assets/logoSide.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!/^[\d()+-\s]*$/.test(formData.phone.trim())) {
      errors.phone = 'Invalid phone number format';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can proceed with submission
      document.getElementById('myForm').submit(); // Replace with your form ID
    } else {
      // Update state with validation errors
      setFormErrors(errors);
    }
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 lg:w-10/12 '>
        <p className='text-xl tracking-widest uppercase text-[#9f3e7d] font-semibold JosefinSansFont'>
          Contact
        </p>
        <h2 className='py-4 font-semibold JosefinSansFont'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300 p-20'
                  src={LogoSide}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 font-semibold JosefinSansFont'>Daniel Macías</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/daniel-mac%C3%ADas-reynaud-b4b69a152/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FontAwesomeIcon size="2x" icon={faLinkedin}/>
                    </div>
                  </a>
                  <a
                    href='https://github.com/daniel-macias'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FontAwesomeIcon size="2x" icon={faGithub} />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FontAwesomeIcon size="2x" icon={faEnvelope} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                id='myForm'
                action='https://getform.io/f/cfd58ef5-9f5e-44b5-9ee3-b49913eb5f8e'
                method='POST'
                encType='multipart/form-data'
                onSubmit={handleSubmit}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                        formErrors.name ? 'border-red-500' : ''
                      }`}
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && (
                      <span className='text-red-500'>{formErrors.name}</span>
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                        formErrors.phone ? 'border-red-500' : ''
                      }`}
                      type='text'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {formErrors.phone && (
                      <span className='text-red-500'>{formErrors.phone}</span>
                    )}
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      formErrors.email ? 'border-red-500' : ''
                    }`}
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && (
                    <span className='text-red-500'>{formErrors.email}</span>
                  )}
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      formErrors.subject ? 'border-red-500' : ''
                    }`}
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {formErrors.subject && (
                    <span className='text-red-500'>{formErrors.subject}</span>
                  )}
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className={`border-2 rounded-lg p-3 border-gray-300 ${
                      formErrors.message ? 'border-red-500' : ''
                    }`}
                    rows='10'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {formErrors.message && (
                    <span className='text-red-500'>{formErrors.message}</span>
                  )}
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 py-4 px-5 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FontAwesomeIcon icon={faAnglesUp} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
