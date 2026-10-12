/**
 * REVITALIZE ROSTO E CORPO — CONFIGURAÇÃO CENTRAL
 * 
 * Centralização de dados da clínica, links de atendimento e mensagens contextuais.
 * Para atualizar o WhatsApp oficial, altere o valor do campo 'whatsapp' abaixo.
 * Formato exigido: Código do país (55) + DDD (ex: 69) + 9 dígitos, somente números.
 */

const clinicConfig = {
  name: "Revitalize Rosto e Corpo",
  subtitle: "Estética Facial e Corporal",
  slogan: "Seu melhor momento...",
  
  // ATENÇÃO: Substitua pelo número real fornecido pelo responsável.
  // Somente dígitos: Exemplo '5569992345678' (Porto Velho - RO)
  whatsapp: "5569999999999",
  
  instagram: {
    handle: "@revitalizerostoecorpo",
    url: "https://www.instagram.com/revitalizerostoecorpo/"
  },
  
  location: {
    city: "Porto Velho",
    state: "RO",
    modalidade: "Atendimento exclusivo com hora marcada"
  },

  // Mensagens contextuais personalizadas para cada CTA do site
  messages: {
    general: "Olá! Gostaria de conhecer os tratamentos da Revitalize Rosto e Corpo e saber como agendar uma avaliação.",
    hero: "Olá! Estive no site da Revitalize Rosto e Corpo e gostaria de agendar uma avaliação personalizada.",
    kellus: "Olá! Gostaria de entender melhor como funciona o Método Kellus-Df e agendar uma sessão na Revitalize.",
    peeling: "Olá! Me interessei pelo Peeling Herbal e gostaria de saber como funciona a renovação da pele na Revitalize.",
    facial: "Olá! Gostaria de saber mais sobre a limpeza de pele e os tratamentos faciais da Revitalize.",
    corporal: "Olá! Gostaria de informações sobre os tratamentos corporais e modelagem na Revitalize.",
    massagens: "Olá! Gostaria de agendar um horário para massagem e relaxamento na Revitalize.",
    professional: "Olá! Gostei muito da proposta da Revitalize e gostaria de agendar uma avaliação com a esteticista.",
    faq: "Olá! Li as dúvidas frequentes no site e gostaria de esclarecer uma pergunta sobre os procedimentos."
  },

  // Caminhos das fotografias oficiais com fallback resiliente
  images: {
    salaAmpla: {
      src: "assets/images/clinica-espaco-sala.png",
      fallback: "C:/Users/Win11/.gemini/antigravity/brain/c67f2e6f-3b20-4465-acb8-2b139d37eed9/.user_uploaded/media_1791824091314_dc8d4422.png",
      alt: "Espaço sofisticado da clínica Revitalize Rosto e Corpo com painel de madeira iluminado em LED e maca de atendimento"
    },
    detalheSala: {
      src: "assets/images/clinica-espaco-detalhe.png",
      fallback: "C:/Users/Win11/.gemini/antigravity/brain/c67f2e6f-3b20-4465-acb8-2b139d37eed9/.user_uploaded/media_1791824091266_c1c48f98.png",
      alt: "Maca de atendimento clínico, espelho de design orgânico e ambiente acolhedor"
    },
    profissional: {
      src: "assets/images/profissional-estetica.png",
      fallback: "C:/Users/Win11/.gemini/antigravity/brain/c67f2e6f-3b20-4465-acb8-2b139d37eed9/.user_uploaded/media_1791824091287_4a400857.png",
      alt: "Retrato oficial da profissional esteticista da Revitalize Rosto e Corpo"
    },
    kellusProcedimento1: {
      src: "assets/images/metodo-kellus-resultado-1.png",
      fallback: "C:/Users/Win11/.gemini/antigravity/brain/c67f2e6f-3b20-4465-acb8-2b139d37eed9/.user_uploaded/media_1791824091334_5eb96ac7.png",
      alt: "Procedimento corporal do Método Kellus-Df em execução na maca da clínica"
    },
    kellusProcedimento2: {
      src: "assets/images/metodo-kellus-resultado-2.png",
      fallback: "C:/Users/Win11/.gemini/antigravity/brain/c67f2e6f-3b20-4465-acb8-2b139d37eed9/.user_uploaded/media_1791824091376_1f5b7049.png",
      alt: "Resultado de contorno e desinchaço corporal com técnica especializada"
    }
  },

  /**
   * Constrói link wa.me padronizado e validado
   * @param {string} contextKey - chave da mensagem ou texto livre
   * @returns {string} URL pronta para redirecionamento
   */
  getWhatsAppLink(contextKey = "general") {
    const rawNumber = (this.whatsapp || "").replace(/\D/g, "");
    const msg = this.messages[contextKey] || contextKey || this.messages.general;
    const encoded = encodeURIComponent(msg);
    return `https://wa.me/${rawNumber}?text=${encoded}`;
  }
};

// Exporta globalmente para uso no browser e módulos
if (typeof window !== "undefined") {
  window.clinicConfig = clinicConfig;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = clinicConfig;
}
