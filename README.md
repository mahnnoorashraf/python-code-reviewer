# 🧠 Python Code Reviewer

A handy Python bot that uses **Google’s Gemini Pro LLM** (via the Generative AI API) to analyze and critique Python code—just like a thoughtful reviewer would.

---

## ✅ Features at a Glance

- 🐞 **Detects bugs and logical errors**  
- 🚀 **Suggests performance optimizations**  
- 🧼 **Improves code quality and readability**  
- 🧠 **Recommends Python best practices and PEP‑8 compliance**

---

## 💡 Why This Matters

Manual code reviews are vital but time-consuming. AI such as Gemini brings **speed, consistency, and intelligent feedback**, making code quality accessible even when your team is busy. Many modern tools like Copilot, Snyk, or Codacy already echo these benefits.  
([qodo.ai](https://www.qodo.ai/blog/how-to-effectively-use-ai-code-reviewers-on-github/?utm_source=chatgpt.com), [snyk.io](https://snyk.io/blog/python-code-review-tools/?utm_source=chatgpt.com))

---

## ⚙️ Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/mahnnoorashraf/python-code-reviewer.git
   cd python-code-reviewer
   ```

2. **Install dependencies:**
   ```bash
   pip install google-generativeai
   ```

3. **Set your Gemini API Key:**
   ```python
   import google.generativeai as genai
   genai.configure(api_key="YOUR_GEMINI_API_KEY")
   ```

---

## 🧪 Usage Example

```python
from generative_review import review_code

sample_code = """
def divide(a, b):
    return a / b

print(divide(10))  # Missing second argument
"""

print(review_code(sample_code))
```

---

## 🛠️ How It Works

This tool accepts your code as input and uses Gemini’s `generate_content` to return a structured, bullet-point review. Feedback includes bugs, optimization tips, and coding best practices.

---

## 👥 Who Will Benefit

- 🧑‍🎓 **Students** learning proper code standards  
- 🧑‍💻 **Python developers** wanting quick feedback before commits  
- 👩‍🔧 **Teams** aiming for consistent code review across CI/CD workflows  

---

## ✍️ Author

**Mahnoor Ashraf**  
GitHub: [@mahnnoorashraf](https://github.com/mahnnoorashraf)

---

🚀 Feel free to fork and enhance this tool, whether by expanding language support, adding a web interface, or integrating it into CI pipelines.
