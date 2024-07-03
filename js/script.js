let joke_url = "http://api.icndb.com/jokes/";
let joke_arr = [];

function getJoke() {
  let request = new XMLHttpRequest();

  request.open("GET", joke_url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      data.value.forEach((value) => {
        //stored the jokes retreived from the api in an array
        joke_arr.push(value.joke);

        //Manipulate the DOM
        let joke_text = document.getElementById("joke-txt");
        joke_text.innerHTML = joke_arr[randomNumber()];
      });
    }
  };

  request.send();
}

function randomNumber() {
  //generating a random number
  return Math.floor(Math.random() * 600) + 1;
}
