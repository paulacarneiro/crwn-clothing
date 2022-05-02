import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, ImageContainer, Quantity, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name}/>
      </ImageContainer>
      <span className='name'>{name}</span>
      <Quantity>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </Quantity>
      <span className='price'>{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

      {/* <button onClick={() => removeItemFromCart(cartItem)}>Decrement</button>
      <button onClick={() => addItemToCart(cartItem)}>Increment</button> */}
    </CheckoutItemContainer>
  )
}

export default CheckoutItem