import { getJewelryTypes, setJewelryType, getOrderBuilder} from "./dataAccess.js"

const jewelryTypes = getJewelryTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelry") {
            setJewelryType(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const JewelryTypes = () => {
    const builder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = jewelryTypes.map(jewelry => {
        let checked = ``
        if (jewelry.id === builder.jewelryTypeId) {
            checked = `checked="checked"`
        }
            return `<input class="radio_type" type="radio" name="jewelry" value="${jewelry.id}" ${checked}/> ${jewelry.type}
        </li>`
        }
    )

    html += listItems.join("")
    html += "</ul>"

    return html
}