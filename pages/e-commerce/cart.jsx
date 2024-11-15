import * as React from "react"
import { StoreContext } from "../../E-Commerce/context/store-context"
import { LineItem } from "../../E-Commerce/components/Products/line-item"
import {
    table,
    wrap,
    totals,
    grandTotal,
    summary,
    checkoutButton,
    collapseColumn,
    labelColumn,
    imageHeader,
    productHeader,
    emptyStateContainer,
    emptyStateHeading,
    emptyStateLink,
    title,
} from "./cart.module.css"
import Link from "next/link"

export default function CartPage() {
    const { checkout, loading } = React.useContext(StoreContext);
    const emptyCart = checkout.lineItems?.length === 0
    
    const handleCheckout = () => {
        window.open(checkout.webUrl)
    }
    
    return (
        <div className={wrap}>
            {emptyCart ? (
                <div className={emptyStateContainer}>
                    <h1 className={emptyStateHeading}>Your cart is empty</h1>
                    <p>
                        Looks like you haven’t found anything yet. We understand that
                        sometimes it’s hard to choose — maybe this helps:
                    </p>
                    <Link href="/e-commerce/search?s=BEST_SELLING" className={emptyStateLink}>
                        View trending products
                    </Link>
                </div>
            ) : (
                <>
                    <h1 className={title}>Your cart</h1>
                    <table className={table}>
                        <thead>
                            <tr>
                                <th className={imageHeader}>Image</th>
                                <th className={productHeader}>Product</th>
                                <th className={collapseColumn}>Price</th>
                                <th>Qty.</th>
                                <th className={[totals, collapseColumn].join(" ")}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {checkout.lineItems?.map((item) => (
                                <LineItem item={item} key={item.id} />
                            ))}
                            
                            <tr className={summary}>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={labelColumn}>Subtotal</td>
                                <td className={totals}>
                                    ${checkout.subtotalPriceV2?.amount}
                                </td>
                            </tr>
                            <tr className={summary}>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={labelColumn}>Taxes</td>
                                <td className={totals}>
                                    ${checkout.totalTaxV2?.amount}
                                </td>
                            </tr>
                            <tr className={summary}>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={labelColumn}>Shipping</td>
                                <td className={totals}>Calculated at checkout</td>
                            </tr>
                            <tr className={grandTotal}>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={collapseColumn}></td>
                                <td className={labelColumn}>Total Price</td>
                                <td className={totals}>
                                    ${checkout.totalPriceV2?.amount}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={handleCheckout}
                        disabled={loading}
                        className={checkoutButton}
                    >
                        Checkout
                    </button>
                </>
            )}
        </div>
    )
}