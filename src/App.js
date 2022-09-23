import React from 'react';
//import''./App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import { db } from "./index";


class App extends React.Component {

  constructor (){
    super();
    this.state = {
       products: []  
    }
}

componentDidMount () {
  db
   .firestore()
   .collection('products')
   .get()
   .then((snapshot) => {
    console.log(snapshot);
   })
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
  products.map((product) => {
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

