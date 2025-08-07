const REVIEW_PROMPT = `You are an expert software engineer and code reviewer.

Your job is to review the following Python code and provide feedback in bullet points. Please include:

- ✅ Bugs or logical errors (if any)
- ⚙️ Suggestions to optimize the code
- 🧹 Code quality improvements
- 📚 Adherence to best coding practices
- 🔒 Any security concerns (if relevant)

Return your feedback in clear and concise bullet points.

Here is the code to review:
\`\`\`python
{code}
\`\`\``;

export const reviewCode = async (code: string): Promise<string> => {
  // Simulate AI response for demo purposes
  // In a real app, you'd call an AI API like OpenAI, Claude, etc.
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const mockReview = `- ✅ No syntax errors detected in the provided code
- ✅ Logic appears sound for the given functionality

- ⚙️ Consider using list comprehensions for better performance
- ⚙️ Add type hints for better code documentation
- ⚙️ Consider using constants for magic numbers

- 🧹 Variable names could be more descriptive
- 🧹 Consider adding docstrings to functions
- 🧹 Follow PEP 8 formatting guidelines

- 📚 Add proper error handling with try-catch blocks
- 📚 Consider using logging instead of print statements
- 📚 Break down large functions into smaller, testable units

- 🔒 Validate user inputs to prevent injection attacks
- 🔒 Use secure random number generation for sensitive operations`;

  return REVIEW_PROMPT.replace('{code}', code) + '\n\n' + mockReview;
};