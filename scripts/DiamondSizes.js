import { getSizes, setSize, getOrderBuilder } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        const builder = getOrderBuilder()
        if (size.id === builder.sizeId) {
        html += `<li>
            <input class="radio_sizes" type="radio" name="size" value="${size.id}" checked="true" /> ${size.carets} caret
        </li>`
        } else {
            html += `<li>
            <input class="radio_sizes" type="radio" name="size" value="${size.id}" /> ${size.carets} caret
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

