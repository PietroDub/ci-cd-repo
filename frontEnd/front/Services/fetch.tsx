type MessageResponse = {
  message: string;
};

export default async function fetchAPI(){
    const response = await fetch("http://localhost:5031/api/CiCd", {
    cache: "no-store",
  });

  if (!response.ok) {
      console.error()
    throw new Error("Erro ao fetch");
  }

 const data: MessageResponse = await response.json();

return data;

}