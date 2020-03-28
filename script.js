//Question 1
const cat = {
  complain: function() {
    console.log("Meow!");
  }
};

//Question 2
const heading = document.querySelector("h3");

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New Paragraph</p>";

//Question 7
function nameOfArray(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

nameOfArray(cats);

//Question 8
function nameOfArrayWithHFiveTag(catArray) {
  let content = "";
  for (let i = 0; i < catArray.length; i++) {
    content += `<h5>${catArray[i].name}</h5>`;
  }
  return content;
}

//Question 9
resultsContainer.innerHTML = nameOfArrayWithHFiveTag(cats);

//Question 10
function nameOfArrayWithAge(catArray) {
  let content = "";
  for (let i = 0; i < catArray.length; i++) {
    content += `<div><h5>${catArray[i].name}</h5>`;
    if (catArray[i].age) {
      content += `<p>${catArray[i].age}</p></div>`;
    } else {
      content += `<p>Age unknown</p></div>`;
    }
  }
  return content;
}
