const express = require('express');
const App = express();

App.get('/',(req,res)=>{
    res.send('kamakshi')
})
App.listen(8080, () => {
  console.log('App is running on port 8080');
});
