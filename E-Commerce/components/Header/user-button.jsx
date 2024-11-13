import * as React from "react"
import Link from "next/link"
import UserIcon from "./user-icon"

export function UserButton() {
    return (
        <Link
            aria-label={`User`}
            href="/e-commerce/cart"
            id="userButton"
        >
            <UserIcon />
        </Link>
    )
}
