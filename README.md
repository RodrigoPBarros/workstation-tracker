# Workstation Tracker — Productivity Dashboard ⚡

Um dashboard de produtividade minimalista focado em alta performance. O projeto combina um cronômetro de foco estilo Pomodoro (*Deep Work*) com um gerenciador de missões diárias persistente, tudo sob uma estética industrial sóbria e sem distrações.

> 🌐 **Acesse o seu painel de foco:** [rodrigopbarros.github.io/workstation-tracker/](https://rodrigopbarros.github.io/workstation-tracker/)

---

### // Sobre o Projeto

O **Workstation Tracker** foi projetado para simular o painel de controle de uma estação de trabalho física. Ele une utilitários indispensáveis para rotinas de desenvolvimento em uma interface de tela única (*single-screen*), garantindo que o usuário mantenha o foco em suas tarefas diárias sem perder seu progresso ao recarregar a página.

---

### // Stack Técnica

* **HTML5 Semântico:** Estrutura focada em acessibilidade e legibilidade.
* **CSS3 Personalizado:**
  * Layout responsivo estruturado com **Flexbox** e **CSS Grid**.
  * Tipografia técnica utilizando fontes mono-espaçadas (*JetBrains Mono*).
  * Paleta de cores escura com acentos industriais em tons amadeirados e metálicos.
* **JavaScript Vanilla (ES6+):**
  * **Web Storage API (LocalStorage):** Persistência de dados local para gravação do estado da lista de tarefas.
  * **Asynchronous Timing:** Lógica de temporização precisa para o cronômetro e relógio global do sistema.
  * **Dynamic DOM Manipulation:** Criação, renderização e remoção em tempo real de elementos de interface com base em interações.

---

### // Funcionalidades e Soluções Técnicas

#### ⏱️ Focus Timer (Estilo Pomodoro)
* Cronômetro regressivo personalizável voltado para blocos de estudo ou programação intensa (*Deep Work*).
* Lógica assíncrona robusta que controla os estados de **Iniciar (Start)**, **Pausar (Pause)** e **Resetar (Reset)** sem atrasos de renderização.
* Alertas visuais e feedback sonoro ao concluir o tempo estipulado.

#### 📋 Gerenciador de Missões Inteligente
* Criação de tarefas com categorização integrada por etiquetas temáticas: `[CODE]`, `[GYM]` e `[SETUP]`.
* Sistema de remoção rápida e dinâmica de tarefas concluídas.

#### 💾 Camada de Persistência de Dados (Data Persistence)
Graças à integração com a **Web Storage API**, todo o progresso do gerenciador de missões e as configurações do usuário são salvos localmente no navegador. Os dados permanecem seguros mesmo se a aba for fechada ou a página atualizada.

#### 🕒 Relógio de Sistema em Tempo Real
Sincronização contínua com o horário local da máquina do usuário, exibido no topo do painel com atualização de segundos em tempo real para controle rigoroso de cronograma.

---

### // Direcionais de Estilo e Design (UI/UX)

O projeto se destaca pela sua forte direção de arte:
* **Tema Dark Sólido:** Reduz a fadiga ocular durante longas sessões de codificação noturna.
* **Estética Industrial:** Inspirada em hardware, maquinário e estações de trabalho de madeira e ferro.
* **Layout Compacto:** Design projetado para ocupar pouco espaço, ideal para ser utilizado em um segundo monitor como tela auxiliar de suporte.

---

### // Autor

* **Rodrigo Barros** — [GitHub @RodrigoPBarros](https://github.com/RodrigoPBarros)
