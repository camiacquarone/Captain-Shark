// src/openaiService.js
import OpenAI from 'openai';

const openai = new OpenAI({
  //apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export const getOpenAIResponse = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};
