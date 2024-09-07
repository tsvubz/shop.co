import './CartSum.module.scss'

import { useState, useEffect } from 'react';


// Sample Item type, assuming we have an array of items in the cart
type Item = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

// Sample Props type for Cart component
interface CartProps {
    items: Item[];
    discount: number;
    deliveryFee: number;
}

const CartSum= ({ items, discount, deliveryFee }: CartProps) => {
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculate the subtotal
        const calculatedSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(calculatedSubtotal);
        
        // Calculate the total
        const calculatedTotal = calculatedSubtotal - discount + deliveryFee;
        setTotal(calculatedTotal);
    }, [items, discount, deliveryFee]);

    return (
        <div className="cart-component">
            <h2>Order Summary</h2>
            <div className="order-summary">
                <div className="summary-item">
                    <span className="label">Subtotal:</span>
                    <span className="value">${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span className="label">Discount:</span>
                    <span className="value">-${discount.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span className="label">Delivery Fee:</span>
                    <span className="value">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="summary-item total">
                    <span className="label">Total:</span>
                    <span className="value">${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};


export default CartSum;