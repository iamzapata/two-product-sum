import { twoProductsCombinedPrice, Product } from './twoProductsCombinedPrice'

type TestCase = [
  productList: Product[],
  targetSum: number,
  expected: [string, string]
]

const productList: Product[] = [
  { id: 'shoes', price: 100 },
  { id: 'socks', price: 50 },
  { id: 'pants', price: 200 },
  { id: 'shirts', price: 80 },
  { id: 'hats', price: 150 },
  { id: 'sweaters', price: 90 },
]

const productsWithZeroPrice: Product[] = [
  { id: 'shoes', price: 100 },
  { id: 'socks', price: 50 },
  { id: 'pants', price: 200 },
  { id: 'shirts', price: 0 },
  { id: 'hats', price: 50 },
  { id: 'sweaters', price: 100 },
]

const productsWithNegativeValues: Product[] = [
  { id: 'shoes', price: 100 },
  { id: 'socks', price: -50 },
  { id: 'pants', price: 200 },
  { id: 'shirts', price: 25 },
  { id: 'hats', price: 50 },
  { id: 'sweaters', price: 25 },
]

describe('twoProductsCombinedPrice', () => {
  const testCases: TestCase[] = [
    [productList, 200, ['socks', 'hats']],
    [productList, 240, ['hats', 'sweaters']],
  ]

  testCases.forEach(([list, targetSum, expected]) => {
    it(`returns [${expected.join(
      ', '
    )}] when targetSum is ${targetSum}`, () => {
      expect(twoProductsCombinedPrice(list, targetSum)).toEqual(expected)
    })
  })

  describe('it skips products with zero price', () => {
    const testCases: TestCase[] = [
      [productsWithZeroPrice, 100, ['socks', 'hats']],
    ]

    testCases.forEach(([list, targetSum, expected]) => {
      it(`returns [${expected.join(
        ', '
      )}] when targetSum is ${targetSum}`, () => {
        expect(twoProductsCombinedPrice(list, targetSum)).toEqual(expected)
      })
    })
  })

  describe('it skips products with negative prices', () => {
    const testCases: TestCase[] = [
      [productsWithNegativeValues, 50, ['shirts', 'sweaters']],
    ]

    testCases.forEach(([list, targetSum, expected]) => {
      it(`returns [${expected.join(
        ', '
      )}] when targetSum is ${targetSum}`, () => {
        expect(twoProductsCombinedPrice(list, targetSum)).toEqual(expected)
      })
    })
  })
})
