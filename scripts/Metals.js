import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js"

const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const Metals = () => {
    const builder = getOrderBuilder()
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if (metal.id === builder.metalId) {
            html += `<li>
            <input class="radio_metals" type="radio" name="metal" value="${metal.id}" checked="checked" /> ${metal.metal}
        </li>`
    } else {
        html += `<li>
            <input class="radio_metals" type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }
    }

    html += "</ul>"
    return html
}

