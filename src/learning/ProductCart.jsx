import React, { useState } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Laptop',
    price: 75000,
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 1200,
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 2500,
  },
  {
    id: 4,
    name: 'Headphones',
    price: 3500,
  },
];

const DISCOUNT_CODES = {
  SAVE10: 10,
  SAVE20: 20,
};

function ProductCart() {
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');

  // =========================================================
  // TODO 1: Add a product to the cart
  // If the product already exists, increase its quantity.
  // Otherwise add it with quantity = 1.
  // =========================================================
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        // If the product already exists, map over the array and increase its quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, append the new product with a starting quantity of 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // =========================================================
  // TODO 2: Increase the quantity of a cart item
  // =========================================================
  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // =========================================================
  // TODO 3: Decrease the quantity of a cart item
  // If quantity becomes 0, remove the item.
  // =========================================================
  const decreaseQuantity = (productId) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      // Removes item if quantity drops to 0
    );
  };

  // =========================================================
  // TODO 4: Remove an item completely from the cart
  // =========================================================
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  // =========================================================
  // TODO 5: Calculate subtotal
  // subtotal = sum(price * quantity)
  // =========================================================
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // =========================================================
  // TODO 6: Apply discount code
  // SAVE10 -> 10% discount
  // SAVE20 -> 20% discount
  // Invalid code should display an appropriate message.
  // =========================================================
  const applyDiscount = () => {
    const code = discountCode.toUpperCase().trim();
    // Make it case-insensitive
    if (DISCOUNT_CODES[code]) {
      setDiscount(DISCOUNT_CODES[code]);
      setMessage(`Success: ${DISCOUNT_CODES[code]}% discount applied!`);
    } else {
      setDiscount(0);
      setMessage('Invalid discount code.');
    }
  };

  // =========================================================
  // TODO 7: Calculate discount amount
  // =========================================================
  const calculateDiscountAmount = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * discount) / 100;
  };

  // =========================================================
  // TODO 8: Calculate final total
  // final total = subtotal - discount amount
  // =========================================================
  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscountAmount();
  };

  // =========================================================
  // TODO 9: Return total number of products in cart
  // [{ quantity: 2 }, { quantity: 3 }] => 5
  // =========================================================

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // =========================================================
  // TODO 10: Clear the shopping cart
  // =========================================================
  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setDiscountCode('');
    setMessage('');
  };

  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
        <div className="cart-count">Cart Items: {getCartItemCount()}</div>
      </header>

      <main>
        <section className="products">
          <h2>Products</h2>
          <div className="product-list">
            {PRODUCTS.map((product) => (
              <div className="product-card" key={product.id}>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price.toLocaleString()}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section className="cart">
          <div className="cart-header">
            <h2>Your Cart</h2>
            {cart.length > 0 && (
              <button
                className="clear-button"
                onClick={clearCart}
                disabled={cart.length === 0}
              >
                Clear Cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className='item-details'>
                    <h3>{item.name}</h3>
                    <p>
                      ₹{item.price.toLocaleString()} × {item.quantity}
                    </p>
                  </div>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <div className="item-total">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="discount-section">
                <h3>Discount</h3>

                <input
                  type="text"
                  placeholder="Enter discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />

                <button onClick={applyDiscount}>Apply</button>

                {message && <p>{message}</p>}
              </div>

              <div className="summary">
                <div>
                  <span>Subtotal</span>
                  <span>₹{calculateSubtotal().toLocaleString()}</span>
                </div>

                <div>
                  <span>Discount</span>
                  <span>- ₹{calculateDiscountAmount().toLocaleString()}</span>
                </div>

                <hr />

                <div className="total">
                  <span>Total</span>
                  <span>₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default ProductCart;
