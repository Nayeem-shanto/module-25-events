console.log("File Connected");
document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    console.log("Btn Clicked");
    const titleText = document.getElementById('title-text');
    console.log(titleText);
    titleText.innerText = 'Event Changed';

  });

  const allSport = document.getElementById('sports');
  console.log(allSport)
  

  document.getElementById('fvrt').addEventListener('click', function(){
    console.log("worked");
    const likeMost = document.getElementById('like-most');
    /* console.log(likeMost); */
    likeMost.innerText = 'My Favorite Sports';

    const backColor = document.getElementById('sport-item');
    console.log(backColor);
    backColor.style.backgroundColor = 'red';
    backColor.style.width = '50%'
    
  })

  /* dynamic text updated */

  /* const submittedText = document.getElementById('submit');
  console.log(submittedText); */

  /* j button er moddhe event korte chai shei button ta khuje ber kora and tar sathe addeventlistener add kora. */
  document.getElementById('submit').addEventListener('click', function(){
    console.log("submitted");
    /* j input field theke data nite chai sheta findout kora and tar value store kora. */
    const inputFieldText = document.getElementById('inpfield');
    console.log(inputFieldText);
    const getText = inputFieldText.value;
    console.log(getText);
/* jekhane value show korte chai sheta khuje ber kore value set kore dewa.  */
    const updatedText = document.getElementById('update-text');
    console.log(updatedText);
    updatedText.innerText = getText;
  })


  /* another practice. */

  /* first we need to do.. */
  document.getElementById('update-btn').addEventListener('click', function(){
    console.log("button clicked")
    const inpFieldValue = document.getElementById('inp-email');
    console.log(inpFieldValue);
    const inputFieldValue = inpFieldValue.value;
    console.log(inputFieldValue);

    const titleOfTheEmail = document.getElementById('email-title');
    console.log(titleOfTheEmail);
    titleOfTheEmail.innerText = inputFieldValue;
    titleOfTheEmail.style.fontSize = '50px';

    
    
  })
