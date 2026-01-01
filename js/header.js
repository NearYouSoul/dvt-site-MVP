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
        <nav class="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-4 md:px-8 transition-all duration-300">
            <!-- Logo -->
            <div class="flex items-center">
                <img src="img/site/logo_header.png" alt="DVT Logo" class="h-10 md:h-12 w-auto">
            </div>

            <!-- Admin Action (Key Icon) -->
            <a href="/admin-login" class="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 text-white md:text-[#2B2A2A]" aria-label="Admin Login">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key">
                    <circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2l-6.5 6.5"/><path d="m5 13 1.5-1.5z"/>
                </svg>
            </a>
        </nav>

        <!-- Hero Section -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow tracking-tight">ДВТ 6.0</h1>
            <p class="text-white text-lg md:text-xl max-w-[600px] leading-relaxed text-shadow opacity-90">
                На этом сайте вы можете узнать все о турнире, следить за результатами матчей и найти заведение где можно поесть
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
