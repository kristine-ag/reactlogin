import React, { useState } from 'react';
import Button from './Button'
import Input from './Input';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === 'root' && formData.password === 'root') {
      setLoginMessage('Login Successfully');
    } else {
      setLoginMessage('Login Unsuccessful');
    }
  };

  const isSubmitDisabled = formData.username === '' || formData.password === '';

  return (
    <div data-testid="app-container" className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-20 rounded shadow-md w-full max-w-md">
        {loginMessage && (
          <p className={loginMessage === 'Login Successfully' ? 'text-green-500' : 'text-red-500'}>
            {loginMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          {/* Use the Input component for username */}
          <Input
            label="Username"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {/* Use the Input component for password */}
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div>
            <Button
              type="submit"
              className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none ${
                isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitDisabled}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
