// Variáveis globais para controlar o estado da aplicação
let currentFontSize = 16;
let darkMode = false;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    initializeVisitorCounter();
    initializeCurrentYear();
});

// Função para inicializar o modo escuro baseado no localStorage
function initializeDarkMode() {
    const savedMode = localStorage.getItem('agrinho-dark-mode');
    if (savedMode === 'true') {
        darkMode = true;
        document.body.classList.add('dark-mode');
        updateThemeIcons();
    }
}

// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Salva a preferência no localStorage
    localStorage.setItem('agrinho-dark-mode', darkMode.toString());
    updateThemeIcons();
}

// Função para atualizar os ícones de tema (sol/lua)
function updateThemeIcons() {
    const icon = darkMode ? '☀️' : '🌙';
    const themeIcon = document.getElementById('themeIcon');
    const themeIconMobile = document.getElementById('themeIconMobile');

    if (themeIcon) themeIcon.textContent = icon;
    if (themeIconMobile) themeIconMobile.textContent = icon;
}

// Função para alternar o menu mobile
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenu && menuIcon) {
        mobileMenu.classList.toggle('hidden');
        menuIcon.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    }
}

// Função para rolar suavemente até uma seção específica
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

        // Fecha o menu mobile após clicar em um link
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (menuIcon) menuIcon.textContent = '☰';
        }
    }
}

// Função para inicializar e incrementar o contador de visitantes
function initializeVisitorCounter() {
    const visitorCountElement = document.getElementById('visitorCount');

    if (visitorCountElement) {
        // Pega o contador salvo ou gera um novo
        const savedCount = localStorage.getItem('agrinho-visitors');
        const initialCount = savedCount ? parseInt(savedCount) : Math.floor(Math.random() * 5000) + 10000;
        const newCount = initialCount + 1;

        // Atualiza o DOM e salva no localStorage
        visitorCountElement.textContent = newCount.toLocaleString('pt-BR');
        localStorage.setItem('agrinho-visitors', newCount.toString());
    }
}

// Função para alterar o tamanho da fonte (acessibilidade)
function changeFontSize(change) {
    currentFontSize += change;

    // Limita o tamanho da fonte entre 12px e 24px
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 24) currentFontSize = 24;

    // Aplica o novo tamanho ao texto principal
    const aboutText = document.getElementById('aboutText');
    if (aboutText) {
        aboutText.style.fontSize = currentFontSize + 'px';
    }

    // Atualiza também as descrições dos cards
    const featureDescriptions = document.querySelectorAll('.feature-description');
    featureDescriptions.forEach(function(desc) {
        desc.style.fontSize = (currentFontSize - 2) + 'px';
    });
}

// Função para mostrar alerta de download
function showDownloadAlert() {
    alert('Os materiais estão disponíveis nos links oficiais do programa Agrinho em seu estado!');
}

// Função para inicializar o ano atual no footer
function initializeCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Efeito de scroll no header - adiciona sombra ao rolar a página
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const currentScroll = window.pageYOffset;

    if (header) {
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }

    lastScroll = currentScroll;
});
