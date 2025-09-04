// Create a new Portfolio object
const user = new Portfolio({
  name: 'Sophia Thomas',
  email: 'sophiart03@gmail.com',
  age: 21,
  hobbies: [
    "databases",
    "crocheting",
    "yoga",
    "weightlifting",
  ],
});
// Insert the Portfolio in our MongoDB database
await user.save()
//Find a single portfoio
const firstUser = await Portfolio.findOne({}); 
console.log(firstUser)