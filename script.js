// Inicialização do EmailJS
(function() {
    emailjs.init("afwYf6RRsIfuFTf3U");
})();

// Carrossel de imagens
function startCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    images[0].classList.add('active');

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 4000);
}

// Funcionalidade de agendamento
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const bookingForm = document.getElementById('bookingForm');
    const selectedServiceSpan = document.getElementById('selectedService');
    const appointmentForm = document.getElementById('appointmentForm');

    // Selecionar serviço
    serviceCards.forEach(card => {
        const selectButton = card.querySelector('.select-service');
        
        selectButton.addEventListener('click', () => {
            // Remove seleção anterior
            serviceCards.forEach(c => c.classList.remove('selected'));
            
            // Seleciona o novo card
            card.classList.add('selected');
            
            // Atualiza informações do formulário
            const serviceName = card.getAttribute('data-service');
            const servicePrice = card.getAttribute('data-price');
            selectedServiceSpan.textContent = `${serviceName} - R$ ${servicePrice}`;
            
            // Mostra o formulário
            bookingForm.style.display = 'block';
            
            // Scroll suave até o formulário
            bookingForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // Envio do formulário
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const service = selectedServiceSpan.textContent;

            if (!/^[0-9]{11}$/.test(whatsapp)) {
                alert('Por favor, insira um número de WhatsApp válido');
                return;
            }
            
            if (name.length < 3) {
                alert('Por favor, insira um nome válido');
                return;
            }

            // Preparar mensagem para WhatsApp
            const message = encodeURIComponent(
                `Olá! Gostaria de agendar um horário.\n\n` +
                `Nome: ${name}\n` +
                `Tratamento: ${service}\n`
            );
            
            // Abrir WhatsApp (substitua pelo número correto)
            window.open(`https://wa.me/5565999417801?text=${message}`);
            
            // Limpar formulário
            appointmentForm.reset();
            bookingForm.style.display = 'none';
            serviceCards.forEach(c => c.classList.remove('selected'));
        });
    }

    // Iniciar carrossel
    window.addEventListener('load', startCarousel);
}); 
