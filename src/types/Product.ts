export interface Product {
    id: number
    title: string
    image: string
    description: string
    price: number
}

export interface CartProduct extends Product {
    quantity: number
}
