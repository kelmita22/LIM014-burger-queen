const text = 'Hola Mundo';
const fruits =['manzana', 'banana', 'melon']

test('Debe ser una funcion',() => {
  expect(text).toMatch(/Hola Mundo/);
})

test('Tenemos una banana',() => {
  expect(fruits).toContain('banana');
})

test('verdadero',() => {
  expect(true).toBeTruthy();
})

const reverseString=(str,callback)=>{
  callback(str.split('').reverse().join(''))
}

test('Probar callback',() => {
  reverseString('Hola',(str)=>{
    expect(str).toBe('aloH');
  })

})

const reverseString2=str=>{
  return new Promise ((resolve,reject)=>{
    if (!str){
      reject(Error('Error '))
    }
    resolve(str.split('').reverse().join(''))
  });
};

test('Probar promesa',() => {
  return reverseString2('Hola').then(string=>{
    expect(string).toBe('aloH');
  })
})

test('prueba',() => {
    expect(true).toBe(true);
})


/* import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Cart from './components/Cart';

test('render content',() => {
  const cart = {
    content: 'This a test',
  }
  const component = render(<Cart cart={cart} />)
  console.log(component)
  }) */

  /* import {render,screen} from '@testing-library/react';
  import App from './routes/App';

  test('render content',() => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    } */



