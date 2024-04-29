import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import axios from "axios";

const app = express()
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
var port = 3030;



app.get("/",(req,res)=>{
    res.render('output.ejs',{requestData: 1})
})



//jdoodle start


const url = "https://api.jdoodle.com/v1/execute";
const clientId = "4e92d18b1f55cca899c3e87035d5a7a8"; // Replace with your actual client ID
const clientSecret = "4bb5828414e4c026d2026038a396091738f982306108aea539965739de0955db"; // Replace with your actual client secret
// const code = `
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter first value: ', (value1) => {
//   rl.question('Enter second value: ', (value2) => {
//     console.log('Sum: ' + (parseInt(value1) + parseInt(value2)));
//     rl.close();
//   });
// });
// `;
// const language = "nodejs";

// Multiple inputs separated by newline characters
const input = null;


//jdoodle end



app.post('/data', async (req, res) => {
  try {
      // Attempt to parse JSON data from request body
      const requestData = req.body;
      console.log(requestData);
      if(requestData.language=="Python")
        requestData.language="python3"
      const payload = {
        clientId: clientId,
        clientSecret: clientSecret,
        script: requestData.content,
        language: requestData.language.toLowerCase(),
        stdin: input // Pass multiple inputs as stdin parameter
    };
    
    axios.post(url, payload)
        .then(response => {
          res.json(response.data)
          // res.render('output.ejs', { requestData: 1, showTerminal: true });
          // res.send(renderTerminalHTML());
            console.log(response.data);
            // res.render(index.ejs,{responseData: response.data.output})
        })
        .catch(error => {
            console.error(error.data);
        });

      // Render the template with the data
      // res.redirect('https://github.com/sahilatahar/Code-Sync')
    //  res.render('index.ejs', { requestData: requestData.content });
      // Send JSON response
      
  } catch (error) {
      console.error('Error parsing JSON data:', error);
      res.status(400).json({ error: 'Invalid JSON data' });
  }
  // res.json({ success: true });
});



app.listen(port,(req,res)=>{
    console.log("Output port running");
})
