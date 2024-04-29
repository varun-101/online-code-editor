import axios from "axios";

const url = "https://api.jdoodle.com/v1/execute";
const clientId = "4e92d18b1f55cca899c3e87035d5a7a8"; // Replace with your actual client ID
const clientSecret = "4bb5828414e4c026d2026038a396091738f982306108aea539965739de0955db"; // Replace with your actual client secret
const code = `
public class hello
  {
    public static void main(String args[])
    {
      int a = 5;
      System.out.println(a+10);
    }
  }
`;
const language = "java";

// Multiple inputs separated by newline characters
const input = null;

const payload = {
    clientId: clientId,
    clientSecret: clientSecret,
    script: code,
    language: language,
    stdin: input // Pass multiple inputs as stdin parameter
};

axios.post(url, payload)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
