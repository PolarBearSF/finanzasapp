//funcion selector

function add_select_input(elem, values) {
    const fragment = document.createDocumentFragment()
    for (const value of values) {
        const selectItem = document.createElement('option')
        selectItem.setAttribute('value', value.toLowerCase())
        selectItem.textContent = value
        fragment.appendChild(selectItem)
    }

    elem.appendChild(fragment);
    return elem;
  }

