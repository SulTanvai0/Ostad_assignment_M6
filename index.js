//application will run here 
const app = require('./app');

const PORT = 3000 ;


app.listen(PORT , ()=>{
    console.log(`server is running on: ${PORT}`);
})