let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-blue-onWhite.jpg",
        altText: "A pair of socks",
        onSale: false,
        inventory: 100,
        details: ['80% cotton', '20% polyesyer', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],
        cart: 0
    },
    methods: {
        addToCard(){
            this.cart += 1
        },
        removeFromCard() {
            this.cart -= 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})
