
import Counter from "@/components/count";
import fetchAPI from "@/Services/fetch";
import Link from "next/link";
import search from "./search/page";


export default async function Home() {

  const mensagem = await fetchAPI();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black m-10">
      <Link href="/search" >Calculadora</Link>
      <p>Hello ci/cd</p>
      <Counter />
      <p>{mensagem.message}</p>
    </div>
  );
}
