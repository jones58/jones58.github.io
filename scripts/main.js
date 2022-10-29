const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/helvetica.jpg") {
    myImage.setAttribute("src", "images/national.jpg");
  } else {
    myImage.setAttribute("src", "images/helvetica.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = ` ${myName} loves modernism`;
    }
  }
  
  myButton.onclick = () => {
    setUserName();
  };

  