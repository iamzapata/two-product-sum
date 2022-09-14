export interface Product {
  id: string
  price: number
}

export interface Product {}

export function twoProductsCombinedPrice(
  productList: Product[],
  targetSum: number
) {
  let nextIndex = 0
  productList = [...productList]

  for (let product of productList) {
    const restOfProducts = productList.slice(++nextIndex)

    for (let nextProduct of restOfProducts) {
      if (product.price === 0 || nextProduct.price === 0) {
        continue
      }

      if (product.price < 0 || nextProduct.price < 0) {
        continue
      }

      const currentSum = product.price + nextProduct.price

      if (currentSum === targetSum) {
        return [product, nextProduct].map(({ id }) => id)
      }
    }
  }

  return []
}
