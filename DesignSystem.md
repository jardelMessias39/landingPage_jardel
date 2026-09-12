# Design System Guidelines - Jardel Messias

## 1. Filosofia do Design
A identidade visual deve transmitir a percepção de uma empresa de tecnologia premium, organizada e altamente profissional. Devemos passar longe de layouts genéricos e templates de agências de marketing saturadas.

---

## 2. Tokens de Design (Paleta de Cores)

* **Primary (Fundo Principal):** Deep Navy (`#0B0F19`)
  * Transmite segurança, estabilidade e solidez.
* **Secondary (Texto & Estruturas):** Pure White (`#FFFFFF`) e Slate Gray (`#E2E8F0` / `#94A3B8`)
  * Utilizados para hierarquia de texto clara e legibilidade excelente.
* **Highlight Gold (Destaques e Ações):** Metallic Gold (`#D4AF37`)
  * Representa sofisticação, valor e exclusividade. Usado apenas em CTAs principais, badges de destaque ou ícones estratégicos.
* **Accent Blue (Detalhes Tecnológicos):** Cyber Blue (`#3B82F6` / `#60A5FA`)
  * Usado com moderação para glows, bordas reflexivas de cards, pontos ativos em diagramas de fluxo de IA e efeitos no chatbot.

---

## 3. Tipografia
Usaremos fontes limpas, modernas e sem serifa para transmitir precisão técnica:
* **Fontes Recomendadas:** `Inter` ou `Outfit` via Google Fonts.
* **Hierarquia:**
  * **H1 / H2:** Peso Bold (700) ou Semibold (600), com tracking ligeiramente reduzido para dar impacto visual corporativo.
  * **Corpo:** Peso Regular (400) com altura de linha adequada (`leading-relaxed`) para leitura sem esforço.

---

## 4. Princípios da Interface

1. **Clareza e Respiro:** Muito espaço em branco entre as seções. Evite amontoar elementos. Os cards e grids devem respirar.
2. **Glassmorphism:** Cards de serviço e projetos devem utilizar um visual translúcido de vidro sobre o fundo escuro:
   * `background: rgba(255, 255, 255, 0.03)`
   * `backdrop-filter: blur(12px)`
   * `border: 1px solid rgba(255, 255, 255, 0.08)`
3. **Interactive Shadows & Hover Glows:** Ao passar o mouse sobre botões e cards, eles devem suavemente elevar-se em 3D (tilt) e projetar um leve glow em ouro ou accent blue no fundo:
   * Efeito: `box-shadow: 0 0 20px rgba(59, 130, 246, 0.15)` (Accent Blue) ou `rgba(212, 175, 55, 0.15)` (Gold).
4. **Animações Fluidas:** Transições de opacidade (fade-in) e movimento (slide-in) acionadas por scroll devem ter curvas suaves de aceleração (`cubic-bezier(0.16, 1, 0.3, 1)`).
5. **Responsividade Integrada:** Nenhuma seção ou dado crucial do chatbot ou estudos de caso deve sumir no mobile; em vez disso, reorganizar layouts de flex/grid de colunas horizontais para colunas verticais.
