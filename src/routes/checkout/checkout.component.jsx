import './checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Checkout Page</h2>
            <div>
                {
                    cartItems.map( cartItem => {
                        const {id, name, quantity} = cartItem;

                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span onClick={() => addItemToCart(cartItem)}>+</span>
                                <br/>
                                <span>{quantity}</span>
                                <br/>
                                <span onClick={() => removeItemToCart(cartItem)}>-</span>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default Checkout;