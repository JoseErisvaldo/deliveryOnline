'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import Label from '@/components/ui/label/label';
import { useAuth } from '@/components/context/auth/auth';

export default function Auth() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('login');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div>
            <div className="text-2xl text-center">
              Bem-vindo ao DeliveryOnline
            </div>
            <div className="text-center">
              {activeTab === 'login'
                ? 'Faça login para continuar'
                : 'Crie sua conta para começar'}
            </div>
          </div>

          {/* Tabs de Login e Registro */}
          <div className="flex justify-between mb-4">
            <button
              className={`w-full py-2 text-center ${
                activeTab === 'login' ? 'border-b-2 border-black' : ''
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`w-full py-2 text-center ${
                activeTab === 'register' ? 'border-b-2 border-black' : ''
              }`}
              onClick={() => setActiveTab('register')}
            >
              Criar Conta
            </button>
          </div>

          {/* Formulário de Login */}
          {activeTab === 'login' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          )}

          {/* Formulário de Registro */}
          {activeTab === 'register' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-register">Email</Label>
                <Input
                  id="email-register"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-register">Senha</Label>
                <div className="relative">
                  <Input
                    id="password-register"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Criar conta
              </Button>
            </form>
          )}

          {/* Login via Redes Sociais */}
          <div className="flex flex-col space-y-4 mt-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                <Image
                  src="/placeholder.svg?height=24&width=24&text=G"
                  width={24}
                  height={24}
                  alt="Google logo"
                  className="mr-2"
                />
                Google
              </Button>
              <Button variant="outline">
                <Image
                  src="/placeholder.svg?height=24&width=24&text=F"
                  width={24}
                  height={24}
                  alt="Facebook logo"
                  className="mr-2"
                />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
