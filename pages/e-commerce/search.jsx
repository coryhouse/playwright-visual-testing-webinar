import * as React from "react"
import debounce from "debounce"
import { CgChevronRight, CgChevronLeft } from "react-icons/cg"
import {
    main,
    search,
    searchIcon,
    sortSelector,
    results,
    productList as productListStyle,
    productListItem,
    pagination,
    paginationButton,
    progressStyle,
    resultsStyle,
    filterStyle,
    clearSearch,
    searchForm,
    sortIcon,
    filterButton,
    filterTitle,
    modalOpen,
    activeFilters,
    filterWrap,
    emptyState,
} from "./search-page.module.css"
import CrossIcon from "../../E-Commerce/components/cross"
import SortIcon from "../../E-Commerce/components/Search/sort"
import FilterIcon from "../../E-Commerce/components/Search/filter"
import SearchIcon from "../../E-Commerce/components/Search/search"
import { getSearchResults, getValuesFromQuery } from "../../E-Commerce/utils/search"
import { useProductSearch } from "../../E-Commerce/utils/hooks"
import { getCurrencySymbol } from "../../E-Commerce/utils/format-price"
import { Spinner } from "../../E-Commerce/components/progress"
import { Filters } from "../../E-Commerce/components/Search/filters";
import { gql } from "@apollo/client";
import { useRouter } from "next/router"
import client from "../../E-Commerce/apollo/apollo-client"
import { ProductCard } from "../../E-Commerce/components/Products/ProductSearchList"

const DEFAULT_PRODUCTS_PER_PAGE = 24

export async function getServerSideProps({ query, ...rest }) {
    // const { getSearchResults } = require("../utils/search")
    const products = await getSearchResults({
        query,
        count: DEFAULT_PRODUCTS_PER_PAGE,
    });
    const ALL_PRODUCTS_QUERY = gql`
        query AllProducts {
            products(first: 50) {
                edges {
                    node {
                        productType,
                        tags,
                        vendor
                    }
                }
            }
        }
    `;
    const data = await client.query( {query: ALL_PRODUCTS_QUERY});
    let tags = new Set();
    let vendors = new Set();
    let productTypes = new Set();
    data.data.products.edges.forEach((prod) => {
        const p = prod.node;
        if (p.tags?.length) {
            p.tags.forEach(tag => {
                tags.add(tag);
            })
        }
        if (p.vendor) vendors.add(p.vendor);
        if (p.productType) productTypes.add(p.productType);
    })
    tags = Array.from(tags);
    vendors = Array.from(vendors);
    productTypes = Array.from(productTypes);
    
    return {
        props: {
            query,
            serverProducts: products,
            tags, 
            vendors,
            productTypes
        },
    }
}

// export const query =

function SearchPage({
    tags,
    vendors,
    serverProducts,
    productTypes
}) {
    const router = useRouter();
    // These default values come from the page query string
    const queryParams = getValuesFromQuery(router.query)
    
    const [filters, setFilters] = React.useState(queryParams)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initialFilters = React.useMemo(() => queryParams, [])
    const [sortKey, setSortKey] = React.useState(queryParams.sortKey)
    // We clear the hash when searching, we want to make sure the next page will be fetched due the #more hash.
    const shouldLoadNextPage = React.useRef(false)
    
    // This modal is only used on mobile
    const [showModal, setShowModal] = React.useState(false);
    const [products, setProducts] = React.useState(serverProducts);

    React.useEffect(() => {
        fetchProducts();
    }, [router.query]);

    const fetchProducts = async () => {
        const body = {
            query: router.query
        }
       const req =  await fetch('/api/perform-search', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
        })
        const res = await req.json();
        setProducts(res.data);
    }
    
    const {
        isFetching,
        filterCount,
        hasNextPage,
        hasPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
    } = useProductSearch(
        filters,
        {
            allProductTypes: productTypes,
            allVendors: vendors,
            allTags: tags,
        },
        sortKey,
        false,
        DEFAULT_PRODUCTS_PER_PAGE,
        serverProducts,
        initialFilters
    )
    
    const currencyCode = getCurrencySymbol(
        products?.[0]?.node?.priceRangeV2?.minVariantPrice?.currencyCode
    )
    
    return (
        <div className={main}>
            <div className={search} aria-hidden={modalOpen}>
                <SearchBar defaultTerm={filters.term} setFilters={setFilters} />
                <button
                    className={[
                        filterButton,
                        filterCount ? activeFilters : undefined,
                    ].join(" ")}
                    onClick={() => setShowModal((show) => !show)}
                    // This is hidden because the filters are already visible to
                    // screenreaders, so the modal isnt needed.
                    aria-hidden
                >
                    <FilterIcon />
                </button>
                <div className={sortSelector}>
                    <label>
                        <span>Sort by:</span>
                        <select
                        value={sortKey}
                        // eslint-disable-next-line
                        onChange={(e) => setSortKey(e.target.value)}
                        >
                            <option value="RELEVANCE">Relevance</option>
                            <option value="PRICE">Price</option>
                            <option value="TITLE">Title</option>
                            <option value="CREATED_AT">New items</option>
                            <option value="BEST_SELLING">Trending</option>
                        </select>
                    </label>
                    <SortIcon className={sortIcon} />
                </div>
            </div>
            <section className={[filterStyle, showModal && modalOpen].join(" ")}>
                <div className={filterTitle}>
                    <h2>Filter</h2>
                    <button aria-hidden onClick={() => setShowModal(false)}>
                    <CrossIcon />
                    </button>
                </div>
                <div className={filterWrap}>
                    <Filters
                        setFilters={setFilters}
                        filters={filters}
                        tags={tags}
                        vendors={vendors}
                        productTypes={productTypes}
                        currencyCode={currencyCode}
                    />
                </div>
            </section>
            <section
                className={results}
                aria-busy={isFetching}
                aria-hidden={modalOpen}
            >
                {isFetching ? (
                    <p className={progressStyle}>
                        <Spinner aria-valuetext="Searching" /> Searching
                        {filters.term ? ` for "${filters.term}"…` : `…`}
                    </p>
                ) : (
                    <p className={resultsStyle}>
                        Search results{" "}
                        {filters.term && (
                            <>
                                for "<span>{filters.term}</span>"
                            </>
                        )}
                    </p>
                )}
                {!isFetching && (
                    <ul className={productListStyle}>
                        {products?.map(({ node }, index) => (
                            <li className={productListItem} key={node.id}>
                                <ProductCard
                                    product={{
                                        title: node.title,
                                        priceRangeV2: node.priceRangeV2,
                                        handle: node.handle,
                                        slug: `/products/${encodeURIComponent(node.productType)}/${
                                            node.handle
                                        }`,
                                        // The search API and Gatsby data layer have slightly different images available.
                                        images: [],
                                        storefrontImages: node.images,
                                        vendor: node.vendor,
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                )}
                {!isFetching && products?.length === 0 && (
                    <div className={emptyState}>No results found</div>
                )}
                {hasPreviousPage || hasNextPage ? (
                    <Pagination
                        previousPage={fetchPreviousPage}
                        hasPreviousPage={hasPreviousPage}
                        nextPage={fetchNextPage}
                        hasNextPage={hasNextPage}
                    />
                ) : undefined}
            </section>
        </div>
    )
}
            
function SearchBar({ defaultTerm, setFilters }) {
    const [term, setTerm] = React.useState(defaultTerm)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSetFilters = React.useCallback(
        debounce((value) => {
            setFilters((filters) => ({ ...filters, term: value }))
        }, 200), [setFilters]
    )
    
    return (
        <form onSubmit={(e) => e.preventDefault()} className={searchForm}>
            <SearchIcon aria-hidden className={searchIcon} />
            <input
                type="text"
                value={term}
                onChange={(e) => {
                    setTerm(e.target.value)
                    debouncedSetFilters(e.target.value)
                }}
                placeholder="Search..."
            />
            {term ? (
                <button
                    className={clearSearch}
                    type="reset"
                    onClick={() => {
                        setTerm("")
                        setFilters((filters) => ({ ...filters, term: "" }))
                    }}
                    aria-label="Clear search query"
                >
                    <CrossIcon />
                </button>
            ) : undefined}
        </form>
    )
}
/**
* Shopify only supports next & previous navigation
*/
function Pagination({ previousPage, hasPreviousPage, nextPage, hasNextPage }) {
    return (
        <nav className={pagination}>
            <button
                className={paginationButton}
                disabled={!hasPreviousPage}
                onClick={previousPage}
                aria-label="Previous page"
            >
                <CgChevronLeft />
            </button>
            <button
                className={paginationButton}
                disabled={!hasNextPage}
                onClick={nextPage}
                aria-label="Next page"
            >
                <CgChevronRight />
            </button>
        </nav>
    )
}

export default function SearchPageTemplate(props) {
    return (
        // <SearchProvider>
            <SearchPage {...props} />
        // </SearchProvider>
    )
}