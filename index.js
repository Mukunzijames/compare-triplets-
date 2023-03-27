function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  if (a[0] > b[0]) {
    alicePoints++;
  } else if (a[0] < b[0]) {
    bobPoints++;
  }

  if (a[1] > b[1]) {
    alicePoints++;
  } else if (a[1] < b[1]) {
    bobPoints++;
    
  }

  if (a[2] > b[2]) {
    alicePoints++;
  } else if (a[2] < b[2]) {
    bobPoints++;
  }

  return [alicePoints, bobPoints];
}
const a = [5, 6, 7];

const b = [3, 6, 10];

const [alicePoints, bobPoints] = compareTriplets(a, b);
console.log(alicePoints, bobPoints); 

