export default function decorate(block) {
const demoBodies = document.querySelectorAll('.demo-wrapper');
const paragraphContents = [];
demoBodies.forEach(demoBody => {
  const paragraphs = demoBody.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    const content = p.textContent.trim();
    paragraphContents.push({ [`Para`]: content });
  });
});

console.log('para',paragraphContents)

const demoImage = document.querySelector('.demo');
let imageSrc = '';

if (demoImage) {
  const imgTag = demoImage.querySelector('img');  
  if (imgTag) {
    imageSrc = imgTag.src;
  } else {
    console.log('No img tag found inside the element with class "demo-image".');
  }
} else {
  console.log('No element with class "demo-image" found.');
}

const demoWrapper = document.querySelector('.demo-wrapper');

if (demoWrapper) {
    demoWrapper.innerHTML = '';
  
  const firstDiv = document.createElement('div');
  firstDiv.className = 'first';
  
  const innerDivFirst = document.createElement('div');

  const demoTitle = document.createElement('p');
  demoTitle.className = 'DemoTitle';
  demoTitle.textContent = paragraphContents[0]?.Para;

  const demoHeading = document.createElement('p');
  demoHeading.className = 'DemoHeading';
  demoHeading.textContent = paragraphContents[1]?.Para;

  const demoPara = document.createElement('p');
  demoPara.className = 'DemoPara';
  demoPara.textContent =paragraphContents[2]?.Para;

  
  innerDivFirst.appendChild(demoTitle);
  innerDivFirst.appendChild(demoHeading);
  innerDivFirst.appendChild(demoPara);

  firstDiv.appendChild(innerDivFirst);

  const secondDiv = document.createElement('div');
  secondDiv.className = 'second';
  
  const imgTag = document.createElement('img');
  imgTag.src = imageSrc;
  imgTag.alt = 'Demo Image';

  secondDiv.appendChild(imgTag);

  demoWrapper.appendChild(firstDiv);
  demoWrapper.appendChild(secondDiv);
} else {
  console.log('No element with class "demo-wrapper" found.');
}
  }