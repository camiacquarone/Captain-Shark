// src/openaiService.js
import OpenAI from 'openai';

const openai = new OpenAI({
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
