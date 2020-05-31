import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


function ProductTable(props) {
  
  return (
    <Table className="table" striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Category</th>
                <th>Name</th> 
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {props.products.map(item => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
            ))}
        </tbody>
  </Table>   
  );
}

ProductTable.propTypes = {
  products: PropTypes.array,
}

export default ProductTable;
