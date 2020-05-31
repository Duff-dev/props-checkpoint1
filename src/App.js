import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable';


function App() {

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
  return (
    <div className="App">
      <ProductTable products={products}/>
    </div>
  );
}




export default App;


