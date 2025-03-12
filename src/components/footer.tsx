import React, { FC, useState } from 'react';
//importing icons form lucid react
import { Twitter, Facebook, Instagram, Linkedin, MailOpen, Play } from 'lucide-react';
import AppButton from './AppButton';
import FormInput from '../components/FormInput';


interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-custom-blue text-white">
      {/* Subscription Section */}
      <div className="bg-blue-200 p-8 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-x-7">
          <MailOpen size={50} />
          <div className="flex-grow">
            <h3 className="text-black text-xl font-bold mb-2">Choose Wisely, Subscribe Now</h3>
            <p className="text-gray-600">Be aware of upcoming sales and events. Receive gifts and special offers.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
         <div className="w-full md:w-auto flex">
          <FormInput
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-l-lg rounded-r-none border-r-0 h-12 focus:ring-0 focus:border-gray-300"
          />
          <AppButton
          variant="primary"
          className="rounded-l-none rounded-r-lg whitespace-nowrap h-12"
          onClick={() => {}}
          leftIcon={null}
          rightIcon={null}
          style={{
            marginLeft: '-1px',
            }}
           >
            Subscribe
          </AppButton>
          </div>
        </div>
      </div>
    </div>
      
      {/* Main Footer Content */}
      <div className="p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Ncare */}
            <div className="text-white">
              <h3 className="font-bold text-lg mb-4">NORTHCARE</h3>
              <p className="mb-4">Your Trusted Heath Partner -Providing expert-verified information, reliable health care services, and seamless
                support to empower your wellness journey anytime, anywhere, with care you can trust.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800">
                  <Twitter size={20} />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800">
                  <Facebook size={24} className="text-blue-500" />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800">
                  <Instagram size={24} />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-800">
                  <Linkedin size={24} />
                </a>
                {/* used a custom icon because the tik tok icon is not available in lucid */}
                <a href="#" className="flex items-center justify-center w-12 h-10 rounded-full bg-black text-white hover:bg-gray-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Know Us */}
            <div>
              <h3 className="font-bold text-lg mb-4">Know Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Partnership</a></li>
                <li><a href="#" className="hover:text-gray-300">Pharmacies</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-gray-300">Return Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Corporate Governance</a></li>
                <li><a href="#" className="hover:text-gray-300">Editorial Policy</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Online Pharmacy</a></li>
                <li><a href="#" className="hover:text-gray-300">Book Lab Tests</a></li>
                <li><a href="#" className="hover:text-gray-300">Health Wallet</a></li>
                <li><a href="#" className="hover:text-gray-300">Homecare</a></li>
                <li><a href="#" className="hover:text-gray-300">Buy Now Pay Later</a></li>
                <li><a href="#" className="hover:text-gray-300">Appointments</a></li>
                <li><a href="#" className="hover:text-gray-300">E-Health Records (EHR)</a></li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h3 className="font-bold text-lg mb-4">Download App</h3>
              <div className='space-y-4'>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-gray-300">Submit Feedback</a></li>
                  <li><a href="#" className="hover:text-gray-300">Newsletter Signup</a></li>
                </ul>
                {/* used a custom icon because the apple icon is not available in the lucid react icons*/}
                <button className="bg-white text-black py-2 px-4 rounded-full flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="none">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.4-1.09-.41-2.09-.43-3.23 0-1.44.56-2.45.38-3.34-.41-2.02-1.79-3.55-6.34-1.48-10.23 1.03-1.88 2.68-2.97 4.5-3.01 1.41-.07 2.67.8 3.5.84 1.14.05 2.31-.88 3.94-.75 1.51.14 2.8.93 3.64 2.25-3.13 1.7-2.63 6.12.4 7.37-.87 1.83-2 3.63-3.85 3.54zM12.03 7.34c-.24-1.9 1.48-3.58 3.18-3.81.27 2.29-1.49 3.8-3.18 3.81z"/>
                  </svg>
                  <span>Download on the App Store</span>
                </button>
                <button className="bg-white text-black py-2 px-4 rounded-full flex items-center justify-center space-x-2">
                  <Play size={24} />
                  <span>Get it on Google Play</span>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white my-6"></div>

          <div className="text-center">
            <p>© 2024 Ncare. All rights reserved. Medicines are dispensed in compliance with the Drugs and Cosmetics Act.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;