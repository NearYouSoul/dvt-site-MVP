/**
 * Bottom Navigation Menu - Закреплённое меню сайта
 * Fixed bottom menu with smooth scroll navigation
 */

window.renderMenu = function () {
    console.log('Rendering Bottom Menu...');

    // SVG Icons (Heroicons style - quality icons) - compact versions
    const icons = {
        // Памятка - Document/Note icon (smaller)
        notes: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>`,

        // Расписание - Calendar icon (центральная, акцентная)
        schedule: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>`,

        // Заведения - Map/Location icon (smaller)
        places: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>`
    };

    // Smooth scroll function with offset for sticky header
    function smoothScrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            // Sticky nav height (64px) + comfortable padding
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Menu configuration
    const menuItems = [
        {
            id: 'notes-section',
            icon: icons.notes,
            label: 'Памятка',
            isCenter: false
        },
        {
            id: 'game-table-section',
            icon: icons.schedule,
            label: 'Расписание',
            isCenter: true  // Центральная кнопка - более заметная
        },
        {
            id: 'restoraunt',
            icon: icons.places,
            label: 'Заведения',
            isCenter: false
        }
    ];

    // Generate menu HTML - compact version
    const menuHtml = `
        <nav id="bottom-menu" class="fixed bottom-0 left-0 right-0 z-50 px-4 pb-2 pointer-events-none">
            <div class="max-w-xs mx-auto pointer-events-auto">
                <!-- Menu Container - compact glassmorphism -->
                <div class="menu-glass flex items-end justify-between rounded-full px-2 shadow-lg">
                    ${menuItems.map(item => {
        if (item.isCenter) {
            // Center button - raised, larger icon
            return `
                                <button 
                                    data-target="${item.id}"
                                    class="menu-btn menu-btn-center flex flex-col items-center -mt-4 transition-all duration-200"
                                    aria-label="${item.label}"
                                >
                                    <div class="menu-btn-center-icon flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#5A7ACD] to-[#4A6ABD] text-white shadow-lg transition-all duration-200 hover:scale-105">
                                        <div class="w-6 h-6">${item.icon}</div>
                                    </div>
                                    <span class="text-[9px] font-semibold text-gray-600 mt-0.5">${item.label}</span>
                                </button>
                            `;
        } else {
            // Side buttons - very compact
            return `
                                <button 
                                    data-target="${item.id}"
                                    class="menu-btn flex flex-col items-center py-2 px-4 text-gray-400 transition-all duration-200 hover:text-[#5A7ACD]"
                                    aria-label="${item.label}"
                                >
                                    <div class="w-5 h-5">${item.icon}</div>
                                    <span class="text-[9px] font-medium mt-0.5">${item.label}</span>
                                </button>
                            `;
        }
    }).join('')}
                </div>
            </div>
        </nav>

        <style>
            /* Glassmorphism effect for menu - compact */
            .menu-glass {
                background: rgba(255, 255, 255, 0.92);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.7);
                box-shadow: 0 -1px 15px rgba(0, 0, 0, 0.06);
            }

            /* Button animations */
            .menu-btn {
                -webkit-tap-highlight-color: transparent;
            }

            .menu-btn:active {
                transform: scale(0.92);
            }

            .menu-btn-center:active .menu-btn-center-icon {
                transform: scale(0.9);
            }

            /* Subtle glow for center button */
            .menu-btn-center-icon {
                box-shadow: 0 4px 14px rgba(90, 122, 205, 0.4);
            }

            .menu-btn-center:hover .menu-btn-center-icon {
                box-shadow: 0 4px 18px rgba(90, 122, 205, 0.55);
            }

            /* Safe area inset for mobile devices */
            @supports (padding-bottom: env(safe-area-inset-bottom)) {
                #bottom-menu {
                    padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
                }
            }

            /* Padding for content above menu */
            body {
                padding-bottom: 65px;
            }
        </style>
    `;

    // Inject menu into DOM
    document.body.insertAdjacentHTML('beforeend', menuHtml);

    // Add click event listeners
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            smoothScrollTo(targetId);
        });
    });

    console.log('Bottom Menu injected successfully.');
};
