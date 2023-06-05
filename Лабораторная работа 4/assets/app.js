document.querySelector(".gradient-button").onclick = myClick;
function myClick() {
  let a = document.querySelector(".Str").value;
  if (a === "") {
    console.log("Error");
    let list = document.getElementById("list");
    for (let i = 0; i < 1; i++) {
      let liNode = document.createElement("li");
      liNode.innerHTML = 0;
      list.appendChild(liNode);
    }
  } else {
    console.log(a);
    var arrayOfStrings = a.split(",");
    console.log(arrayOfStrings);
    let num = arrayOfStrings.map((string) => parseInt(string));
    console.log(num);

    for (let i = 0; i < num.length; i++) {
      for (let j = 0; j < num.length; j++) {
        if (num[j] > num[i]) {
          let temp = num[i];
          num[i] = num[j];
          num[j] = temp;
        }
      }
    }
    console.log(num);
    let list = document.getElementById("list");
    for (let i = 0; i < num.length; i++) {
      let liNode = document.createElement("li");
      liNode.innerHTML = num[i];
      list.appendChild(liNode);
    }
  }
}
