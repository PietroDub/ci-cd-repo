"use client";

import { useState } from "react";

export default function Counter() {
  var [number, setNumber] = useState(0);

  async function addCount() {
    setNumber(number += 1)
    console.log("cliquei", number);
    return number;
  }
  return (
    <button 
    className="bg-blue-600 text-white p-5"
    onClick={() => addCount()}>
      {number}
    </button>
  );
}