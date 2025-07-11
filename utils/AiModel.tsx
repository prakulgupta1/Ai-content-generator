// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// utils/AiModel.ts

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY,
});

export const chatSession = {
  sendMessage: async (prompt: string) => {
    const config = {
      thinkingConfig: {
        thinkingBudget: -1,
      },
      responseMimeType: 'text/plain',
    };

    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model: 'gemini-2.5-pro',
      config,
      contents,
    });

    let fullResponse = '';
    for await (const chunk of response) {
      console.log(chunk.text);
      fullResponse += chunk.text;
    }

    return {
      response: {
        text: async () => fullResponse,
      },
    };
  },
};


  


