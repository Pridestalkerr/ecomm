import Image from "next/image"
import Link from "next/link"

export interface Product {
  id: string
  name: string
  price: string
  rating: number
  reviewCount: number
  href: string
  breadcrumbs: Breadcrumb[]
  images: ProductImage[]
  colors: ProductColor[]
  sizes: ProductSize[]
  description: string
  details: string[]
  color: string
}

interface Breadcrumb {
  id: number
  name: string
  href: string
}

interface ProductImage {
  id: number
  imageSrc: string
  imageAlt: string
  primary: boolean
}

interface ProductColor {
  name: string
  bgColor: string
  selectedColor: string
}

interface ProductSize {
  name: string
  inStock: boolean
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col p-28 h-full gap-10">
      <h2 className="text-xl font-bold text-gray-900">Customers also bought</h2>
      <div className="flex-grow grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src={product.images[0]!.imageSrc}
                  alt={product.images[0]!.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">{product.price}</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={`/products/${product.id}`}
                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Add to bag<span className="sr-only">, {product.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
