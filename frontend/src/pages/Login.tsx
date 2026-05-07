import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await loginUser(formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Login Successful');
      window.location.href = '/dashboard';
    } catch (error: any) {
      console.log(error);
      alert(error?.response?.data?.message || 'Login Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
        <p className="text-white/60 mb-8">Log in to Fluxyn</p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>

          <p className="text-center text-white/60 pt-4 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
