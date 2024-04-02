import { FormEvent, useState } from "react";
import { Header } from "../../components/Header/input";
import { Input } from "../../components/Input";
import { FaLink } from "react-icons/fa";

import { db } from "../../services/firebaseConnection";
import { setDoc, getDoc, doc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        alert("Cadastrados com sucesso!!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium my-2">Link do facebook</label>
        <Input
          type="url"
          placeholder="Digite a url do Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-white font-medium my-2">Link do Instagram</label>
        <Input
          type="url"
          placeholder="Digite a url do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="text-white font-medium my-2">Link do Youtube</label>
        <Input
          type="url"
          placeholder="Digite a url do Youtube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button
          type="submit"
          className="flex items-center justify-center h-9 mt-2 mb-7 text-white bg-blue-600 rounded font-medium gap-2"
        >
          Salvar links
          <FaLink size={16} />
        </button>
      </form>
    </div>
  );
}
