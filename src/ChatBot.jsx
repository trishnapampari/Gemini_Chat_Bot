import React from 'react'
import { useState } from 'react';

export default function ChatBot() {

const [response, setResponse] = useState("");
const [prompt, setPrompt] = useState("");

  const handleSend = async () => {
    const response = await fetch("http://localhost:5000/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

     const data = await response.json();
    setResponse(data.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
  };
  return (
    <>
          <div>
              <h1>Gemini Chat</h1>
              <textarea
                  rows={10}
                  cols={100}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask something..."
              />
              <br />
              <button onClick={handleSend}>Send</button>
              <pre>{response}</pre>
          </div>

    </>
  )
}   
