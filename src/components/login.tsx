import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
// Importing components
import PhoneField from '../components/PhoneField';
import AppButton from '../components/AppButton';
import FormInput from '../components/FormInput';

// Define interface for form data
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
    // Handle form submission
    console.log('Form submitted:', formData, 'Auto logout:', autoLogout);
  };

  return (
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
  <PhoneField
    value={phoneNumber}
    onChange={setPhoneNumber}
    defaultCountry="US"
    required
    label="Contact Phone"
    className="w-full" // This ensures the field takes full width of its container
  />
</div>        <div className="mb-6">
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