import supabase from '@/pages/api/supabase';
import { useRouter } from 'next/router';
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  async function login(email, password) {
    console.log({ email, password });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        router.push('/');
      }
      setUser(data.user);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  }

  async function signUp(email, password, name) {
    console.log({ email, password, name });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
        },
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        router.push('/');
      }
      setUser(data.user);
    } catch (error) {
      console.error('Error during sign up:', error.message);
    }
  }

  async function logout() {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
