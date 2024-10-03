import { createContext, useState, useContext } from 'react';

// Criando o Contexto
const CartContext = createContext();

// Função para acessar o contexto de forma fácil
export function useCart() {
  return useContext(CartContext);
}

// Criando o Provider para envolver os componentes
export function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}
