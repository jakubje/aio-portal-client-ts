'use client';

import React from 'react';
import { CIcon } from '@coreui/icons-react';
import { cilUser } from '@coreui/icons';
import { User } from '../lib/definitions';

// This is a placeholder for the actual authentication state
const useAuth = () => {
  // Replace this with your actual auth logic later
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return { isLoggedIn, user, login, logout };
};

export default function UserSection() {
  const { isLoggedIn, user, login, logout } = useAuth();

  if (isLoggedIn && user) {
    return (
      <div className="p-4 border-b">
        <div className="flex items-center">
          <CIcon icon={cilUser} size="sm" className="mr-2" />
          <span className="font-medium">{user.name}</span>
        </div>
        <button onClick={logout} className="mt-2 text-sm text-blue-600 hover:underline">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 flex-shrink-0 bg-red-700">
      <button onClick={login} className="flex items-center text-blue-600 hover:underline">
        <CIcon icon={cilUser} size="sm" className="mr-2" />
        <span>Login</span>
      </button>
    </div>
  );
}
