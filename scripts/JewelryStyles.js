import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const JewelryStyles = () => {
    const builder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(
        (style) => {
            if (style.id === builder.styleId) {
                html +=`<li>
                <input class="radio_styles" type="radio" name="style" value="${style.id}" checked="checked"/>${style.style}
                </li>`
            } else {
            html += `<li>
                <input class="radio_styles" type="radio" name="style" value="${style.id}" />${style.style}
                </li>`
            }
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

