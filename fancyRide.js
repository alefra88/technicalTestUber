/* Being a new Uber user, you have $20 off your first ride.You want to make the most out of it and drive in the fanciest card you can afford,without spending any out-off-pocket money. There are 5 options, from the least to the most expensive: "UberX", "UberXL","UberPlus","Uberblack", and "UberSUV"
You know the length 1 of you ride in miles and how much one mile costs for ech car. Find the best car you can afford.
EXAMPLE
For 1 = 30 and fares = [0.3,0.5,0.7,1,1,3] the output should be
solution(1, fares) = "UberXL"
*/
function solution(length, fares) {
  const carTypes = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  let bestOption = "";
  let bestFare = Number.MAX_VALUE;
  for (let i = 0; i < fares.length; i++) {
    let fare = fares[i] * length;
    if (fare <= 20 && fare < bestFare) {
      bestOption = carTypes[i];
      bestFare = fare;
    }
  }
  return bestOption;
}