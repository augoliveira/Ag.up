import React from "react";
import Image from 'next/image'
import PageHeader from "../../components/Page-header";
import Orcamento from "../../components/Orcamento";
import DarkTheme from "../../layouts/Dark";



const Contact = () => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <DarkTheme>
      <PageHeader
        title="Orçamento - up.expert"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Orçamento", url: "/Orçamento" },
        ]}
        Image="/assets/img/bg-004-free-img.png"
      />
      
      <section className="contact">
        < Orcamento />
      </section>
      </DarkTheme>
  );
};

export default Contact;
