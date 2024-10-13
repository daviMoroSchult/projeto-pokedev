// Seleciona todos os elementos com a classe "pokedev" (nav items) e os armazena em pokedevsNav
const pokedevsNav = document.querySelectorAll(".pokedev");

// Seleciona todos os elementos com a classe "cartao-pokedev" (cards) e os armazena em cartoesPokedevs
const cartoesPokedevs = document.querySelectorAll(".cartao-pokedev");

// Seleciona o elemento atualmente ativo com a classe "pokedev ativo"
let pokedevsNavAtivo = document.querySelector(".pokedev.ativo");

// Para cada elemento em pokedevsNav, adiciona um ouvinte de evento para clique
pokedevsNav.forEach(pokedev => {

  // Adiciona um ouvinte de evento de clique para o elemento atual
  pokedev.addEventListener("click", () => {

    // Seleciona o cartão correspondente que deve aparecer com base no ID do elemento clicado
    const cartaoPokedevQueDeveAparecer = document.querySelector(`#cartao-` + `${pokedev.id}`);

    // Remove a classe "ativo" de todos os elementos em pokedevsNav, garantindo que apenas o clicado ficará ativo
    for (let i = 0; i < pokedevsNav.length; i++) {
      pokedevsNav[i].classList.remove("ativo");
    }

    // Adiciona a classe "ativo" ao elemento clicado, destacando-o como o selecionado
    pokedev.classList.add("ativo");

    // Seleciona o cartão que está atualmente aberto (com a classe "aberto")
    const cartoesPokedevAberto = document.querySelector(".cartao-pokedev.aberto");

    // Remove a classe "aberto" do cartão atualmente aberto, escondendo-o
    cartoesPokedevAberto.classList.remove("aberto");

    // Adiciona a classe "aberto" ao cartão correspondente que deve aparecer, tornando-o visível
    cartaoPokedevQueDeveAparecer.classList.add("aberto");
  });

});
