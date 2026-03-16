// const axios = require("axios");

// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`;

// const getChatbotReply = async (message) => {
//   try {
//     const response = await axios.post(
//       GEMINI_URL,
//       {
//         contents: [
//           {
//             role: "user",
//             parts: [
//               {
//                 text: `
// You are Atlas, a friendly AI travel assistant.
// Help users plan trips, suggest destinations, and answer travel questions in simple and human generated terms.

// User: ${message}
// Atlas:
//                 `,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const reply =
//       response.data.candidates?.[0]?.content?.parts?.[0]?.text;

//     return reply || "🤖 I'm not sure how to respond to that.";
//   } catch (error) {
//     console.error(
//       "Gemini REST API Error:",
//       error.response?.data || error.message
//     );
//     return "⚠️ Atlas is having trouble right now. Please try again.";
//   }
// };

// module.exports = getChatbotReply;
const axios = require("axios");

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`;

const getChatbotReply = async (message) => {
  try {
    const response = await axios.post(
      GEMINI_URL,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are Atlas, an intelligent AI travel assistant.

RULES:
1. Detect the user's tone automatically.
   - If user speaks professionally → respond professionally.
   - If user speaks casually → respond in simple plain English.
2. Always give only main points.
3. Keep responses short and structured.
4. No extra explanations.
5. No unnecessary greetings.
6. No emojis unless user uses emojis.
7. Focus only on relevant travel-related information.

Response Format:
- Use bullet points or short paragraphs.
- Keep it clear and concise.
- Avoid long descriptions.

User Message:
${message}

Atlas:
                `,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    return reply || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error(
      "Gemini REST API Error:",
      error.response?.data || error.message
    );
    return "Atlas is having trouble right now. Please try again.";
  }
};

module.exports = getChatbotReply;
