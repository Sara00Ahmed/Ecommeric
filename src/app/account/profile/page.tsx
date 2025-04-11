"use client"; // مكون عميل بسبب الحالة والتفاعل

import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/app/services/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false); // لتتبع النجاح
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      console.log('Starting sign-up process...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user.uid);

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      console.log('Profile updated with displayName:', user.displayName);

      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date().toISOString(),
      });
      console.log('Data saved to Firestore');

      console.log('User signed up and data saved successfully');
      setSuccess(true); // تعيين حالة النجاح
      router.push('/account'); // توجيه تلقائي
      console.log('Redirecting to /account...');
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please sign in or use a different email.');
      } else {
        setError(err.message);
      }
      console.error('Sign-up error:', err.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full mx-auto">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">Sign Up</h2>
      {success ? (
        <div className="text-center">
          <p className="text-green-600 text-sm mb-4">Account created successfully!</p>
          <Link href="/account" className="text-teal-600 hover:underline">
            Go to Account
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
      )}
      {!success && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <Link href="/account/login" className="text-teal-600 hover:underline">
            Sign In
          </Link>
        </p>
      )}
    </div>
  );
}