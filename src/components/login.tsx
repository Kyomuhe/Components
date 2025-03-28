import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import PhoneField from '../components/PhoneField';
import AppButton from '../components/AppButton';
import FormInput from '../components/FormInput';
import Input from './Input';


interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  
  const [autoLogout, setAutoLogout] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Auto logout:', autoLogout);
  };

  return (
    <div className="w-full font-gt-walsheim">
      <h2 className="text-blue-500 text-2xl font-semibold mb-4">Login, start better</h2>
      <p className="text-grey mb-6">
        Welcome back, access the most trusted healthcare services at the comfort of your home or work
      </p>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
      <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        
        <div className="mb-6">
          <PhoneField
            value={phoneNumber}
            onChange={setPhoneNumber}
            defaultCountry="US"
            required
            label="Contact Phone"
            className="w-full" 
          />
        </div>
        
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={autoLogout}
              onChange={() => setAutoLogout(!autoLogout)}
            />
            <span className ='text-grey'>Automatically log me out after 15 minutes of inactivity</span>
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

        <p className="text-center text-gray-600 mb-2">
          Forgot password? <a href="#" className="text-red-600">Reset it</a>
        </p>

        <p className="text-center text-gray-600">
          Already have an account? <a href="#" className="text-blue-600">Create Account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;