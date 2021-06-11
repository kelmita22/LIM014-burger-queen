import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Products from './Products';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import db from '../firebase/config'

const Cart = ({ cart, setCart }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const [name, setName] = useState();

  const deleteListProduct = (id) => {
    const existProducts = cart.find((product) => product.id === id);
    if (existProducts.quantity === 1) {
      setCart(cart.filter((product) => product.id !== id));
    } else {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...existProducts, quantity: existProducts.quantity - 1 } : product
        )
      );
    }
  }

  const sendOrder = (evt) => {
    evt.preventDefault()
    let order = {};
    order.name = name || 'sinNombre';
    order.products = cart;
    order.created_at = new Date()
    order.status = 'pending'

    db.collection('orders').add(order)
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <section>
      <h1 className='order'>Orden</h1>
      <form type='submit' action="">
        <span>Cliente:</span>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <table className='table'>
          <thead className="rowgroup">
            <tr className="row">
              <th className="columnheader">Cantidad</th>
              <th className="columnheader">Producto</th>
              <th className="columnheader">Precio</th>
              <th className="columnheader">Eliminar</th>
            </tr>
          </thead>
          {cart.length === 0 ? (<td>Cart Is Empty</td>) : (cart.map((product =>
            <tbody className="rowgroup">
              <tr className="row">
                <td className="cell"> {product.quantity} </td>
                <td className="cell">
                  <Products
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                  />
                </td>
                <td className="cell"> ${product.price}</td>
                <td className="cell">
                  <FontAwesomeIcon icon={faTrash} onClick={() => deleteListProduct(product.id)} />
                </td>
              </tr>
            </tbody>
          )))}
        </table>
        <hr></hr>
        <div className='result'>
          <div colspan="2"><strong>Total</strong> </div>
          <div > <strong>${parseFloat(itemsPrice).toFixed(2)}</strong> </div>
        </div>
        <hr></hr>
        <button className='btnCancel'>Cancelar</button>
        <button onClick={sendOrder} className='btnSend'>Enviar</button>
      </form>
    </section>

  )
};

export default Cart;
