// Função para alternar entre temas dark e light
function toggleTheme() {
  // Seleciona o elemento body do documento
  const body = document.body;

  // Verifica se o tema atual é light (se a classe 'light-theme' está presente)
  const isLight = body.classList.contains('light-theme');

  if (isLight) {
    // Se está light, remove a classe para voltar ao dark
    body.classList.remove('light-theme');
    // Salva a preferência no localStorage como 'dark'
    localStorage.setItem('theme', 'dark');
  } else {
    // Se está dark, adiciona a classe para ir ao light
    body.classList.add('light-theme');
    // Salva a preferência no localStorage como 'light'
    localStorage.setItem('theme', 'light');
  }
}

// Função para aplicar o tema salvo no localStorage ao carregar a página
function applySavedTheme() {
  // Recupera o tema salvo no localStorage (padrão é 'dark' se não houver)
  const savedTheme = localStorage.getItem('theme') || 'dark';

  // Aplica a classe correspondente ao body
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function pegarPerfil(event) {
  // Pega o elemento <a> clicado
  const profileLink = event.currentTarget;
  
  // Extrai o nome do perfil (texto da figcaption)
  const nomePerfil = profileLink.querySelector('figcaption').textContent;
  
  // Extrai a imagem do perfil (src do img)
  const imagemPerfil = profileLink.querySelector('img').src;
  
  // Armazena no localStorage
  localStorage.setItem('perfilAtivoNome', nomePerfil);
  localStorage.setItem('perfilAtivoImagem', imagemPerfil);
  
  console.log(`Perfil armazenado: ${nomePerfil}`);
}

// Executa a função para aplicar o tema salvo assim que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', applySavedTheme);