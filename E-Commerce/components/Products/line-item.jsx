import * as React from "react"
import debounce from "lodash/debounce"
import { StoreContext } from "../../context/store-context"
import { NumericInput } from "./numeric-input"
import {
  title,
  remove,
  variant,
  totals,
  priceColumn,
} from "./line-item.module.css"
import DeleteIcon from "../delete"

export function LineItem({ item }) {
  const {
    removeLineItem,
    checkout,
    updateLineItem,
    loading,
  } = React.useContext(StoreContext)
  const [quantity, setQuantity] = React.useState(item.quantity)

  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  }

  const price = item.variant.price;

  const handleRemove = () => {
    removeLineItem(checkout.id, item.id)
  }

  const uli = debounce(
    (value) => updateLineItem(checkout.id, item.id, value),
    300
  )
  // eslint-disable-next-line
  const debouncedUli = React.useCallback((value) => uli(value), [])

  const handleQuantityChange = (value) => {
    if (value !== "" && Number(value) < 1) {
      return
    }
    setQuantity(value)
    if (Number(value) >= 1) {
      debouncedUli(value)
    }
  }

  function doIncrement() {
    handleQuantityChange(Number(quantity || 0) + 1)
  }

  function doDecrement() {
    handleQuantityChange(Number(quantity || 0) - 1)
  }

  return (
    <tr>
      <td>
        {variantImage && (
          <img
            style={{width: "160px", height: "160px", objectFit: "cover"}}
            key={variantImage.src}
            src={variantImage.src}
            alt={variantImage.altText ?? item.variant.title}
          />
        )}
      </td>
      <td>
        <h2 className={title}>{item.title}</h2>
        <div className={variant}>
          {item.variant.title === "Default Title" ? "" : item.variant.title}
        </div>
        <div className={remove}>
          <button onClick={handleRemove}>
            <DeleteIcon /> Remove
          </button>
        </div>
      </td>
      {console.log(price)}
      <td className={priceColumn}>{price.amount}</td>
      <td>
        <NumericInput
          disabled={loading}
          value={quantity}
          aria-label="Quantity"
          onIncrement={doIncrement}
          onDecrement={doDecrement}
          onChange={(e) => handleQuantityChange(e.currentTarget.value)}
        />
      </td>
      <td className={totals}>${Number(item.variant.priceV2.amount) * quantity}</td>
    </tr>
  )
}
