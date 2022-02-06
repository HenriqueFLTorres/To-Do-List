document.querySelector('#subbutton').onclick = () => {
    
    // Gets the value of input
    const text = document.getElementById('inpbox').value;

    // Ignore blank input ?!?!
    blankInputChecker: {
    if (!text.trim().length) {
        document.getElementById('inpbox').setAttribute('placeholder', 'Type Something');
        break blankInputChecker;
    }
    
    // add text to a <p> tag
    const paragrahp = document.createElement('p');
    paragrahp.append(text)

    // create a list object
    const lo = document.createElement('li');
    lo.append(paragrahp);

    // create a done button
    const doneButton = document.createElement('button');
    doneButton.innerText = 'done'
    doneButton.classList.add('done')
    lo.append(doneButton)

    // Change list object on done button click
    doneButton.onclick = (e) => {
        let object = e.currentTarget.parentNode
        object.classList.toggle('done')

        object.classList == 'done' ?
           ( lo.style.textDecorationLine = 'line-through', object.style.opacity = 0.4 ) :
           ( lo.style.textDecorationLine = 'none', object.style.opacity = 1 )
    }

    // create a button to remove each list object
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    lo.append(removeButton);
    

    // add the List Object to the Ordered List
    document.querySelector('ol').append(lo);
    document.querySelector('#inpbox').value = '';
    
    // Remove text from the input box
    removeButton.onclick = () => lo.remove();

    // list object mouse over and out
    lo.onmouseover = () => doneButton.style.opacity = 1
    lo.onmouseout = () => doneButton.style.opacity = 0
    }
}
