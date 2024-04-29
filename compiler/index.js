import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://online-code-compiler.p.rapidapi.com/v1/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '845fc046e4msh14b5336e5a961adp1283e3jsnc4eefdd9db30',
    'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
  },
  data: {
    language: 'python3',
    version: 'latest',
    code: 'a=int(input("Enter a number"))\nprint(a)\nb=int(input("Enter a number"))\nprint(b);',
    input: '8,5'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}