import queryString from 'query-string'
import client from '../apollo/apollo-client'
import { gql } from '@apollo/client'

// export const ProductsQuery =`
// {
//   products: allShopifyProduct(
//     sort: { fields: publishedAt, order: ASC }
//     limit: 24
//   ) {
//     pageInfo {
//       hasNextPage
//     }
//   }
// }
// `

export const ProductsQuery = gql`
query ($query: String!, $sortKey: ProductSortKeys, $first: Int, $last: Int, $after: String, $before: String) {
  products(
    query: $query
    sortKey: $sortKey
    first: $first
    last: $last
    after: $after
    before: $before
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        title
        vendor
        productType
        handle
        priceRangeV2: priceRange {
          minVariantPrice {
            currencyCode
            amount
          }
          maxVariantPrice {
            currencyCode
            amount
          }
        }
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              width
              height
              altText
            }
          }
        }
      }
    }
  }
}
`
function arrayify(value) {
  if (!value) {
    return []
  }
  if (!Array.isArray(value)) {
    return [value]
  }
  return value
}

function makeFilter(field, selectedItems) {
  if (!selectedItems?.length) return
  if (selectedItems && !Array.isArray(selectedItems)) {
    selectedItems = [selectedItems]
  }
  return `(${selectedItems
    .map((item) => `${field}:${JSON.stringify(item)}`)
    .join(" OR ")})`
}

export function createQuery (filters) {
  const { term, tags, productTypes, minPrice, maxPrice, vendors } = filters
  const parts = [
    term,
    makeFilter("tag", tags),
    makeFilter("product_type", productTypes),
    makeFilter("vendor", vendors),
    // Exclude empty filter values
  ].filter(Boolean)
  if (maxPrice) {
    parts.push(`variants.price:<="${maxPrice}"`)
  }
  if (minPrice) {
    parts.push(`variants.price:>="${minPrice}"`)
  }

  return parts.join(" ")
}

/**
 * Extracts default search values from the query string or object
 * @param {string|object} query
 */
export function getValuesFromQuery(query) {
    const isClient = typeof query === 'string'
    const {
        q: term,
        s: sortKey,
        x: maxPrice,
        n: minPrice,
        p,
        t,
        v,
    } = isClient
        ? queryString.parse(query)
        : query
    return {
        term,
        sortKey,
        maxPrice,
        minPrice,
        productTypes: arrayify(p),
        tags: arrayify(t),
        vendors: arrayify(v),
    }
}

export async function getSearchResults({
    query,
    count = 24,
}) {
    const filters = getValuesFromQuery(query)

    // Relevance is non-deterministic if there is no query, so we default to "title" instead
    const initialSortKey = filters.term ? "RELEVANCE" : "TITLE"

    const urqlQuery = createQuery(filters);
    // const headers = {
    //     'content-type': 'application/json',
    //     "X-Shopify-Storefront-Access-Token": `${process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN}`
    // };
    // const requestBody = {
    //     query: ProductsQuery,
    //     variables: {
    //         query: urqlQuery,
    //         first: count,
    //         sortKey: filters.sortKey || initialSortKey
    //     }
    // };
    // const options = {
    //     method: 'POST',
    //     headers,
    //     body: JSON.stringify(requestBody)
    // };
    // const response = await fetch('https://applitools-demo.myshopify.com/api/2022-04/graphql.json', options)
    // const req = await response.json();
    const req = await client.query({
        query: ProductsQuery,
        variables: {
            query: urqlQuery,
            first: count,
            sortKey: filters.sortKey || initialSortKey
        }
    })
    return req.data?.products?.edges
}
