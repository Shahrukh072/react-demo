import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor (){
    super();
    this.state = {
       products: [
        {
          Price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          Price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          Price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
       ]
    }
   // this.increaseQuantity = this.increaseQuantity.bind(this);
//    this.testing();
}
handleIncreaseQuantity = (product) => {
  console.log('Hey please inc the qty of ', product);
  const { products } =  this.state;
  const index = products.indexOf(product);

  products[index].qty += 1;

  this.setState({
    products: products
  })
}

handleDecreaseQuantity = (product) => {
  console.log('Hey please inc the qty of ', product);
  const { products } =  this.state;
  const index = products.indexOf(product);
  if(products[index].qty=== 0){
    return;
  }

  products[index].qty -= 1;

  this.setState({
    products
  })
}

handleDeleteProduct = (id) => {
  const {products} = this.state;

  const items = products.filter((item) => item.id !==id );  //[{}]
  this.setState({
    products: items
  })
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;
   products.forEach((product) => {
    count += product.qty;
   })
  return count;
}

getCartTotal =() => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.Price

  })
  return cartTotal;
}

  render() {
    const {products} = this.state;
  return (
    <div className="App"> 
    < Navbar count={this.getCartCount()} /> 
      < Cart 
       products = {products}
       onIncreaseQuantity = {this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onhandleDeleteProduct = {this.handleDeleteProduct}
       />
       <div style={{ padding:10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
    }
}

export default App;

