
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./dataAccess.js"
import { JewelryTypes } from "./Jewelry.js"

document.addEventListener(
    "click",
    (clickEvent) => {
       const itemClicked = clickEvent.target

       if (itemClicked.id === "orderButton") {
            addCustomOrder()
       }
    }
)

export const KneelDiamonds = () => {
    return `
        <section class="navbar">
            <img class="logo" src="kneel-diamonds.png">
            <h1 class="header">Custom Orders</h1>
        </section>

        <section class="choices">
            <div class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </div>
            <div class="choices__sizes options">
                <h2>Carets</h2>
                ${DiamondSizes()}
            </div>
            <div class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </div>
        </section>

        <section class="final_selections">
            <h2 class="types_header">Jewelry Types</h2>
                <div class="jewelry_types">
                    ${JewelryTypes()}
                </div>
            <div class="order_btn">
                <button id="orderButton">Create Custom Order</button>
            </div>
        </section>

        <section class="customOrders">
            <h2 class="custom_header">Custom Jewelry Orders</h2>
            ${Orders()}
        </section>
    `
}

