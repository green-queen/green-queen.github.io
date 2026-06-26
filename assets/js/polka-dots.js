// following https://www.madrasacademy.com/create-a-dynamic-starry-night-background-with-html-css-and-javascript/
function createDots() {
  const numberOfDots = 100; // Adjust for more or fewer stars
  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('polka-dot');

    // Random size, position, and animation duration for each star
    const size = Math.random() * 7 + 1;
    const greencolors = ['green','darkgreen','green-yellow','lightgreen','forestgreen','chartreuse','mediumseagreen','limegreen','olive','yellowgreen']
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.animationDuration = `${Math.random() * 2 + 1}s`;
    dot.style.backgroundColor = greencolors[Math.floor(Math.random() * greencolors.length)];
    document.body.appendChild(dot);
  }
}

createDots();