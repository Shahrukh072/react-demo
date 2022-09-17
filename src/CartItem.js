import React from 'react';

class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            Price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this', this.state);
    }
    render (){
        const {Price, title, qty} = this.state;
        return (
            <div  className='cart-item'>
                <div className='left-block'>
                  <img style={styles.image} />  
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25 } }>{title}</div>
                    <div style={ {color: '#777' } }>Rs {Price}</div>
                    <div style={ {color: '#777' } }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                      {/* Buttons */}
                      <img
                       alt='increase' className='action-icons'
                        src='https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg' 
                        onClick={this.increaseQuantity}
                        />
                      <img
                       alt='decrease' className='action-icons'
                        src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg'
                         />
                      <img 
                      alt='delete' className='action-icons'
                       src='https://t4.ftcdn.net/jpg/03/46/38/39/240_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg'
                        />
                    </div>
                </div>
            </div>
        );
    }
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