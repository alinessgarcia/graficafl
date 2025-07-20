# Conceito de Design - Site Gráfica FL

## Visão Geral
Site institucional moderno, leve e totalmente responsivo para a Gráfica FL, localizada em Guarujá/SP. O design deve transmitir profissionalismo, confiabilidade e acolhimento.

## Paleta de Cores
- **Azul Principal**: #004AAD (azul escuro para footer)
- **Azul Claro**: #E3F2FD (para gradientes e backgrounds)
- **Branco**: #FFFFFF (background principal)
- **Cinza Claro**: #F5F5F5 (para cards e seções)
- **Texto**: #333333 (texto principal)
- **Texto Secundário**: #666666

## Tipografia
- **Fonte Principal**: Poppins (Google Fonts)
- **Hierarquia**:
  - H1: 48px (desktop) / 32px (mobile)
  - H2: 36px (desktop) / 24px (mobile)
  - H3: 24px (desktop) / 20px (mobile)
  - Body: 16px
  - Small: 14px

## Layout e Estrutura

### 1. Hero Section
- Background: Gradiente suave de azul claro para branco
- Logo centralizado no topo
- Título principal: "Gráfica FL"
- Subtítulo: "Consultas Digitais & Impressões Rápidas em Segundos"
- CTA principal: Botão WhatsApp com hover effect (scale 1.05)

### 2. Seção de Serviços
- Grid responsivo: 3 colunas (desktop) / 1 coluna (mobile)
- Cards com:
  - Imagem placeholder
  - Título do serviço
  - Descrição breve
  - Efeito hover: box-shadow com glow
  - Animação de entrada: fade-in + translateY(20px)

### 3. Depoimentos
- Layout: 3 colunas (desktop) / 1 coluna (mobile)
- Animação escalonada: delay de 0.2s, 0.4s, 0.6s
- Cards com aspas, texto e nome do cliente

### 4. Elementos Fixos
- **Botão WhatsApp Flutuante**: 
  - Posição: fixed, bottom-right
  - Tamanho: 60x60px
  - Hover: elevação e mudança de cor
- **Aviso de Cookies**:
  - Banner discreto no rodapé
  - Altura: 60px
  - Background semitransparente

### 5. Footer
- Background: #004AAD
- Texto branco
- Informações da empresa e copyright

## Animações e Interações

### Scroll Animations
- Fade-in para cards de serviços
- Slide-up para depoimentos
- Smooth scroll geral

### Hover Effects
- Botões: scale(1.05) + box-shadow
- Cards: glow effect
- Links: color transition

### Micro-interações
- Loading states
- Button feedback
- Smooth transitions (0.3s ease)

## Responsividade

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Adaptações Mobile
- Menu hamburger (se necessário)
- Cards em coluna única
- Texto reduzido
- Botões maiores para touch
- Espaçamento otimizado

## Acessibilidade
- Contraste adequado (WCAG AA)
- Textos alternativos para imagens
- Navegação por teclado
- Semântica HTML correta
- Tamanhos de fonte legíveis

## Tecnologias
- HTML5 semântico
- CSS3 com Flexbox/Grid
- JavaScript vanilla para interações
- AOS (Animate On Scroll) para animações
- Google Fonts para tipografia

