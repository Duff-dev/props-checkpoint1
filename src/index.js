import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductTable from './components/ProductTable';


 const products = [
    {
      category : 'Electronics',
      name : 'Laptop',
      price : 1500,
      id : 1,
    },
  
    {
      category : 'Clothes',
      name : 'Shirt',
      price : 15 ,
      id : 2,
    },
    {
      category : 'Electronics',
      name : 'Desktop',
      price : 1800,
      id : 3,
    },
  
    {
      category : 'Clothes',
      name : 'Skirt',
      price : 20 ,
      id : 4,
    },
    {
      category : 'Electronics',
      name : 'Mouse',
      price : 25,
      id : 5,
    },
  
    {
      category : 'Clothes',
      name : 'Hoddie',
      price : 40 ,
      id : 6,
    },
  ];


ReactDOM.render(
   
  <React.StrictMode>
     <ProductTable products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

