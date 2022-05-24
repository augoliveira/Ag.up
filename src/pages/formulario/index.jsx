import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from "../../components/Page-header";
import DarkTheme from "../../layouts/Dark";
import Form from "../../components/form";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";
import User from '../../components/icons/user.js'
import Seta from '../../components/icons/seta.js'
import Empresa from '../../components/icons/empresa.js'

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
      < Form />
      </section>
      </DarkTheme>
  );
};

export default Contact;
