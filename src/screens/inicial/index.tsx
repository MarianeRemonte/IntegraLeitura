const contentImages = [
    {
      src: "https://c.animaapp.com/Ub6lPlau/img/integra-leitura.svg",
      alt: "Integra leitura",
      className:
        "absolute top-[394px] left-1/2 -translate-x-1/2 w-[332px] h-[186px]",
    },
    {
      src: "https://c.animaapp.com/Ub6lPlau/img/captura-de-tela-2026-05-19-091253-removebg-preview-1@2x.png",
      alt: "Captura de tela",
      className:
        "top-[319px] left-44 w-px h-px absolute aspect-[1.02] object-cover",
    },
    {
      src: "https://c.animaapp.com/Ub6lPlau/img/captura-de-tela-2026-05-19-091253-removebg-preview-2.svg",
      alt: "Captura de tela",
      className:
        "top-[147px] left-1/2 -translate-x-1/2 w-[281px] h-[275px] absolute aspect-[1.02] object-cover",
    },
  ];
  
  export const Inicial = (): JSX.Element => {
    return (
      <main
        className="overflow-hidden border-2 border-solid border-black bg-[linear-gradient(180deg,rgba(166,200,248,1)_28%,rgba(0,83,253,1)_100%)] w-full min-w-[426px] min-h-[917px] relative"
        data-model-id="2:3"
      >
        {contentImages.map((image) => (
          <img
            key={image.src}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}
  
        <p className="absolute top-[583px] left-1/2 -translate-x-1/2 w-[400px] text-center [font-family:'Inter',Helvetica] font-bold text-[#ffff50] text-base tracking-[0] leading-[normal]">
          Por um mundo onde letras deixam de ser vilãs
        </p>
      </main>
    );
  };