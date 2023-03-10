import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
    let orderProduct = null

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product.name
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = ""

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee.name
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        html += `<li>${product} was sold by ${employee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}
const soldCount =(employee)=>{
    let soldOrders = 0

    for (const order of orders) {
        if(order.employeeId === employee.id){
            soldOrders ++
        }
        }
        return soldOrders
}



document.addEventListener("click",(clickEvent)=>{
    const clickedItem = clickEvent.target

    if(clickedItem.id.startsWith("employee")){


        const [,employeeID] = clickedItem.id.split('--')

        for (let employee of employees){
        if (employee.id === parseInt(employeeID)){
            window.alert(`${employee.name} has sold ${soldCount(employee)}`)
        }
        }   
    }
})

