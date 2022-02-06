document.getElementById('subbutton').onclick = function(){
    
    // Gets the value of input
    const text = document.getElementById('inpbox').value;
    // Ignore blank input ?!?!
    block: {
    if (!text.trim().length) {
        document.getElementById('inpbox').setAttribute('placeholder', 'Type Something');
        break block;
    }
    
    // creates a list object
    const lo = document.createElement('li');
    lo.append(text);
    // creates a button to remove each list object
    const rmv = document.createElement('button');
    rmv.innerHTML = 'remove';
    lo.append(rmv);

    // add the List Object to the Ordered List
    const ol = document.querySelector('ol').append(lo);
    document.getElementById('inpbox').value = '';
    
    // Remove text from the input box
    rmv.onclick = () => lo.remove();
    }

}