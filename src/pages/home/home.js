// Funcionalidad adicional personalizada
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    // Efecto de scroll para ocultar/mostrar navbar
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Agregar clase active al enlace actual
    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentLocation.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
    
    // Efecto de hover mejorado para los enlaces
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Funcionalidad de búsqueda
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('#searchModal .btn-primary');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Aquí puedes implementar la lógica de búsqueda
                console.log('Buscando:', searchTerm);
                // Por ahora solo cerramos el modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('searchModal'));
                modal.hide();
                searchInput.value = '';
            }
        });
        
        // Buscar al presionar Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Efecto de carga para el navbar
    setTimeout(() => {
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0)';
    }, 100);
});
