"use client"
import React, { useState } from "react";

function Test() {
  const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f5dadc88-7b88-43d2-b9ea-c58114b7d603");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="App">
      <h1>React File Upload Form</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <input type="file" name="attachment" />
        <input type="submit" />
      </form>
      <span>{result}</span>
    </div>
  );
}

export default Test;