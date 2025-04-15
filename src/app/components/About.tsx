const About = () => {
    return (
      <section id="about" className="bg-[#2c3e50] text-white py-20 flex flex-col md:flex-row items-center justify-center px-6">
        {/* Foto de perfil */}
        <div className="w-36 h-36 mb-6 md:mb-0 md:mr-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="gabriel.jpg" // verifique se a imagem está em public/gabriel.jpg
            alt="Foto de Gabriel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto descritivo */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
          <p className="text-lg leading-relaxed">
            Olá! Me chamo <strong>Gabriel Marques</strong>, sou apaixonado por tecnologia e atuo na área de T.I. Desde os meus primeiros contatos com computadores, eu soube que era isso que queria pra minha vida. Sempre tive uma curiosidade imensa por saber como as coisas funcionam por trás das telas. Hoje, trabalho com o que amo, e cada novo desafio é uma oportunidade de evoluir. Gosto de resolver problemas, automatizar processos, entender sistemas e ajudar pessoas por meio da tecnologia. 💻💡🚀
          </p>
        </div>
      </section>
    );
  };

  export default About;
