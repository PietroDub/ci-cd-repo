"use client";

import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  async function addCount() {
    const numero = number + 1;
    setNumber(numero)
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