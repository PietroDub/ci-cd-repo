"use client";

import { useEffect, useState } from "react";

export default function Calculadora(){

    const numbers = [1,2,3,4,5,6,7,8,9]
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [operador, setOperador] = useState("");
    const [result, setResult] = useState(0);

    async function setNumero(numero : number) {
        if(operador != ""){
            setN2(String(n2 + numero));
        } else{
            setN1(String(n1 + numero))
        }
    }

    function somar(numero1 : number, numero2 : number) {
                const n3 = numero1 + numero2; 
                return n3;
    }

    function subitrair(numero1 : number, numero2 : number) {
        const n3 = numero1 - numero2; 
        return n3;
    }
    function divisão(numero1 : number, numero2 : number) {
        const n3 = numero1 / numero2; 
        return n3;
    }

    async function igual() {
        if(operador == "+"){
            const resultado = somar(Number(n1), Number(n2));
            setN1(String(resultado));
            setResult(
                resultado
            );
        }
        if(operador == "-"){
            const resultado = subitrair(Number(n1), Number(n2));
            setN1(String(resultado));
           setResult(resultado);
        }
        if(operador == "/"){
           const resultado = divisão(Number(n1), Number(n2));
           setN1(String(resultado));
            setResult(resultado);
        }
        

        setN2("");
        setOperador("");
        setResult(0);
    }

    return(
        <div>
            <p>Calculadora</p>
            <div className="grid col-span-4 row-span-4 bg-white w-2/4 h-70 gap-1 text-2xl">
                <div className="col-span-4 row-span-1">
                    <input placeholder={n1 + operador + n2 + "=" + result} className="text-black" ></input>
                </div>
                    {
                        numbers.map(numero => (
                            <button 
                            onClick={() => setNumero(+ numero)}
                            className="bg-blue-500">
                                 {numero}
                            </button>
                        ))
                    }
                    <button 
                    onClick={() => setOperador("+")}
                    className="bg-gray-600 text-center">
                        +
                    </button>
                    <button 
                    onClick={() => setOperador("-")}
                    className="bg-gray-600 text-center">
                        -
                    </button>
                    <button 
                    onClick={() => setOperador("/")}
                    className="bg-gray-600 text-center">
                        /
                    </button>
                    <button
                    onClick={() => igual()}
                    >
                        =
                    </button>
            </div>
        </div>
    )
}