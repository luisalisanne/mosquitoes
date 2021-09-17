console.log('Hallo');

//* 1. Creating tree elements

// let treeOne = document.createElement('div');
// let treeTwo = document.createElement('div');
// let treeThree = document.createElement('div');

//* 2. Adding classes for tree elements

// treeOne.setAttribute('class', 'tree-1');
// treeTwo.setAttribute('class', 'tree-2');
// treeThree.setAttribute('class', 'tree-3');

//* 3. & 4. Appending tree elements to body

let body = document.querySelector('body');
// document.body.append(treeOne, treeTwo, treeThree);

//* 5. Creating a function that generates trees

// function generateTree(className) {
//     let tree = document.createElement('div');
//     tree.setAttribute('class', `${className}`);
//     document.body.append(tree);
// }

// generateTree('tree-1')
// generateTree('tree-2')
// generateTree('tree-3')

//* 6. Adding x and y values to change the position of each tree

// function generateTree(className, x, y) {
//     let tree = document.createElement('div');
//     tree.setAttribute('class', `${className}`);
//     document.body.append(tree);
//     tree.style.left = x;
//     tree.style.top = y;
// }

// generateTree('tree-1', '100px', '200px')
// generateTree('tree-2', '300px', '500px')
// generateTree('tree-3', '600px', '100px')

//* 7. Creating random coordinates according

// function generateTree(className, x, y) {
//     let tree = document.createElement('div');
//     tree.setAttribute('class', `${className}`);
//     document.body.append(tree);
//     tree.style.left = x;
//     tree.style.top = y;
// }

// generateTree('tree-1', `${(Math.random())*(document.body.clientWidth)}px`, `${(Math.random())*(document.body.clientHeight)}px`)

// generateTree('tree-2', `${(Math.random())*(document.body.clientWidth)}px`, `${(Math.random())*(document.body.clientHeight)}px`)

// generateTree('tree-3', `${(Math.random())*(document.body.clientWidth)}px`, `${(Math.random())*(document.body.clientHeight)}px`)

//* 8. Generating random trees at random positions

function generateTree() {
    let tree = document.createElement('div');
    tree.setAttribute('class', `tree-${Math.ceil(Math.random()*3)}`);
    document.body.append(tree);
    tree.style.left = `${Math.ceil(Math.random()*(window.innerWidth))}px`
    // console.log(`${Math.ceil(Math.random()*document.body.clientWidth)}px`);
    tree.style.top = `${Math.ceil(Math.random()*(window.innerHeight))}px`
}

// generateTree()
// generateTree()
// generateTree()
// generateTree()
// generateTree()

// generateTree(`'tree-${Math.ceil(Math.random()*3)}'`)
// console.log(`'tree-${Math.ceil(Math.random()*3)}'`);

//* 9. Generating random trees at random positions using a for loop

for (let i = 0; i < 50; i++) {
generateTree()
}

//* Bonus: Adding Insects

function generateMosquito() {

    let mosquito = document.createElement('div');
    mosquito.setAttribute('class', 'mosquito');
    document.body.append(mosquito);
    mosquito.style.left = `${Math.floor(Math.random()*(window.innerWidth))}px`
    // console.log(`${Math.ceil(Math.random()*(document.body.clientWidth))}px`);
    //  console.log(`${Math.ceil(Math.random()*(document.body.clientHeight))}px`);
    mosquito.style.top = `${Math.floor(Math.random()*(window.innerHeight)+200)}px`
}

for(let i=0; i<50; i++){
generateMosquito()}

// //! Extra

let mosquitos = document.querySelectorAll('.mosquito');
console.log(mosquitos);
let mosquitoArray = Array.from(mosquitos)

//* Adding an animation to each mosquito

mosquitoArray.forEach(mosquito =>

mosquito.animate([
  // keyframes
  { transform: 'translateY(-0px)' },
  { transform: 'translateY(-2000px)' } // this makes the mosquito faster
], {
  // timing options
  duration: 30000,
//   iterations: Infinity
}
));

//* Adding a counter to the website
//* Adding a click event to each mosquito

let counterDiv = document.querySelector('#counter')
let counter = document.createElement('p');
counter.setAttribute('id', 'counterContent');
counter.innerHTML = '0'
let clicks = 0;
counterDiv.appendChild(counter);

// console.log(counter.innerHTML);

mosquitoArray.forEach(mosquito =>

mosquito.addEventListener('click', () => {
        clapSound.play();
        mosquito.remove();
        clicks +=1;
        console.log(clicks);
        counter.innerHTML = `${clicks}/50`
        console.log('removed mosquito')})
);

// * Adding sound effect

let clapSound = new Audio('./audio/mixkit-one-clap-481.wav');
console.log(clapSound);

// clap.addEventListener("canplaythrough", event => {
//   /* the audio is now playable; play it if permissions allow */
//   // clap.play();
// });

// let easy = 700
// let medium = 1300
// let difficult = 2000

//* Adding 'play again' button

let refreshBtn = document.querySelector('#refreshBtn');

refreshBtn.addEventListener('click', () => {
      window.location.reload();
})

function playSwarmSound() {
  let swarmSound = new Audio('./audio/PXL4BA8-mosquito-swarm.mp3')
  swarmSound.play()
}
playSwarmSound()

setTimeout(function(){ 
  window.location.reload();
  alert(`Yay, you caught ${clicks} mosquitoes in 15 seconds! Do you want to play again?`); }, 15000);
