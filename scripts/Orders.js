import { getCustomOrders, getMetals, getSizes, getStyles, getJewelryTypes } from "./dataAccess.js"



const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const jewelryTypes = getJewelryTypes()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    let totalCost = foundMetal.price;

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
        totalCost += foundSize.price

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
        totalCost += foundStyle.price

    const foundJewelryType = jewelryTypes.find(
        (jewelry) => {
            return jewelry.id === order.jewelryTypeId
        }
    )
        totalCost += foundJewelryType.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li class="order_result">
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

