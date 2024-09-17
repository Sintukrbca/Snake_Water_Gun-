function myFunction() {
  document.getElementById("myCheck").click;
  let count_win = 0;
  let count_lose = 0;
  for (let i = 0; i < 10; i++) {
    function makeid(length) {
      let result = '';
      const characters = 'swg';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
    let user = prompt("Enter any string from s,w,g")
    if (makeid(1) == 's' && user == 'w' || makeid(1) == 'g' && user == 's' || makeid(1) == 'w' && user == 'g') {
      count_win++;
    }
    else {
      count_lose++;
    }
  }

  if (count_win > count_lose) {
    document.getElementById("result").innerHTML = "Cogratulations! You won the game";

  }
  else {
    document.getElementById("result").innerHTML = "Sorry! You loss the game";
  }
}