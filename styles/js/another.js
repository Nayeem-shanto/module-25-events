console.log("File Connected");

/* click here to add button e click krole text area theke input nibe and sheta uporer paragraph section e add korbe. and text area khali kore dibe. */

document.getElementById('click-btn').addEventListener('click', function(){
    console.log("Button clicked");
    const textArea = document.getElementById('text-area');
    console.log(textArea);
    const inputValue = textArea.value;
    console.log(inputValue); 

    const newChild = document.createElement('p');
    /* console.log(newChild); */
    newChild.innerText = inputValue;
    /* console.log(newChild); */

    const newElement = document.getElementById('paragraph-container');
    console.log(newElement);
    newElement.appendChild(newChild);
    textArea.value = '';
})

/* ekhane ekta problem hocche kisu na likheo butoon e click krole shetao add hoccchhe. 
need to fix. */