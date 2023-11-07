import React, { useState } from 'react';

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
      alert('Login Successfully')
    } else {
      alert('Login Unsuccessful')
    }
  };

  const isSubmitDisabled = formData.username === '' || formData.password === '';

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-20 rounded shadow-md w-full max-w-md">
        {loginMessage && (
          <p className={loginMessage === 'Login Successfully'}>
            {loginMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border w-full p-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border w-full p-3"
            />
          </div>
          <div>
            <button
              type="submit"
              className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitDisabled}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
