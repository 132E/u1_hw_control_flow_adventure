//Players Name
let player = prompt(`What's your name?`);
let age = prompt(`Hello, ${player}! How old are you?(age)`);
{
  console.log(age);
  {
    if (age >= 21) {
      let yesNo = prompt(`Can I get you a drink, yes or no? (y/n)`);
      if (yesNo === `Y` || yesNo === `y`) {
        let beerLiquor = prompt(`What will it be, beer or liquor? (b/l)`);
      }
      //   i cant get the b and l choices to promt or alert
      if (beerLiquor === `B` || beerLiquor === `b`);
      {
        prompt(
          `Good choice. You have a few rounds with some friends and call it a night`
        );
      }
      if (beerLiquor === `L` || beerLiquor === `L`);
      {
        prompt(`You got waisted and the night ended early`);
      }
    }
  }
  if (age < 21) {
    let moviesChill = prompt(
      `Would you like to go to the movies or chill? (m/c)`
    );
    if (moviesChill === `M` || moviesChill === `m`) {
      let beerLiquor = prompt(`What will it be, beer or liquor? (b/l)`);
    }
    if (beerLiquor === `B` || beerLiquor === `b`);
    {
      prompt(
        `Good choice. You have a few rounds with some friends and call it a night`
      );
    }
  }
}
