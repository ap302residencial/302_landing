/* ================================
   Apartamento 302 — Alpine.js Components
   ================================ */

document.addEventListener('alpine:init', () => {

  /* ---- NAVBAR ---- */
  Alpine.data('navbar', () => ({
    scrolled: false,
    mobileOpen: false,
    init() {
      const onScroll = () => {
        this.scrolled = window.scrollY > 80;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // check on init
    }
  }));

  /* ---- GALLERY + LIGHTBOX ---- */
  Alpine.data('gallery', () => ({
    activeTab: 'sala',
    lightboxOpen: false,
    lightboxIndex: 0,

    tabs: [
      {
        id: 'sala',
        label: 'Sala & TV',
        banner: 'photos/wide/20260308_181112.jpg',
        description: [
          'Sala integrada com jantar e sacada',
          'Fechadura eletrônica digital na entrada',
          'Sofá estilo ilha em linho claro',
          'Painel de TV em madeira com iluminação indireta',
          'Smart TV (LG)',
          'Mesa de jantar redonda com 4 lugares',
          'Ar-condicionado split (Samsung Wind-Free)',
          'Cortina com trilho suiço invisivel para privacidade',
          'Piso porcelanato em tom neutro',
          'Cristaleira com iluminação',
          'Churrasqueira e bancada de apoio em granito escovado com pia',
          'Máquina de lavar louça',
        ],
        photos: [
          'photos/narrow/20260308_181006.jpg',
          'photos/narrow/20260308_181017.jpg',
          'photos/narrow/20260308_182024.jpg',
          'photos/narrow/20260308_181307.jpg',              
          'photos/narrow/20260308_181156.jpg',
          'photos/narrow/20260308_181251.jpg',
          'photos/narrow/20260308_180946.jpg',            
          'photos/narrow/20260308_181746.jpg',
          'photos/narrow/20260308_181627.jpg',
          
        ],
      },
      {
        id: 'cozinha',
        label: 'Cozinha',
        banner: 'photos/wide/20260308_181528.jpg',
        description: [
          'Cozinha integrada ao ambiente social',
          'Ilha central com bancada de marmore dolomítico Ayla - Pedecril',
          'Armários planejados em tom claro',
          'Eletrodomésticos em acabamento inox',
          'Cooktop a gás e forno elétrico embutido',
          'Banquetas em madeira e palha natural',
          'Coifa slim',
          'Varal retrátil integrado na área de serviço',          
        ],
        photos: [
          'photos/narrow/20260308_180506.jpg',
          'photos/narrow/20260308_180512.jpg',
          'photos/narrow/20260308_180629.jpg',          
          'photos/narrow/20260308_180750.jpg',
          'photos/narrow/20260308_181849.jpg',
          'photos/narrow/20260308_181908.jpg',
          'photos/narrow/20260308_180705.jpg',
        ],
      },
      {
        id: 'escritorio',
        label: 'Escritório',
        banner: 'photos/wide/20260308_160716.jpg',
        description: [
          'Ambiente para foco, silêncio e concentração',
          'Bancada com espaço para duas áreas de trabalho',
          'Iluminação LED sob armários superiores',
          'Shelving planejado com nichos organizados',
          'Piso vinílico madeira, maior conforto nos pés',
          'Bicama para receber visita',
          'Ar-condicionado split (Samsung Wind-Free)',
          'Persianas sheer para luz natural filtrada',        
        ],
        photos: [
          'photos/narrow/20260308_160304.jpg',          
          'photos/narrow/20260308_160208.jpg',
          'photos/narrow/20260308_160146.jpg',
          'photos/narrow/20260308_155722.jpg',
          'photos/narrow/20260308_155932.jpg',
          'photos/narrow/20260308_160026.jpg',
          'photos/narrow/20260308_155736.jpg', 
        ],
      },
      {
        id: 'quarto',
        label: 'Quarto',
        banner: 'photos/narrow/20260303_092643.jpg',
        description: [
          'Cama queen com cabeceira em painel de madeira',
          'Iluminação LED indireta no headboard',
          'Mesa de cabeceira ao lado da cama',
          'Sapateira para 20 pares',
          'Guarda roupa planejado',
          'Smart TV (LG)',
          'Ar-condicionado split (Samsung Wind-Free)',
          'Piso vinílico madeira, maior conforto nos pés',
        ],
        photos: [
          'photos/narrow/20260303_092716.jpg',
          'photos/narrow/20260303_092704.jpg',
          'photos/narrow/20260303_092432.jpg',
          'photos/narrow/20260303_092539.jpg',
          'photos/narrow/20260303_092643.jpg', 
        ],
      },
      {
        id: 'banheiro',
        label: 'Banheiro',
        banner: 'photos/narrow/20260308_120429.jpg',
        description: [
          'Bancada de banheiro com LED embutido e cuba',
          'Banheiro com box vidro até o teto e porcelanato Portobelo',
          'Nicho para apoio',
          'Chuveiro e torneira com água quente e frio',
          'Metais da marca DOCOL',
          'Toalheiro e suporte para roupas',
        ],
        photos: [
          'photos/narrow/20260308_120429.jpg',
          'photos/narrow/20260308_121129.jpg', 
          'photos/narrow/20260308_120312.jpg',
          'photos/narrow/20260308_120341.jpg',
          'photos/narrow/20260308_120409.jpg',
        ],
      },
    ],

    get currentTab() {
      return this.tabs.find(t => t.id === this.activeTab);
    },

    switchTab(id) {
      this.activeTab = id;
    },

    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxOpen = true;
      document.body.classList.add('lightbox-open');
    },

    closeLightbox() {
      this.lightboxOpen = false;
      document.body.classList.remove('lightbox-open');
    },

    prev() {
      const len = this.currentTab.photos.length;
      this.lightboxIndex = (this.lightboxIndex - 1 + len) % len;
    },

    next() {
      const len = this.currentTab.photos.length;
      this.lightboxIndex = (this.lightboxIndex + 1) % len;
    },
  }));

  /* ---- FAQ ACCORDION ---- */
  Alpine.data('faq', () => ({
    open: null,

    toggle(i) {
      this.open = this.open === i ? null : i;
    },

    items: [
      {
        q: 'O apartamento está totalmente mobiliado?',
        a: 'Sim. O Apartamento 302 é vendido completamente mobiliado com moveis planejados e eltrodomésticos.',
      },
      {
        q: 'O imóvel aceita financiamento bancário?',
        a: 'Sim. O imóvel está apto para financiamento bancário. Entre em contato para discutir as condições de venda e a melhor forma de pagamento para o seu perfil.',
      },
      {
        q: 'Qual a área e o número de quartos?',
        a: 'O apartamento conta com 56m² de área total, com sala integrada à cozinha, quarto principal, quarto de visita com home office, banheiro e área de serviço.',
      },
      {
        q: 'Há vaga de garagem inclusa?',
        a: 'O apartamento possui uma vaga de garagem coberta.',
      },
      {
        q: 'Qual o valor do condomínio e do IPTU?',
        a: 'Os valores atuais de condomínio ficam em torno de R$400,00 reias e o IPTU R$800,00 .',
      },
      {
        q: 'Como agendar uma visita presencial?',
        a: 'Clique no botão "Agendar Visita" nesta página. Você será direcionado direto ao WhatsApp com uma mensagem pré-preenchida. Respondemos em minutos durante o horário comercial e agendamos no horário mais conveniente para você.',
      },
    ],
  }));

});

/* ================================
   Init after DOM + Alpine ready
   ================================ */
document.addEventListener('DOMContentLoaded', () => {

  // AOS — animate on scroll
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 750,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
    });
  }

  // Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Keyboard nav for lightbox (delegated)
  document.addEventListener('keydown', (e) => {
    const lb = document.querySelector('[data-lightbox]');
    if (!lb || lb.style.display === 'none') return;
    if (e.key === 'ArrowLeft')  lb.dispatchEvent(new CustomEvent('lightbox-prev'));
    if (e.key === 'ArrowRight') lb.dispatchEvent(new CustomEvent('lightbox-next'));
    if (e.key === 'Escape')     lb.dispatchEvent(new CustomEvent('lightbox-close'));
  });

});
