function randomBorderRadius() {
  const min = 50
  const max = 100
  const value = () => Math.random() * (max - min) + min + '%'
  return `${value()} ${value()} ${value()} ${value()} / ${value()} ${value()} ${value()} ${value()}`
}

function applyBlobRadius(blob) {
  const greencolors = ['green','darkgreen','green-yellow','forestgreen','mediumseagreen','limegreen','#032619','#089622','#011c06',"#5fab09","#9acc04"]
  blob.style.borderRadius = randomBorderRadius()
  blob.style.background = greencolors[Math.floor(Math.random() * greencolors.length)];
}

function makeBlobs() {
  const blobs = document.getElementsByClassName('blob-card')
  for (const blob of blobs) {
    applyBlobRadius(blob)
    blob.addEventListener('pointerenter', () => applyBlobRadius(blob))
  }
}

makeBlobs();