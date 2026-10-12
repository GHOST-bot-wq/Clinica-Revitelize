# Revitalize Rosto e Corpo — Site Oficial Premium

Website oficial desenvolvido para a clínica **Revitalize Rosto e Corpo** (`@revitalizerostoecorpo`), especializada em estética facial, estética corporal, Método Kellus-Df, peeling herbal e bem-estar em Porto Velho - RO.

Conceito de design: **Luxo editorial acolhedor**, beleza natural e acabamento minucioso de agência.

---

## 📁 Estrutura de Arquivos

```
clinica 1/
├── index.html                  # Estrutura HTML5 semântica com 14 seções editoriais completas
├── README.md                   # Documentação do projeto
├── copiar-fotos.bat            # Script 1-clique para copiar as 5 fotos reais para assets/images/
├── copiar-fotos.ps1            # Script PowerShell alternativo para sincronização de fotos
├── css/
│   ├── variables.css           # Design tokens (paleta Marfim, Areia, Nude, Marrom, Deep Bronze)
│   ├── base.css                # Reset, tipografia (Cormorant Garamond + Plus Jakarta Sans) e acessibilidade
│   ├── components.css          # Botões, cards, acordeão FAQ, modal de agendamento e botão WhatsApp
│   ├── sections.css            # Estilização editorial das 14 seções
│   └── responsive.css          # Otimização para celulares (pequenos e grandes), tablets e desktops
├── js/
│   ├── config.js               # Centralização de dados (WhatsApp oficial, Instagram, textos de CTA)
│   ├── gallery.js              # Gerenciador resiliente de imagens reais com fallback automático
│   └── app.js                  # Navegação mobile, modal de agendamento, FAQ WAI-ARIA e animações
└── assets/
    ├── icons/
    │   ├── logo.svg            # Tipografia oficial e onda orgânica inspirada na parede da clínica
    │   └── favicon.svg         # Favicon exclusivo da marca
    └── images/
        └── README.md           # Guia de imagens e fotografias reais
```

---

## 🚀 Como Executar o Projeto

O projeto foi construído em arquitetura estática moderna (Zero-Config), de carregamento instantâneo:

1. **Abrir diretamente no navegador:**
   - Dê um duplo-clique no arquivo `index.html` (funciona em qualquer navegador moderno: Chrome, Edge, Safari, Firefox).
   
2. **Ou executar com qualquer servidor web local:**
   - Exemplo com Python: `python -m http.server 3000`
   - Exemplo com Node (Live Server / Vite): `npx serve .` ou `npx live-server`

---

## 📸 Fotografias Reais e Sincronização

As 5 fotografias reais fornecidas pela clínica já estão configuradas:
1. `clinica-espaco-sala.png`: Espaço amplo com maca, poltrona e painel de madeira iluminado com o slogan *"Seu melhor momento..."*.
2. `clinica-espaco-detalhe.png`: Maca de atendimento e espelho orgânico com iluminação em halo LED.
3. `profissional-estetica.png`: Retrato oficial da profissional/esteticista da clínica.
4. `metodo-kellus-resultado-1.png`: Registro real do procedimento corporal em execução na maca.
5. `metodo-kellus-resultado-2.png`: Registro de contorno e modelagem abdominal com técnica especializada.

> **Dica:** Para copiar as fotos para a pasta `assets/images/`, basta dar duplo-clique no arquivo `copiar-fotos.bat`.
> O site também possui um sistema inteligente de fallback no arquivo `js/gallery.js`, garantindo que nenhuma imagem apareça quebrada.

---

## 📱 Configuração do WhatsApp Oficial

Para atualizar o número oficial de WhatsApp da clínica:

1. Abra o arquivo `js/config.js`.
2. Altere a linha:
   ```javascript
   whatsapp: "5569999999999", // Insira DDI + DDD + 9 dígitos sem traços ou parênteses
   ```
3. Salve o arquivo. Todos os botões, CTAs e o modal de agendamento se atualizarão instantaneamente com links válidos no formato `https://wa.me/NUMERO?text=...`.

---

## ✨ Seções Implementadas

1. **Hero de Alto Impacto Editorial:** Assinatura tipográfica REVITALIZE, subtítulo ROSTO E CORPO, fotografia da sala com moldura orgânica, slogan *"Seu melhor momento..."*, headline e CTAs estratégicos.
2. **Apresentação da Revitalize:** Conceito de beleza natural, acolhimento sem padrões artificiais e escuta atenta.
3. **Tratamentos Faciais:** Limpeza de pele profunda, hidratação/nutrição dérmica e protocolos de rejuvenescimento.
4. **Tratamentos Corporais:** Drenagem linfática especializada, massagem modeladora e tratamentos para desinchaço.
5. **Método Kellus-Df (Destaque Exclusivo):** Bloco nobre em fundo escuro bronze, especificações técnicas e registros reais de procedimentos.
6. **Peeling Herbal:** Renovação biológica da pele sem agressões químicas corrosivas.
7. **Massagens e Bem-Estar:** Rituais de desconexão, relaxamento muscular e alívio do estresse.
8. **Apresentação da Profissional:** Retrato oficial com selo institucional e proposta de atendimento humanizado.
9. **Galeria de Fotos Reais:** Espaços autênticos da clínica em Porto Velho - RO e registros corporais.
10. **Depoimentos Autorizados:** Avaliações de clientes destacando leveza, acolhimento e resultados.
11. **Perguntas Frequentes (FAQ):** Acordeão acessível (WAI-ARIA) com respostas às principais dúvidas.
12. **Localização e Atendimento:** Informações sobre o atendimento com hora marcada e canal direto.
13. **CTA Final de Agendamento:** Banner com alto apelo visual e conversão para o WhatsApp.
14. **Rodapé Completo:** Assinatura de marca, links úteis, redes sociais e aviso legal.
