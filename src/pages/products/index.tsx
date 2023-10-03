import ProductList from "src/core/components/ProductList"
import { products as defaultProducts } from "src/core/components/products"
import { useState } from "react"
import Layout from "src/core/layouts/Layout"

export default function ProductsPage() {
  const [products, setProducts] = useState(defaultProducts)
  return (
    <Layout title="Home">
      <ProductList products={products}></ProductList>
    </Layout>
  )
}
