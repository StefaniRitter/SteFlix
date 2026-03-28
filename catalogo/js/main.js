// Importa a lista de categorias do arquivo data.js
// categories contém todas as categorias de filmes/séries (Drama, Ação, etc)
import { categories } from './data.js';

// Importa a função que cria carrosséis (aquele rolagem horizontal)
// Cada categoria vai ter seu próprio carrossel com os filmes
import { createCarousel } from './components/Carousel.js';

// Event listener que dispara quando o HTML está totalmente carregado
// Garante que todos os elementos DOM exista antes de usarmos eles
document.addEventListener('DOMContentLoaded', () => {
    // ===== PARTE 1: RECUPERAR E EXIBIR DADOS DO PERFIL =====
    // Recupera o nome do perfil que foi clicado em index.html
    // (foi salvo no localStorage pela função pegarPerfil())
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    
    // Recupera a imagem do perfil que foi clicado
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Verifica se tanto nome quanto imagem foram encontrados
    if (nomePerfil && imagemPerfil) {
        // Procura o elemento que exibe o nome do perfil na navbar
        // (classe .kids-link é onde aparece "Lúcia" ou outro nome)
        const kidsLink = document.querySelector('.kids-link');
        
        // Procura o elemento que exibe a foto do perfil na navbar
        // (classe .profile-icon é a imagem do avatar)
        const profileIcon = document.querySelector('.profile-icon');
        
        // Se achou o elemento do nome, atualiza o texto com o nome do perfil
        if (kidsLink) kidsLink.textContent = nomePerfil;
        
        // Se achou o elemento da imagem, atualiza o src com a imagem do perfil
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // ===== PARTE 2: CRIAR E EXIBIR CARROSSÉIS DE CATEGORIAS =====
    // Procura o elemento com id "main-content"
    // Este é o container onde todos os carrosséis de categorias serão colocados
    const container = document.getElementById('main-content');
    
    // Verifica se o container foi encontrado
    if (container) {
        // Percorre CADA categoria do array categories
        // Para cada uma, faz uma ação (forEach = para cada)
        categories.forEach(category => {
            // Chama a função createCarousel que cria um carrossel para essa categoria
            // Resultado: um elemento HTML pronto com todos os filmes dessa categoria
            const carousel = createCarousel(category);
            
            // Adiciona o carrossel criado dentro do container
            // appendChild = adiciona como filho (coloca lá dentro)
            container.appendChild(carousel);
        });
    }
});
