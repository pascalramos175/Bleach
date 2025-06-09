// CLASSES DISPONÍVEIS (sem descrição poluída)
const CLASSES = [
  { nome: "Guerreiro" },
  { nome: "Arqueiro" },
  { nome: "Mago" },
  { nome: "Ninja" }
];

// PERSONAGENS
const personagens = [
  {
    nome: "Léo",
    cor: "#1e88e5",
    velocidade: 3.5,
    alcance: 45,
    dano: 17,
    habilidades: [
      { nome: "Soco Ágil", dano: 17, energia: 10, key: "F", efeito: "golpePoderoso" },
      { nome: "Patada Giratória", dano: 21, energia: 18, key: "G", efeito: "golpePoderoso" },
      { nome: "Rugido Leão (Especial)", dano: 38, energia: 50, key: "H", efeito: "ondaSom", cooldown: 8 }
    ],
    img: "🦁",
    classe: CLASSES[0].nome
  },
  {
    nome: "Valentina",
    cor: "#e53935",
    velocidade: 2.5,
    alcance: 70,
    dano: 13,
    habilidades: [
      { nome: "Flecha", dano: 13, energia: 10, key: "F", efeito: "flechaRapida" },
      { nome: "Chute Longo", dano: 16, energia: 13, key: "G", efeito: "golpePoderoso" },
      { nome: "Tempestade de Flechas (Especial)", dano: 30, energia: 45, key: "H", efeito: "flechaRapida", cooldown: 6 }
    ],
    img: "🏹",
    classe: CLASSES[1].nome
  },
  {
    nome: "Bolt",
    cor: "#ffe000",
    velocidade: 4.6,
    alcance: 35,
    dano: 12,
    habilidades: [
      { nome: "Relâmpago", dano: 13, energia: 8, key: "F", efeito: "golpePoderoso" },
      { nome: "Dash Duplo", dano: 18, energia: 18, key: "G", efeito: "golpePoderoso" },
      { nome: "Carga Elétrica (Especial)", dano: 38, energia: 55, key: "H", efeito: "golpePoderoso", cooldown: 7 }
    ],
    img: "⚡",
    classe: CLASSES[3].nome
  },
  {
    nome: "Blaze",
    cor: "#d84315",
    velocidade: 2.9,
    alcance: 50,
    dano: 15,
    habilidades: [
      { nome: "Chama", dano: 15, energia: 11, key: "F", efeito: "bolaFogo" },
      { nome: "Explosão", dano: 22, energia: 24, key: "G", efeito: "golpePoderoso" },
      { nome: "Mega Fogo (Especial)", dano: 44, energia: 60, key: "H", efeito: "bolaFogo", cooldown: 8 }
    ],
    img: "🔥",
    classe: CLASSES[2].nome
  }
];

// Estado global e DOM (permanece igual à sua versão atual)

// -------- CLASSES --------
function preencherSelectClasse() {
  [1,2].forEach(num => {
    const select = document.getElementById("classe-select-"+num);
    select.innerHTML = "";
    CLASSES.forEach((c, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.innerText = c.nome;
      select.appendChild(opt);
    });
    select.onchange = () => {
      // Só muda a classe no objeto, não exibe descrição!
      if (num === 1) {
        jogador1.classe = CLASSES[+select.value].nome;
      } else {
        jogador2.classe = CLASSES[+select.value].nome;
      }
    };
    select.value = num-1;
    select.onchange();
  });
}

// -------- ATUALIZAR SELEÇÃO (NOVA) --------
function atualizarSelecao() {
  jogador1 = { idx: jogador1.idx, ...personagens[jogador1.idx] };
  jogador2 = { idx: jogador2.idx, ...personagens[jogador2.idx] };
  // Ícones
  document.getElementById("icon-jogador1").textContent = jogador1.img;
  document.getElementById("icon-jogador2").textContent = cpuSelecionado ? jogador2.img : "";
  // Infos (sem descrição poluída, só nome e habilidades)
  document.getElementById("display-jogador1").innerHTML =
    `<b>${jogador1.nome}</b><br>
    ${jogador1.habilidades[0].key}: ${jogador1.habilidades[0].nome}<br>
    ${jogador1.habilidades[1].key}: ${jogador1.habilidades[1].nome}<br>
    ${jogador1.habilidades[2].key}: ${jogador1.habilidades[2].nome}`;
  document.getElementById("display-jogador2").innerHTML = cpuSelecionado
    ? `<b>${jogador2.nome}</b><br>
      ${jogador2.habilidades[0].key}: ${jogador2.habilidades[0].nome}<br>
      ${jogador2.habilidades[1].key}: ${jogador2.habilidades[1].nome}<br>
      ${jogador2.habilidades[2].key}: ${jogador2.habilidades[2].nome}`
    : "Aguardando seleção";
  // Classe select
  classeSelect1.value = CLASSES.findIndex(c => c.nome === jogador1.classe) >= 0 ? CLASSES.findIndex(c => c.nome === jogador1.classe) : 0;
  classeSelect1.onchange();
  classeSelect2.value = CLASSES.findIndex(c => c.nome === jogador2.classe) >= 0 ? CLASSES.findIndex(c => c.nome === jogador2.classe) : 1;
  classeSelect2.onchange();
}


// -------- CLASSES --------
function preencherSelectClasse() {
  [1,2].forEach(num => {
    const select = document.getElementById("classe-select-"+num);
    select.innerHTML = "";
    CLASSES.forEach((c, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.innerText = c.nome;
      select.appendChild(opt);
    });
    select.onchange = () => {
      // Só muda a classe no objeto, não exibe descrição!
      if (num === 1) {
        jogador1.classe = CLASSES[+select.value].nome;
      } else {
        jogador2.classe = CLASSES[+select.value].nome;
      }
    };
    select.value = num-1;
    select.onchange();
  });
}

// -------- ATUALIZAR SELEÇÃO (NOVA) --------
function atualizarSelecao() {
  jogador1 = { idx: jogador1.idx, ...personagens[jogador1.idx] };
  jogador2 = { idx: jogador2.idx, ...personagens[jogador2.idx] };
  // Ícones
  document.getElementById("icon-jogador1").textContent = jogador1.img;
  document.getElementById("icon-jogador2").textContent = cpuSelecionado ? jogador2.img : "";
  // Infos (sem descrição poluída, só nome e habilidades)
  document.getElementById("display-jogador1").innerHTML =
    `<b>${jogador1.nome}</b><br>
    ${jogador1.habilidades[0].key}: ${jogador1.habilidades[0].nome}<br>
    ${jogador1.habilidades[1].key}: ${jogador1.habilidades[1].nome}<br>
    ${jogador1.habilidades[2].key}: ${jogador1.habilidades[2].nome}`;
  document.getElementById("display-jogador2").innerHTML = cpuSelecionado
    ? `<b>${jogador2.nome}</b><br>
      ${jogador2.habilidades[0].key}: ${jogador2.habilidades[0].nome}<br>
      ${jogador2.habilidades[1].key}: ${jogador2.habilidades[1].nome}<br>
      ${jogador2.habilidades[2].key}: ${jogador2.habilidades[2].nome}`
    : "Aguardando seleção";
  // Classe select
  classeSelect1.value = CLASSES.findIndex(c => c.nome === jogador1.classe) >= 0 ? CLASSES.findIndex(c => c.nome === jogador1.classe) : 0;
  classeSelect1.onchange();
  classeSelect2.value = CLASSES.findIndex(c => c.nome === jogador2.classe) >= 0 ? CLASSES.findIndex(c => c.nome === jogador2.classe) : 1;
  classeSelect2.onchange();
}
// Estado global
let modoJogo = "pvc";
let dificuldade = "normal";
let jogador1 = { idx: 0, ...personagens[0] };
let jogador2 = { idx: 1, ...personagens[1] };
let playerSelecionado = false, cpuSelecionado = false;
let partidaEmAndamento = false;
let cronometro = 99;
let pontuacao = { combos: 0, acertos: 0, tempo: 0 };

// DOM
const $ = s => document.querySelector(s);
const telaInicial = $("#tela-inicial");
const telaModos = $("#tela-modos");
const telaSelecao = $("#tela-selecao");
const telaArena = $("#tela-arena");
const modalFinal = $("#modal-final");
const pontuacaoFinal = $("#pontuacao-final");

// Arena
const arenaCenario = $("#arena-cenario");
const playerEl = $("#player");
const cpuEl = $("#cpu");
const spritePlayer = $("#sprite-player");
const spriteCpu = $("#sprite-cpu");
const hudPlayerVida = $("#hud-player .vida-bar");
const hudPlayerEnergia = $("#hud-player .energia-bar");
const hudPlayerEspecial = $("#hud-player .especial-bar");
const hudCpuVida = $("#hud-cpu .vida-bar");
const hudCpuEnergia = $("#hud-cpu .energia-bar");
const hudCpuEspecial = $("#hud-cpu .especial-bar");
const hudTimer = $("#hud-timer");
const nomePlayer = $("#nome-player");
const nomeCpu = $("#nome-cpu");

// Seleção
const displayJogador1 = $("#display-jogador1");
const displayJogador2 = $("#display-jogador2");
const btnPrev1 = $("#btn-prev-1");
const btnNext1 = $("#btn-next-1");
const btnSelecionar1 = $("#btn-selecionar-1");
const btnPrev2 = $("#btn-prev-2");
const btnNext2 = $("#btn-next-2");
const btnSelecionar2 = $("#btn-selecionar-2");
const btnSelecionarCpu = $("#btn-selecionar-cpu");
const btnIniciarJogo = $("#btn-iniciar-jogo");
const tituloJogador2 = $("#titulo-jogador2");

// Classes
const classeSelect1 = $("#classe-select-1");
const classeDesc1 = $("#classe-desc-1");
const classeSelect2 = $("#classe-select-2");
const classeDesc2 = $("#classe-desc-2");

// Modos
const btnModoPvp = $("#btn-modo-pvp");
const btnModoPvc = $("#btn-modo-pvc");
const btnTreino = $("#btn-treino");

// Instruções
const painelControles2 = $("#painel-controles2");
const instrucoesArena = $("#instrucoes-arena");

// Sons
const somGolpe = $("#som-golpe");
const somBloqueio = $("#som-bloqueio");
const somEspecial = $("#som-especial");
const somVitoria = $("#som-vitoria");
const somDerrota = $("#som-derrota");

// -------- CLASSES --------
function preencherSelectClasse() {
  [1,2].forEach(num => {
    const select = $("#classe-select-"+num);
    select.innerHTML = "";
    CLASSES.forEach((c, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.innerText = c.nome;
      select.appendChild(opt);
    });
    select.onchange = () => {
      $("#classe-desc-"+num).innerText = CLASSES[+select.value].descricao;
      if (num === 1) {
        jogador1.classe = CLASSES[+select.value].nome;
        jogador1.descClasse = CLASSES[+select.value].descricao;
      } else {
        jogador2.classe = CLASSES[+select.value].nome;
        jogador2.descClasse = CLASSES[+select.value].descricao;
      }
    };
    select.value = num-1;
    select.onchange();
  });
}

// -------- UTILITÁRIOS -----------------
function exibirTela(tela) {
  [telaInicial, telaModos, telaSelecao, telaArena].forEach(sec => sec.classList.remove("active"));
  tela.classList.add("active");
}
function resetSelecao() {
  playerSelecionado = false;
  cpuSelecionado = false;
  jogador1.idx = 0;
  jogador2.idx = 1;
  atualizarSelecao();
  btnSelecionar1.disabled = false;
  btnSelecionar2.disabled = false;
  btnSelecionarCpu.disabled = false;
  btnIniciarJogo.style.display = "none";
  displayJogador2.textContent = "Aguardando seleção";
  preencherSelectClasse();
}
function atualizarSelecao() {
  jogador1 = { idx: jogador1.idx, ...personagens[jogador1.idx] };
  jogador2 = { idx: jogador2.idx, ...personagens[jogador2.idx] };
  displayJogador1.innerHTML = `<span style="font-size:2.5rem;">${jogador1.img}</span><br>${jogador1.descricao}`;
  displayJogador2.innerHTML = cpuSelecionado
    ? `<span style="font-size:2.5rem;">${jogador2.img}</span><br>${jogador2.descricao}`
    : "Aguardando seleção";
  classeSelect1.value = CLASSES.findIndex(c => c.nome === jogador1.classe) >= 0 ? CLASSES.findIndex(c => c.nome === jogador1.classe) : 0;
  classeSelect1.onchange();
  classeSelect2.value = CLASSES.findIndex(c => c.nome === jogador2.classe) >= 0 ? CLASSES.findIndex(c => c.nome === jogador2.classe) : 1;
  classeSelect2.onchange();
}
function randomPersonagem(excludeIdx) {
  let idx;
  do { idx = Math.floor(Math.random() * personagens.length); }
  while (idx === excludeIdx);
  return idx;
}
function controlesJogador2Texto(modo) {
  if (modo === "pvp") {
    return `<h4>Controles Jogador 2</h4>
      <ul>
        <li><b>↑/←/↓/→</b>: Mover</li>
        <li><b>L</b>: Ataque 1</li>
        <li><b>M</b>: Ataque 2</li>
        <li><b>P</b>: Ataque Especial</li>
        <li><b>K</b>: Defender</li>
        <li><b>O</b>: Carregar Estamina</li>
        <li><b>I</b>: Dash/Esquiva</li>
        <li><b>/</b>: Pular</li>
      </ul>
    `;
  }
  return "";
}

// ---- EVENTOS DE NAVEGAÇÃO ----
$("#btn-iniciar").onclick = () => {
  exibirTela(telaModos);
};
$("#btn-opcoes").onclick = () => alert("Opções ainda não implementadas.");
$("#btn-sair").onclick = () => window.close();

btnModoPvp.onclick = () => {
  modoJogo = "pvp";
  tituloJogador2.textContent = "Jogador 2";
  painelControles2.innerHTML = controlesJogador2Texto("pvp");
  exibirTela(telaSelecao);
  resetSelecao();
};
btnModoPvc.onclick = () => {
  modoJogo = "pvc";
  tituloJogador2.textContent = "CPU";
  painelControles2.innerHTML = "";
  exibirTela(telaSelecao);
  resetSelecao();
};
btnTreino.onclick = () => {
  modoJogo = "treino";
  tituloJogador2.textContent = "CPU (Parada)";
  painelControles2.innerHTML = "";
  exibirTela(telaSelecao);
  resetSelecao();
};

// ---- SELEÇÃO DE PERSONAGEM ----
btnPrev1.onclick = () => {
  jogador1.idx = (jogador1.idx + personagens.length - 1) % personagens.length;
  atualizarSelecao();
};
btnNext1.onclick = () => {
  jogador1.idx = (jogador1.idx + 1) % personagens.length;
  atualizarSelecao();
};
btnSelecionar1.onclick = () => {
  playerSelecionado = true;
  btnSelecionar1.disabled = true;
  displayJogador1.innerHTML += "<br><small>Selecionado!</small>";
  if (modoJogo === "pvc" || modoJogo === "treino") {
    btnSelecionarCpu.disabled = false;
    btnSelecionar2.disabled = true;
  }
  if (modoJogo === "pvp") btnSelecionar2.disabled = false;
  if (cpuSelecionado) btnIniciarJogo.style.display = "inline-block";
};

btnPrev2.onclick = () => {
  jogador2.idx = (jogador2.idx + personagens.length - 1) % personagens.length;
  atualizarSelecao();
};
btnNext2.onclick = () => {
  jogador2.idx = (jogador2.idx + 1) % personagens.length;
  atualizarSelecao();
};
btnSelecionar2.onclick = () => {
  if (jogador2.idx === jogador1.idx) {
    alert("Escolha um personagem diferente do Jogador 1!");
    return;
  }
  cpuSelecionado = true;
  btnSelecionar2.disabled = true;
  displayJogador2.innerHTML += "<br><small>Selecionado!</small>";
  if (playerSelecionado) btnIniciarJogo.style.display = "inline-block";
};
btnSelecionarCpu.onclick = () => {
  jogador2.idx = randomPersonagem(jogador1.idx);
  atualizarSelecao();
  cpuSelecionado = true;
  btnSelecionarCpu.disabled = true;
  displayJogador2.innerHTML += "<br><small>Selecionado!</small>";
  if (playerSelecionado) btnIniciarJogo.style.display = "inline-block";
};
btnIniciarJogo.onclick = () => {
  iniciarBatalha();
};

// ---- SISTEMA DE JOGO/COMBATE ----
function iniciarBatalha() {
  // Estado dos jogadores
  const state1 = {
    ...personagens[jogador1.idx],
    classe: jogador1.classe,
    descClasse: jogador1.descClasse,
    x: 120, y: 366, vida: 100, energia: 100, especial: 100, bloqueando: false, vulneravel: false, combo: 0,
    cooldowns: {F:0, G:0, H:0}, pulando: false
  };
  const state2 = {
    ...personagens[jogador2.idx],
    classe: jogador2.classe,
    descClasse: jogador2.descClasse,
    x: 715, y: 366, vida: 100, energia: 100, especial: 100, bloqueando: false, vulneravel: false, combo: 0,
    cooldowns: {F:0, G:0, H:0}, pulando: false
  };
  if (modoJogo === "treino") state2.iaParada = true;
  let controle1 = { cima: false, baixo: false, esq: false, dir: false, ataque1: false, ataque2: false, especial: false, bloquear: false, energia: false, esquiva: false, pulo: false };
  let controle2 = { cima: false, baixo: false, esq: false, dir: false, ataque1: false, ataque2: false, especial: false, bloquear: false, energia: false, esquiva: false, pulo: false };

  // Arena/hud
  partidaEmAndamento = true;
  exibirTela(telaArena);
  modalFinal.style.display = "none";
  nomePlayer.innerHTML = `${state1.nome} <span class="classe-label">[${state1.classe}]</span>`;
  nomeCpu.innerHTML = `${state2.nome} <span class="classe-label">[${state2.classe}]</span>`;
  [hudPlayerVida, hudPlayerEnergia, hudPlayerEspecial, hudCpuVida, hudCpuEnergia, hudCpuEspecial].forEach(e=>e.style.width="100%");
  cronometro = 99;
  hudTimer.textContent = cronometro;
  pontuacao = { combos: 0, acertos: 0, tempo: 0 };
  playerEl.style.left = state1.x + "px"; playerEl.style.bottom = "60px";
  cpuEl.style.left = state2.x + "px"; cpuEl.style.bottom = "60px";
  playerEl.style.background = state1.cor;
  cpuEl.style.background = state2.cor;
  spritePlayer.innerHTML = `${state1.img}`;
  spriteCpu.innerHTML = `${state2.img}`;
  instrucoesArena.innerHTML = `
    <small>
      Todos os personagens têm 3 habilidades:<br>
      <b>F</b>: Ataque 1 | <b>G</b>: Ataque 2 | <b>H</b>: Especial<br>
      <b>E</b>: Defender | <b>R</b>: Carregar Energia | <b>Q</b>: Dash/Esquiva | <b>Espaço</b>: Pular
    </small>
  `;

  // --- CONTROLES TECLADO --- //
  document.onkeydown = (e) => {
    if (!partidaEmAndamento) return;
    if (["w","a","s","d","f","g","h","e","r","q"," "].includes(e.key.toLowerCase()) || e.code === "Space") {
      if (e.key.toLowerCase() === "w") controle1.cima = true;
      if (e.key.toLowerCase() === "a") controle1.esq = true;
      if (e.key.toLowerCase() === "s") controle1.baixo = true;
      if (e.key.toLowerCase() === "d") controle1.dir = true;
      if (e.key.toLowerCase() === "f") controle1.ataque1 = true;
      if (e.key.toLowerCase() === "g") controle1.ataque2 = true;
      if (e.key.toLowerCase() === "h") controle1.especial = true;
      if (e.key.toLowerCase() === "e") controle1.bloquear = true;
      if (e.key.toLowerCase() === "r") controle1.energia = true;
      if (e.key.toLowerCase() === "q") controle1.esquiva = true;
      if (e.code === "Space") controle1.pulo = true;
      e.preventDefault();
    }
    if (modoJogo === "pvp" && ["arrowup","arrowdown","arrowleft","arrowright","l","m","p","k","o","i","/"].includes(e.key.toLowerCase())) {
      if (e.key.toLowerCase() === "arrowup") controle2.cima = true;
      if (e.key.toLowerCase() === "arrowleft") controle2.esq = true;
      if (e.key.toLowerCase() === "arrowdown") controle2.baixo = true;
      if (e.key.toLowerCase() === "arrowright") controle2.dir = true;
      if (e.key.toLowerCase() === "l") controle2.ataque1 = true;
      if (e.key.toLowerCase() === "m") controle2.ataque2 = true;
      if (e.key.toLowerCase() === "p") controle2.especial = true;
      if (e.key.toLowerCase() === "k") controle2.bloquear = true;
      if (e.key.toLowerCase() === "o") controle2.energia = true;
      if (e.key.toLowerCase() === "i") controle2.esquiva = true;
      if (e.key === "/") controle2.pulo = true;
      e.preventDefault();
    }
  };
  document.onkeyup = (e) => {
    if (["w","a","s","d","f","g","h","e","r","q"," "].includes(e.key.toLowerCase()) || e.code === "Space") {
      if (e.key.toLowerCase() === "w") controle1.cima = false;
      if (e.key.toLowerCase() === "a") controle1.esq = false;
      if (e.key.toLowerCase() === "s") controle1.baixo = false;
      if (e.key.toLowerCase() === "d") controle1.dir = false;
      if (e.key.toLowerCase() === "f") controle1.ataque1 = false;
      if (e.key.toLowerCase() === "g") controle1.ataque2 = false;
      if (e.key.toLowerCase() === "h") controle1.especial = false;
      if (e.key.toLowerCase() === "e") controle1.bloquear = false;
      if (e.key.toLowerCase() === "r") controle1.energia = false;
      if (e.key.toLowerCase() === "q") controle1.esquiva = false;
      if (e.code === "Space") controle1.pulo = false;
    }
    if (modoJogo === "pvp" && ["arrowup","arrowdown","arrowleft","arrowright","l","m","p","k","o","i","/"].includes(e.key.toLowerCase())) {
      if (e.key.toLowerCase() === "arrowup") controle2.cima = false;
      if (e.key.toLowerCase() === "arrowleft") controle2.esq = false;
      if (e.key.toLowerCase() === "arrowdown") controle2.baixo = false;
      if (e.key.toLowerCase() === "arrowright") controle2.dir = false;
      if (e.key.toLowerCase() === "l") controle2.ataque1 = false;
      if (e.key.toLowerCase() === "m") controle2.ataque2 = false;
      if (e.key.toLowerCase() === "p") controle2.especial = false;
      if (e.key.toLowerCase() === "k") controle2.bloquear = false;
      if (e.key.toLowerCase() === "o") controle2.energia = false;
      if (e.key.toLowerCase() === "i") controle2.esquiva = false;
      if (e.key === "/") controle2.pulo = false;
    }
  };

  // --- LÓGICA PRINCIPAL DA PARTIDA --- //
  function loopBatalha() {
    if (!partidaEmAndamento) return;
    moverLutador(state1, controle1, true);
    if (modoJogo === "pvp") moverLutador(state2, controle2, false);
    if (modoJogo !== "pvp") iaCPU(state2, state1);

    // Ataques e habilidades
    if (controle1.ataque1) usarHabilidade(0, state1, state2, spritePlayer, spriteCpu, true);
    if (controle1.ataque2) usarHabilidade(1, state1, state2, spritePlayer, spriteCpu, true);
    if (controle1.especial) usarHabilidade(2, state1, state2, spritePlayer, spriteCpu, true);
    if (controle1.bloquear) bloquear(state1, playerEl);
    if (controle1.energia) carregarEnergia(state1, playerEl);
    if (controle1.esquiva) dash(state1, playerEl, true);
    if (controle1.pulo && !state1.pulando) pular(state1, spritePlayer);

    if (modoJogo === "pvp") {
      if (controle2.ataque1) usarHabilidade(0, state2, state1, spriteCpu, spritePlayer, false);
      if (controle2.ataque2) usarHabilidade(1, state2, state1, spriteCpu, spritePlayer, false);
      if (controle2.especial) usarHabilidade(2, state2, state1, spriteCpu, spritePlayer, false);
      if (controle2.bloquear) bloquear(state2, cpuEl);
      if (controle2.energia) carregarEnergia(state2, cpuEl);
      if (controle2.esquiva) dash(state2, cpuEl, false);
      if (controle2.pulo && !state2.pulando) pular(state2, spriteCpu);
    }

    atualizarHUD(state1, state2);
    atualizarBarras(state1, state2);

    if (state1.vida <= 0 || state2.vida <= 0 || cronometro <= 0) {
      partidaEmAndamento = false;
      setTimeout(() => fimDePartida(state1, state2), 600);
      return;
    }
    requestAnimationFrame(loopBatalha);
  }

  // Cronômetro
  clearInterval(window._timerInterval);
  hudTimer.textContent = cronometro;
  window._timerInterval = setInterval(() => {
    if (!partidaEmAndamento) return;
    cronometro--;
    hudTimer.textContent = cronometro;
    if (cronometro <= 0) {
      clearInterval(window._timerInterval);
    }
  }, 1000);

  setTimeout(loopBatalha, 80);
}

function moverLutador(state, controle, isPlayer1) {
  const minX = 10, maxX = 820;
  let vel = (controle.esquiva ? state.velocidade * 2.1 : state.velocidade);
  if (controle.esq && !controle.bloquear) state.x = Math.max(minX, state.x - vel);
  if (controle.dir && !controle.bloquear) state.x = Math.min(maxX, state.x + vel);
  const el = isPlayer1 ? playerEl : cpuEl;
  el.style.left = state.x + "px";
}
function usarHabilidade(idxH, atacante, defensor, elAtacante, elDefensor, isPlayer1) {
  const hab = atacante.habilidades[idxH];
  if (atacante.cooldowns[hab.key] > 0) return;
  if (atacante.energia < hab.energia) return;
  atacante.energia -= hab.energia;
  elAtacante.style.boxShadow = "0 0 20px #fff176";
  setTimeout(() => elAtacante.style.boxShadow = "", 180);
  // Efeito visual
  if (hab.efeito === "golpePoderoso") efeitoEspecialGolpe(elAtacante, isPlayer1);
  if (hab.efeito === "flechaRapida") efeitoEspecialFlecha(elAtacante, isPlayer1);
  if (hab.efeito === "bolaFogo") efeitoBolaFogo(elAtacante, isPlayer1);
  if (hab.efeito === "ondaSom") efeitoOndaSom(elAtacante, isPlayer1);
  // Dano, só se não está pulando!
  if (!defensor.pulando && Math.abs(atacante.x - defensor.x) <= atacante.alcance + (idxH === 2? 35 : 0)) {
    if (defensor.bloqueando) {
      somBloqueio.currentTime = 0; somBloqueio.play();
      defensor.vida -= Math.floor(hab.dano / 3);
      defensor.energia += 6;
      efeitoBloqueio(defensor, elDefensor.parentNode);
    } else {
      somGolpe.currentTime = 0; somGolpe.play();
      defensor.vida -= hab.dano;
      pontuacao.acertos++;
      atacante.combo++;
      pontuacao.combos = Math.max(pontuacao.combos, atacante.combo);
      efeitoDano(elDefensor);
      defensor.vulneravel = true;
      setTimeout(() => defensor.vulneravel = false, 350);
    }
  } else {
    atacante.combo = 0;
  }
  // Cooldown especial
  if (hab.cooldown) {
    atacante.cooldowns[hab.key] = hab.cooldown;
    const loop = setInterval(() => {
      atacante.cooldowns[hab.key]--;
      if (atacante.cooldowns[hab.key]<=0) clearInterval(loop);
    }, 1000);
  }
  // Som especial
  if (idxH === 2) {
    somEspecial.currentTime = 0; somEspecial.play();
    if (isPlayer1) document.onkeyup({ key: "h" }); else document.onkeyup({ key: "p" });
  } else {
    if (idxH === 0) { if (isPlayer1) document.onkeyup({ key: "f" }); else document.onkeyup({ key: "l" }); }
    if (idxH === 1) { if (isPlayer1) document.onkeyup({ key: "g" }); else document.onkeyup({ key: "m" }); }
  }
}
function bloquear(jogador, el) {
  jogador.bloqueando = true;
  el.style.background = "#555";
  setTimeout(() => {
    jogador.bloqueando = false;
    el.style.background = jogador.cor;
  }, 340);
}
function carregarEnergia(jogador, el) {
  jogador.energia = Math.min(100, jogador.energia + 1.0);
  el.style.boxShadow = "0 0 13px #2196f3";
  setTimeout(() => el.style.boxShadow = "", 170);
}
function dash(jogador, el, isPlayer1) {
  if (jogador.energia < 16) return;
  jogador.energia -= 14;
  el.style.boxShadow = "0 0 18px #b68d1b";
  el.style.opacity = "0.64";
  setTimeout(() => {
    el.style.boxShadow = "";
    el.style.opacity = "1";
  }, 210);
  if (isPlayer1) document.onkeyup({key:"q"}); else document.onkeyup({key:"i"});
}
function pular(jogador, elSprite) {
  if (jogador.pulando) return;
  jogador.pulando = true;
  elSprite.classList.add('pulando');
  setTimeout(()=>{
    jogador.pulando = false;
    elSprite.classList.remove('pulando');
  }, 600);
}
function atualizarHUD(state1, state2) {
  hudPlayerVida.style.width = Math.max(0, state1.vida) + "%";
  hudPlayerEnergia.style.width = Math.max(0, state1.energia) + "%";
  hudPlayerEspecial.style.width = Math.max(0, 100 - state1.cooldowns.H*14) + "%";
  hudCpuVida.style.width = Math.max(0, state2.vida) + "%";
  hudCpuEnergia.style.width = Math.max(0, state2.energia) + "%";
  hudCpuEspecial.style.width = Math.max(0, 100 - state2.cooldowns.H*14) + "%";
  spritePlayer.innerHTML = `${state1.img}`;
  spriteCpu.innerHTML = `${state2.img}`;
}
function atualizarBarras(state1, state2) {
  let v1 = Math.max(0, state1.vida) + "%";
  let e1 = Math.max(0, state1.energia) + "%";
  $("#barra-vida-player").innerHTML = `<div class="progresso" style="width:${v1}"></div>`;
  $("#barra-estamina-player").innerHTML = `<div class="progresso" style="width:${e1}"></div>`;
  let v2 = Math.max(0, state2.vida) + "%";
  let e2 = Math.max(0, state2.energia) + "%";
  $("#barra-vida-cpu").innerHTML = `<div class="progresso" style="width:${v2}"></div>`;
  $("#barra-estamina-cpu").innerHTML = `<div class="progresso" style="width:${e2}"></div>`;
}
function fimDePartida(state1, state2) {
  modalFinal.style.display = "flex";
  let resultado, audio;
  if (state1.vida > state2.vida) {
    resultado = "Vitória!";
    audio = somVitoria;
  } else if (state2.vida > state1.vida) {
    resultado = "Derrota!";
    audio = somDerrota;
  } else {
    resultado = "Empate!";
    audio = somDerrota;
  }
  $("#resultado-titulo").textContent = resultado;
  pontuacao.tempo = 99 - cronometro;
  pontuacaoFinal.innerHTML = `
    <p><strong>Pontuação:</strong></p>
    <ul>
      <li>Combos máximos: ${pontuacao.combos}</li>
      <li>Acertos: ${pontuacao.acertos}</li>
      <li>Tempo: ${pontuacao.tempo}s</li>
    </ul>`;
  somVitoria.pause(); somDerrota.pause();
  audio.currentTime = 0; audio.play();
  $("#btn-tentar").onclick = () => iniciarBatalha();
  $("#btn-mudar").onclick = () => {
    exibirTela(telaSelecao);
    resetSelecao();
    modalFinal.style.display = "none";
  };
}
function efeitoDano(el) {
  el.classList.add('hit');
  setTimeout(()=>el.classList.remove('hit'), 180);
}
function efeitoEspecialGolpe(el, isPlayer1) {
  const ef = document.createElement("div");
  ef.className = "golpe-poderoso";
  ef.style.left = (isPlayer1 ? "60px" : "-10px");
  ef.style.bottom = "30px";
  el.appendChild(ef);
  setTimeout(() => ef.remove(), 400);
}
function efeitoEspecialFlecha(el, isPlayer1) {
  const ef = document.createElement("div");
  ef.className = "flecha-rapida";
  ef.style.left = (isPlayer1 ? "65px" : "-70px");
  ef.style.bottom = "32px";
  ef.style.width = "120px";
  el.appendChild(ef);
  setTimeout(() => ef.remove(), 400);
}
function efeitoBolaFogo(el, isPlayer1) {
  const ef = document.createElement("div");
  ef.className = "bola-fogo";
  ef.style.left = (isPlayer1 ? "45px" : "-55px");
  ef.style.bottom = "26px";
  el.appendChild(ef);
  setTimeout(() => ef.remove(), 700);
}
function efeitoOndaSom(el, isPlayer1) {
  const ef = document.createElement("div");
  ef.className = "onda-som";
  ef.style.left = (isPlayer1 ? "65px" : "-80px");
  ef.style.bottom = "32px";
  el.appendChild(ef);
  setTimeout(() => ef.remove(), 350);
}

// --- IA SIMPLES DA CPU --- //
function iaCPU(cpu, player) {
  if (cpu.iaParada) return;
  let diff = 1;
  if (dificuldade === "facil")     { diff = 0.6; }
  else if (dificuldade === "dificil") { diff = 1.2; }
  if (Math.abs(cpu.x - player.x) > cpu.alcance - 8) {
    if (cpu.x > player.x) cpu.x -= cpu.velocidade * diff;
    else cpu.x += cpu.velocidade * diff;
  }
  if (Math.abs(cpu.x - player.x) <= cpu.alcance) {
    if (cpu.energia >= 10 && Math.random() < (0.13 + 0.23*diff)) usarHabilidade(0, cpu, player, spriteCpu, spritePlayer, false);
    if (cpu.energia >= 18 && Math.random() < (0.09 + 0.15*diff)) usarHabilidade(1, cpu, player, spriteCpu, spritePlayer, false);
    if (cpu.cooldowns.H<=0 && cpu.energia > 50 && Math.random() < (0.045+0.15*diff)) usarHabilidade(2, cpu, player, spriteCpu, spritePlayer, false);
    if (Math.random() < (0.13-0.07*diff)) bloquear(cpu, cpuEl);
    if (Math.random() < 0.07) dash(cpu, cpuEl, false);
    if (!cpu.pulando && Math.random() < 0.05) pular(cpu, spriteCpu);
  }
  if (cpu.energia < 30 && Math.random() < (0.12+0.12*diff)) carregarEnergia(cpu, cpuEl);
}

// --- INICIALIZAÇÃO --- //
function init() {
  exibirTela(telaInicial);
  resetSelecao();
}
init();
