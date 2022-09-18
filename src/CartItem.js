import React from 'react';

const CartItem = (props) => {

        const {Price, title, qty} = props.product;
        const {
             product,
              onIncreaseQuantity, 
              onDecreaseQuantity, 
              onhandleDeleteProduct
             } = props;
        return (
            <div  className='cart-item'>
                <div className='left-block'>
                  <img style={styles.image}  src= {product.img} />  
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25 } }>{title}</div>
                    <div style={ {color: '#777' } }>Rs {Price}</div>
                    <div style={ {color: '#777' } }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                      {/* Buttons */}
                      <img
                       alt='increase' 
                       className='action-icons'
                       src= 'https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg' 
                       onClick={() => onIncreaseQuantity(product)}
                        />
                      <img
                       alt='decrease' className='action-icons'
                        src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg'
                        onClick={() => onDecreaseQuantity(product)}
                         />
                      <img 
                      alt='delete' className='action-icons'
                       src='https://t4.ftcdn.net/jpg/03/46/38/39/240_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg'
                       onClick={() => onhandleDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }


const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
}


export default CartItem;

