import React, { useState } from 'react'
import {Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import Button from '@/components/ui/button/button'


export default function SideCart() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pizza Margherita", price: 39.90, quantity: 1 },
    { id: 2, name: "Refrigerante", price: 5.90, quantity: 2 },
  ])

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <div>
      <div >
        <Button onClick={() => setCartOpen(!cartOpen)} size="lg" className="fixed bottom-4 right-4 rounded-full shadow-lg">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Ver carrinho ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </Button>
      </div>
      {cartOpen && 
        <div className=' w-96 fixed h-screen right-0 z-50 rounded-l-3xl text-white bg-slate-600 p-5'>
          <div >
        <Button onClick={() => setCartOpen(!cartOpen)} size="lg" className="">
        <X />   
        </Button>
      </div>
        <div className="w-full sm:max-w-md flex flex-col">
          <div>
            <div>Seu Carrinho</div>
          </div>
          <div className="flex-grow">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-4">Seu carrinho está vazio</p>
            ) : (
              <div className="space-y-4 pr-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-4">
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-auto pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total do pedido:</span>
              <span className="font-bold">R$ {calculateTotal().toFixed(2)}</span>
            </div>
            <Button className="w-full" disabled={cartItems.length === 0}>
              Finalizar Pedido
            </Button>
          </div>
        </div>
      </div>
      }
      
    </div>
    
  )
}