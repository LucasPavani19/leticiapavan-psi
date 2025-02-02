// Verificar se há preferência salva
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Atualizar estado do switch baseado no tema atual
const themeToggle = document.getElementById('themeToggle');
themeToggle.checked = savedTheme === 'dark';

// Adicionar evento de mudança ao switch
themeToggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}); 