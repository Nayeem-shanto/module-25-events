/* 3rd option for onclick events handler */

const blueBtn = document.getElementById('btn-blue');
console.log(blueBtn);

blueBtn.onclick = function makeBlue(){
   document.body.style.backgroundColor = 'blue';
}

/* class name diye search korar karone eta kaj korbe nah properly. karon class name ekta htmllist provide kore. but onclick only single elements er upor kaj kore. tai index use korte hobe or id diye korte hobe or loop use korte hobe.  */
const redBtn = document.getElementsByClassName('btn-red');
console.log(redBtn[0]);

redBtn[0].onclick = function makeRed(){
    document.body.style.backgroundColor = 'red';
}

/* 4th option or 3rd option er different form */

const orangeBtn = document.getElementById('btn-orange');
console.log(orangeBtn);

function makeOrange(){
    document.body.style.backgroundColor = 'orange';
}
orangeBtn.onclick = makeOrange; // eta just like option 3. baire ekta function declare kore shetar nam ta just boshay dibo . 
/* orangeBtn.onclick = makeOrange(); // jodi evave bracket diye call kora hoy taile directly oi functione r vetorer kaj ta hoye jabe click er jonno wait korbe nah */


/* option 4 */
/* addEventListener--------- 

*/
/* document.getElementById('purple-btn').addEventListener('click', function makePurple(){
    document.body.style.backgroundColor = 'purple';
}) */

    document.getElementById('purple-btn').addEventListener('mouseout', function makePurple(){
    document.body.style.backgroundColor = 'purple';

    })


