import { useState } from 'react';
import { Link } from 'react-router-dom';

import { registerUser } from '../services/api';

const Signup = () => {
  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      password: '',
      inviteCode: '',
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data =
        await registerUser(formData);

      localStorage.setItem(
        'token',
        data.token
      );

      localStorage.setItem(
        'user',
        JSON.stringify(data.user)
      );

      alert('Signup Successful');

      window.location.href = '/dashboard';
    } catch (error: any) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          'Signup Failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-8">
        
        <h1 className="text-4xl font-bold mb-2">
          Join Fluxyn
        </h1>

        <p className="text-white/60 mb-8">
          AI website creation starts here.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none"
            required
          />

          <input
            type="text"
            name="inviteCode"
            placeholder="Invite Code"
            value={formData.inviteCode}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {loading
              ? 'Creating Account...'
              : 'Create Account'}
          </button>

          <p className="text-center text-white/60 pt-4 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-white hover:underline font-medium">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;