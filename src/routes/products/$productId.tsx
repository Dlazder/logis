import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({component: Product})

function Product() {
  const { productId } = Route.useParams()
  return <h1>{productId}</h1>
}
