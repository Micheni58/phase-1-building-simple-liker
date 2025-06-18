// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal= document.getElementById('modal');
errorModal.classList.add('hidden');

const articleHearts = document.querySelectorAll('.like-glyph');
// console.log(articleHearts)
for(const glyph of articleHearts){
  glyph.addEventListener('click', updateLike);

}
function updateLike(e){
  const heart = e.target;
  mimicServerCall()
  .then(()=> {
    if (heart.innerText === EMPTY_HEART ){
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart');
    }
  })
  .catch((error) => {
    errorModal.classList.remove('hidden');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.innerText = error;

    setTimeout(() => {
      errorModal.classList.add('hidden');
    },3000);
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
