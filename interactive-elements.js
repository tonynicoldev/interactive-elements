const output = document.getElementById('output') // Output basic results
document.getElementById('output').style.fontSize = '2em'
document.getElementById('cbEmail').addEventListener('change', handleCheckBoxes);
document.getElementById('cbText').addEventListener('change', handleCheckBoxes);
document.getElementById('btnPressMe').addEventListener('click', handleClick);
document.addEventListener('input', handleInputEvents) // All input events

// This will also trigger the handleInputEvents handler then come here
function handleCheckBoxes(event) {
  output.innerText = event.srcElement.checked ? 'Checked' : 'Unchecked'
}

// Separate function to handle the click event
function handleClick(event) {
  output.innerText = `Event type: ${event.type}. Value is [${event.target.value}]`
}

// Radios and selects are more difficult. This will trigger on all input events - check if it's a radio
// If a complex type, look for name attribute and output accordingly
// If multi select type, deal with that name differently - there will be multiple values
// For everything else generating an input event, do the default
function handleInputEvents(event) {
  let attrib = event.target.getAttribute('name') // Get the name
  switch (attrib) {
    case 'rdColour':
    case 'credit_card':
    case 'ddcredit_card':
    case 'taText':
      output.innerText = `Event type: ${event.type}. Value is: ${event.target.value}`
      break

    case 'list_box_name[]':
      output.innerText = `Event type: ${event.type}. Value is: `
      for (let i = 0; i < event.target.selectedOptions.length; i++) {
        output.innerText += ` ${event.target.selectedOptions[i].text} `
      }
      break

    default:
      if (event.srcElement.id == 'cpColour') {
        document.getElementById('output').style.color = event.target.value
      }
      output.innerText = `Event type: ${event.type}. Value is: ${event.target.value}`
  }
  
}
