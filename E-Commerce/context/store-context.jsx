import * as React from "react"

const defaultValues = {
    cart: [],
    isOpen: false,
    loading: false,
    onOpen: () => {},
    onClose: () => {},
    addVariantToCart: () => {},
    removeLineItem: () => {},
    updateLineItem: () => {},
    checkout: {
        lineItems: [],
    },
}

export const StoreContext = React.createContext(defaultValues)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const StoreProvider = ({ children }) => {
    const [checkout, setCheckout] = React.useState(defaultValues.checkout)
    const [loading, setLoading] = React.useState(false)
    const [didJustAddToCart, setDidJustAddToCart] = React.useState(false)

    const setCheckoutItem = (checkout) => {
        if (isBrowser) {
            localStorage.setItem(localStorageKey, checkout.id)
        }

        setCheckout(checkout)
    }

    React.useEffect(() => {
        // const initializeCheckout = async () => {
        //     const existingCheckoutID = isBrowser
        //         ? localStorage.getItem(localStorageKey)
        //         : null
        //     if (existingCheckoutID && existingCheckoutID !== `null`) {
        //         try {
        //             const req = await fetch(`/api/existing-checkout/${encodeURIComponent(existingCheckoutID)}`);
        //             const res = await req.json();
        //             const existingCheckout = res.data;
        //             if (!existingCheckout.completedAt) {
        //                 setCheckoutItem(existingCheckout)
        //                 return
        //             }
        //         } catch (e) {
        //             localStorage.setItem(localStorageKey, null)
        //         }
        //     }
        //     // const req = await fetch('/api/create-checkout');
        //     // const res = await req.json();
        //     // setCheckoutItem(res.data);
        // }
        // initializeCheckout()
    }, [])

    const addVariantToCart = async (variantId, quantity) => {
        setLoading(true)
        const checkoutID = checkout.id

        const lineItemsToUpdate = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            },
        ]
        const body = {
            checkoutID,
            lineItemsToUpdate
        }
        const req = await fetch('/api/add-to-cart', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
        });
        const res = await req.json();
        setCheckout(res.data);
        setLoading(false);
        setDidJustAddToCart(true);
        setTimeout(() => setDidJustAddToCart(false), 3000);
    }

    const removeLineItem = async (checkoutID, lineItemID) => {
        setLoading(true)
        const body = {
            checkoutID, 
            lineItems: [lineItemID]
        }
        const req = await fetch('/api/remove-from-cart', {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
        });
        const res = await req.json();
        setCheckout(res.data);
        setLoading(false);
    }

    const updateLineItem = async (checkoutID, lineItemID, quantity) => {
        setLoading(true)

        const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) },
        ]

        const body = {
            checkoutID,
            lineItemsToUpdate
        }
        const req = await fetch('/api/update-cart', {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
        });
        const res = await req.json();
        setCheckout(res.data)
        setLoading(false)
    }

    return (
        <StoreContext.Provider
            value={{
                ...defaultValues,
                addVariantToCart,
                removeLineItem,
                updateLineItem,
                checkout,
                loading,
                didJustAddToCart,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
