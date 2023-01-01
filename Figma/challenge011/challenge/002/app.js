
  var opt = document.querySelectorAll("input[name=rate]");
  var userValue = document.querySelector(".userValue");
  var submitBtn = document.getElementById("submitBtn");
  // let optBtn = document.querySelector(rateNum);
  // let pop = document.getElementById("thankYou");

var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };
  var userInput;

  for (let i of opt) {
    i.addEventListener("click", function () {
      userInput = i.value;
      let rateNum = "label[for=rate" + i.value + "]";
      console.log(rateNum);
      let optBtn = document.querySelector(rateNum);
      console.log(optBtn);
      optBtn.style.backgroundColor = "var(--orange)";
      let sib = getSiblings(optBtn);
      // console.log(sib);
      for (let i in sib) {
        console.log(sib[i]);
        sib[i].style.backgroundColor = "var(--mediumGreyOp)";
      }
    });
  }

  submitBtn.addEventListener("click", function () {
    event.preventDefault();
    userValue.innerHTML = userInput;
    console.log("Usersays: " + userInput);
    let pop = document.getElementById("thankYou");
    pop.style.display = "block";
    rating.style.display = "none";
  });