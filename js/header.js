window.renderHeader = function () {
    console.log('Rendering Header...');
    const headerHtml = `
    <header class="relative w-full h-[56.25vw] max-h-[80vh] min-h-[500px] overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 w-full h-full">
            <img src="img/site/header_bg.jpg" alt="DVT Tournament Background" class="w-full h-full object-cover">
            <div class="absolute inset-0 overlay-dark"></div>
        </div>

        <!-- Sticky Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-center px-4 md:px-8 transition-all duration-300">
            <!-- Logo -->
            <div class="flex items-center">
                <img src="img/site/logo_header.png" alt="DVT Logo" class="h-10 md:h-12 w-auto">
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow tracking-tight">ДВТ 6.0</h1>
            <p class="text-white text-lg md:text-xl max-w-[600px] leading-relaxed text-shadow opacity-90">
                На этом сайте вы можете узнать все о турнире, посмотреть расписание матчей и нийти заведения где можно поесть
            </p>
        </div>
    </header>
    `;

    const app = document.getElementById('app');
    if (app) {
        app.insertAdjacentHTML('afterbegin', headerHtml);
        console.log('Header injected successfully.');
    } else {
        console.error('App container not found');
    }
}
