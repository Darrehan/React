const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => console.log('Database Is Connected')).catch((err) => console.log(err));

// Schema (Shape of a Document)
// Document, Collection, Database 
 
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String,

})
const User = mongoose.model('User',userSchema);

  

async function fetchInformation(){
    await User.deleteMany({ isMarried: false });
}

fetchInformation();

//   async  function storeInformation(){
//         const user = new User({
//         name: 'Ariyan',
//         age: 40,
//         isMarried: false,
//         salary: 50000,
//         gender: 'Male', 
//         });
//         await user.save();
//         console.log(user);
//     }
//     storeInformation();