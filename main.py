import os

from openai import OpenAI


def main():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise RuntimeError("GEMINI_API_KEY is required")

    prompt = os.getenv("PROMPT", "Explain to me how AI works")
    model = os.getenv("GEMINI_MODEL", "gemini-3-flash-preview")

    client = OpenAI(
        api_key=api_key,
        base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
    )

    response = client.chat.completions.create(
        model=model,
        reasoning_effort="low",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
    )

    print(response.choices[0].message.content)

if __name__ == "__main__":
    main()
