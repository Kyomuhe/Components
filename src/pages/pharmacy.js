import React, { useState } from 'react';
//importing images
import image1 from '../images/image1.PNG';
import image2 from '../images/image2.PNG';
import image3 from '../images/image3.PNG';
import image4 from '../images/image4.PNG';
import image5 from '../images/image5.PNG';
import image6 from '../images/image6.PNG';
import image7 from '../images/image7.PNG';
import image8 from '../images/image8.PNG';
import image9 from '../images/image9.PNG';
import image10 from '../images/image10.PNG';

import { FaGoogle } from 'react-icons/fa';
// Importing components
import AppButton from '../components/AppButton';
import FormInput from '../components/FormInput';
const Pharmacy = () => {
  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10
  ];
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [autoLogout, setAutoLogout] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData, 'Auto logout:', autoLogout);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          {/* Images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="rounded-2xl overflow-hidden h-32">
                  <img
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[3, 4, 5, 6].map((index) => (
                <div key={index} className="rounded-2xl overflow-hidden h-32">
                  <img
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[7, 8, 9].map((index) => (
                <div key={index} className="rounded-2xl overflow-hidden h-32">
                  <img
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-blue-600 text-2xl font-bold mb-4">Login, start better</h2>
          <p className="text-gray-600 mb-6">
            Welcome back, access the most trusted healthcare services at the comfort of your home or work
          </p>

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="Email Address"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <FormInput
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            
            <div className="mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={autoLogout}
                  onChange={() => setAutoLogout(!autoLogout)}
                />
                <span>Automatically log me out after 15 minutes of inactivity</span>
              </label>
            </div>

            {/* Sign in Button */}
            <AppButton
              type="submit"
              variant="primary"
              fullWidth
              className="mb-6"
            >
              Sign in
            </AppButton>

            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Sign in with Google */}
            <AppButton
              variant="outline"
              fullWidth
              className="mb-6"
              rightIcon={<FaGoogle />}
            >
              Sign in with Google
            </AppButton>

            {/* Footer Links */}
            <p className="text-center text-gray-600 mb-2">
              Forgot password? <a href="#" className="text-red-600">Reset it</a>
            </p>

            <p className="text-center text-gray-600">
              Already have an account? <a href="#" className="text-blue-600">Create Account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;