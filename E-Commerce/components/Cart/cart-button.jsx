import * as React from "react"
import { cartButton, badge } from "./cart-button.module.css"
import Link from "next/link"
import CartIcon from "./cart"

export function CartButton({ quantity }) {
    return (
        <Link
            aria-label={`Shopping Cart with ${quantity} items`}
            href="/e-commerce/cart"
            className={cartButton}
            id="cartButton"
        >
            <CartIcon />
            {quantity > 0 && <div className={badge}>{quantity}</div>}
        </Link>
    )
}
