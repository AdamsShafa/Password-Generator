
//Shuffle an array
// its good that you export but remember to import them in your main script
export const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

// Function for getting a random element from an array
export const getRandom = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}