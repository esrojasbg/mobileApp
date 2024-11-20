import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialButtons } from '../components/SocialButtons';
import { AuthDivider } from '../components/AuthDivider';

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-white px-4 py-8 flex flex-col items-center">
      <h3 className="mt-8 font-normal text-[20px] text-[#BFBFBF]">
        Insightlancer
      </h3>

      <h1 className="mt-4 text-2xl font-bold text-black">
        Create Account
      </h1>
      <p className="mt-2 text-sm text-[#808080]">
        Join us and start your journey
      </p>

      <div className="w-full max-w-sm mt-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 px-3 rounded-lg border border-[#E0E0E0] text-sm focus:outline-none focus:ring-2 focus:ring-[#A25C38] focus:border-transparent"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-3 rounded-lg border border-[#E0E0E0] text-sm focus:outline-none focus:ring-2 focus:ring-[#A25C38] focus:border-transparent"
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-11 px-3 rounded-lg border border-[#E0E0E0] text-sm focus:outline-none focus:ring-2 focus:ring-[#A25C38] focus:border-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button className="w-full h-12 bg-[#A25C38] text-white font-bold text-base rounded-xl hover:bg-[#8B4E30] transition-colors">
          Create Account
        </button>

        <AuthDivider text="Or sign up with" />
        <SocialButtons />
      </div>

      <p className="mt-8 text-sm text-[#808080]">
        Already have an account?{' '}
        <Link to="/" className="font-medium text-[#A25C38] hover:text-[#8B4E30]">
          Sign In
        </Link>
      </p>
    </div>
  );
}