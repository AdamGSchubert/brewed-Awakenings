import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click",(clickEvent)=>{
    const itemClicked = clickEvent.target

    if(itemClicked.id.startsWith("product")){

        const [,productId] = itemClicked.id.split("--")


        for (let product of products){
            if (product.id === parseInt(productId)){
                let productPrice = Intl.NumberFormat('us-US',{style: `currency`, currency: 'USD'}).format(product.price)
                window.alert(`A ${product.name} costs ${productPrice}`)
            }
        }
    }
})
