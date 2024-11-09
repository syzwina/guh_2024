from openai import OpenAI
from pprint import pprint
import os

api_key = os.getenv("MY_API_KEY")
client = OpenAI(api_key=api_key)

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": "Write a haiku about recursion in programming."
        }
    ]
)

data = completion.model_dump_json(indent=3)
pprint(data)