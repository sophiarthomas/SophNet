import mongoose from 'mongoose'; 
const {Schema, model} = mongoose;

const portfolioSchema = new Schema({
    name: String, 
    email: String, 
    age: Number, 
    hobbies: [String]
});

const Portfolio = model('Portfolio', portfolioSchema);
export default Portfolio;