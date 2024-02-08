const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "yeahhhhh !! d tunggu yah hehew ";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  
  noBtn.remove();


  const dateIdeas = [
    "NO ONE SEEN",
    "HARUS IKUTI SALAH SATU EKSPRESI ABEE",





  ];

  
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "click for more request!";
  letsGoBtn.classList.add("letsgo-btn"); 
  letsGoBtn.style.position = "absolute";

 
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; 

  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`REQUEST DIKIT: ${selectedDateIdea}`);
  });


  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
