import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// document.querySelector("button").addEventListener("click", run);
// const run = async function () {
// const prompt = document.getElementById("prompt").value;
const result = await model.generateContent(
  "Give some information about black myth wukong game"
);
const response = await result.response;
console.log(response.text());
// document.getElementById("display").innerText= response.text()
// return response.text();
// };
