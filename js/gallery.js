/**
 * REVITALIZE ROSTO E CORPO — GESTÃO DE IMAGENS E GALERIA
 * Sistema com suporte a fallback dinâmico para garantir que fotos reais
 * sejam sempre exibidas sem quebras, mesmo antes do script de cópia ser executado.
 */

document.addEventListener("DOMContentLoaded", () => {
  initImageFallbackSystem();
});

/**
 * Inicializa fallback inteligente para todas as imagens da clínica
 */
function initImageFallbackSystem() {
  const images = document.querySelectorAll("img[data-fallback]");
  
  images.forEach(img => {
    img.addEventListener("error", function handleImgError() {
      const fallbackSrc = this.getAttribute("data-fallback");
      if (fallbackSrc && this.src !== fallbackSrc) {
        // Aplica o fallback de alta resolução do diretório original
        this.src = fallbackSrc;
      }
    });
  });
}
