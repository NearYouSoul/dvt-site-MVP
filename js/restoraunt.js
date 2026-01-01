/**
 * Restoraunt Section - Вкусные места города
 * Renders restaurant cards with navigation links
 */

// Restaurant data
const restaurantsData = [
    {
        id: 1,
        name: "Coffee Hall",
        image: "img/rest/coffee_hall.png",
        description: "Тольяттинская классика. Кофейня-ресторан с отличным выбором.",
        address: "Точка 1: Район АвтЗав, Революционная улица, 52А; Точка 2: Район АвтЗав, Южное шоссе, 6",
        links: [
            { type: "yandex", label: "Точка 1", url: "https://yandex.ru/maps/-/CLTzr46O" },
            { type: "yandex", label: "Точка 2", url: "https://yandex.ru/maps/-/CLTzrB7P" },
            { type: "gis", label: "Точка 1", url: "https://2gis.ru/togliatti/geo/70000001018669038" },
            { type: "gis", label: "Точка 2", url: "https://2gis.ru/togliatti/geo/70000001030750688" }
        ]
    },
    {
        id: 2,
        name: "Гамбринус",
        image: "img/rest/gambrinus.png",
        description: "Олдскульное кафе недалеко от зала.",
        address: "Район Комсомольский, улица Мурысева, 54Б",
        links: [
            { type: "yandex", label: "", url: "https://yandex.ru/maps/-/CLTOu4LD" },
            { type: "gis", label: "", url: "https://go.2gis.com/1NG45" }
        ]
    },
    {
        id: 3,
        name: "Кантина Мука",
        image: "img/rest/kantina_muka.png",
        description: "Кафе-кондитерская. Здесь всё имеет нежный вкус.",
        address: "Район АвтЗав, улица Ворошилова, 12А",
        links: [
            { type: "yandex", label: "", url: "https://yandex.ru/maps/-/CLTzrWjt" },
            { type: "gis", label: "", url: "https://2gis.ru/togliatti/geo/70000001007391986" }
        ]
    },
    {
        id: 4,
        name: "Balkanstar - Сербский гриль",
        image: "img/rest/balkanstar.png",
        description: "Сочное мясо, которое готовят прямо при вас!",
        address: "Район АвтЗав, Юбилейная улица, 5А",
        links: [
            { type: "yandex", label: "", url: "https://yandex.ru/maps/-/CLTOuL5h" },
            { type: "gis", label: "", url: "https://go.2gis.com/C39Wk" }
        ]
    },
    {
        id: 5,
        name: "Маяковский",
        image: "img/rest/mayakovsky.png",
        description: "Грузинская кухня, так любимая организатором турнира)",
        address: "Район Центральный, улица Карла Маркса, 41",
        links: [
            { type: "yandex", label: "", url: "https://yandex.ru/maps/-/CLTzvE5W" },
            { type: "gis", label: "", url: "https://2gis.ru/togliatti/geo/70000001024384709" }
        ]
    },
    {
        id: 6,
        name: "Милано",
        image: "img/rest/milano.png",
        description: "Сеть пиццерий, была отмечена некоторыми гостями на первом турнире.",
        address: "Точка 1: Район Комсомольский, ул. Механизаторов, 31А; Точка 2: Район Центральный, ул. Карла Маркса, 71; Точка 3: Район АвтЗав, ул. Карла Маркса, 71",
        links: [
            { type: "yandex", label: "Точка 1", url: "https://yandex.ru/maps/-/CLTzvY-4" },
            { type: "yandex", label: "Точка 2", url: "https://yandex.ru/maps/-/CLTzvBjD" },
            { type: "yandex", label: "Точка 3", url: "https://yandex.ru/maps/-/CLTzvFo-" },
            { type: "gis", label: "Точка 1", url: "https://2gis.ru/togliatti/geo/3096753025869878" },
            { type: "gis", label: "Точка 2", url: "https://2gis.ru/togliatti/geo/3096753024910142" },
            { type: "gis", label: "Точка 3", url: "https://2gis.ru/togliatti/geo/3096753025151736" }
        ]
    },
    {
        id: 7,
        name: "Пекарни «Пирожок»",
        image: "img/rest/pirozok.png",
        description: "Пекарни с сочной выпечкой. Внутри негде сидеть, но вкус того стоит.",
        address: "Район Центральный, бульвар 50 лет Октября, 47",
        links: [
            { type: "yandex", label: "", url: "https://yandex.ru/maps/-/CLTzv89y" },
            { type: "gis", label: "", url: "https://2gis.ru/togliatti/geo/70000001025547746" }
        ]
    },
    {
        id: 8,
        name: "Сувлаки #1 Гирос",
        image: "img/rest/suvlaki.png",
        description: "Греческая кухня, очень вкусные цены. Рекомендуем сытнейший гирос с курицей.",
        address: "Точка 1: Район Центральный, улица Гагарина, 2; Точка 2: Район АвтЗав, улица Автостроителей, 53Бс1",
        links: [
            { type: "yandex", label: "Точка 1", url: "https://yandex.ru/maps/-/CLTzvT0k" },
            { type: "yandex", label: "Точка 2", url: "https://yandex.ru/maps/-/CLTzv20Y" },
            { type: "gis", label: "Точка 1", url: "https://2gis.ru/togliatti/geo/70000001044810769" },
            { type: "gis", label: "Точка 2", url: "https://2gis.ru/togliatti/geo/70000001062579127" }
        ]
    },
    {
        id: 9,
        name: "Люблины",
        image: "img/rest/lyubliny.png",
        description: "Блинная в центральном районе, где можно сытно подкрепиться.",
        address: "Точка 1: Район Центральный, Лесная улица, 52; Точка 2: Район Центральный, Ленинградская улица, 47",
        links: [
            { type: "yandex", label: "Точка 1", url: "https://yandex.ru/maps/-/CLTOy-4T" },
            { type: "yandex", label: "Точка 2", url: "https://yandex.ru/maps/-/CLTO5Mk0" },
            { type: "gis", label: "Точка 1", url: "https://go.2gis.com/hwntY" },
            { type: "gis", label: "Точка 2", url: "https://go.2gis.com/VROnA" }
        ]
    },
    {
        id: 10,
        name: "Gellert Bar",
        image: "img/rest/gellert_bar.png",
        description: "Крафтовое пиво и закуски. Можно самому выбрать трек и зарикроллить весь бар)",
        address: "Точка 1: Район АвтЗав, Приморский бульвар, 66/4; Точка 2: Район АвтЗав, Тополиная улица, 25А; Точка 3: Район АвтЗав, улица 40 лет Победы, 17Б",
        links: [
            { type: "yandex", label: "Точка 1", url: "https://yandex.ru/maps/-/CLTzzZ8T" },
            { type: "yandex", label: "Точка 2", url: "https://yandex.ru/maps/-/CLTzz6PW" },
            { type: "yandex", label: "Точка 3", url: "https://yandex.ru/maps/-/CLTzzGZA" },
            { type: "gis", label: "Точка 1", url: "https://2gis.ru/togliatti/geo/70000001079727276" },
            { type: "gis", label: "Точка 2", url: "https://2gis.ru/togliatti/geo/70000001081226771" },
            { type: "gis", label: "Точка 3", url: "https://2gis.ru/togliatti/geo/70000001062749876" }
        ]
    }
];

/**
 * Formats address string with bold district names and point numbers
 * Each point is on a new line with its own icon
 * @param {string} address - Raw address string
 * @returns {string} - Formatted HTML with bold districts and points
 */
function formatAddress(address) {
    if (!address) return '';

    // Check if address has multiple points (contains "Точка")
    if (address.includes('Точка')) {
        // Split by "Точка" and process each part
        const parts = address.split(/(?=Точка\s*\d+:)/);

        return parts
            .filter(part => part.trim()) // Remove empty parts
            .map(part => {
                // Make "Точка X:" bold
                let formatted = part.replace(/(Точка\s*\d+):/g, '<strong>$1:</strong>');
                // Make "Район X" bold
                formatted = formatted.replace(/Район\s+([А-Яа-яЁё]+)/g, '<strong>Район $1</strong>');
                // Clean up any leading semicolons or spaces
                formatted = formatted.replace(/^[\s;]+/, '').trim();
                return `<span class="block">📍 ${formatted}</span>`;
            })
            .join('');
    } else {
        // Single address - just bold the district
        const formatted = address.replace(/Район\s+([А-Яа-яЁё]+)/g, '<strong>Район $1</strong>');
        return `<span class="block">📍 ${formatted}</span>`;
    }
}

/**
 * Generates HTML for navigation buttons
 * @param {Array} links - Array of link objects
 * @returns {string} - HTML string for buttons
 */
function generateButtonsHtml(links) {
    const yandexLinks = links.filter(l => l.type === 'yandex');
    const gisLinks = links.filter(l => l.type === 'gis');

    let buttonsHtml = '';

    // Yandex buttons
    yandexLinks.forEach(link => {
        const labelText = link.label ? ` (${link.label})` : '';
        buttonsHtml += `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer"
               class="flex-1 min-w-[140px] bg-[#FEB05D] hover:bg-[#e99a47] text-white text-sm font-medium py-3 px-4 rounded-xl text-center transition-all duration-200 shadow-sm hover:shadow-md">
                🗺 Яндекс${labelText}
            </a>
        `;
    });

    // 2GIS buttons
    gisLinks.forEach(link => {
        const labelText = link.label ? ` (${link.label})` : '';
        buttonsHtml += `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer"
               class="flex-1 min-w-[140px] bg-[#4DB251] hover:bg-[#3d9941] text-white text-sm font-medium py-3 px-4 rounded-xl text-center transition-all duration-200 shadow-sm hover:shadow-md">
                📍 2ГИС${labelText}
            </a>
        `;
    });

    return buttonsHtml;
}

/**
 * Generates HTML for a single restaurant card
 * @param {Object} restaurant - Restaurant data object
 * @returns {string} - HTML string for the card
 */
function generateCardHtml(restaurant) {
    // Generate address HTML if address exists
    const addressHtml = restaurant.address
        ? `<div class="text-gray-500 text-xs mb-4 leading-relaxed">${formatAddress(restaurant.address)}</div>`
        : '';

    return `
        <article class="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <!-- Image -->
            <div class="relative w-full h-48 overflow-hidden">
                <img src="${restaurant.image}" 
                     alt="${restaurant.name}" 
                     class="w-full h-full object-cover"
                     loading="lazy">
            </div>
            
            <!-- Content -->
            <div class="p-5">
                <!-- Name -->
                <h3 class="text-xl font-bold text-[#2B2A2A] mb-2">${restaurant.name}</h3>
                
                <!-- Description -->
                <p class="text-gray-600 text-sm mb-2 leading-relaxed">${restaurant.description}</p>
                
                <!-- Address -->
                ${addressHtml}
                
                <!-- Buttons -->
                <div class="flex flex-wrap gap-2">
                    ${generateButtonsHtml(restaurant.links)}
                </div>
            </div>
        </article>
    `;
}

/**
 * Main render function - Renders the restaurant section
 */
window.renderRestoraunt = function () {
    console.log('Rendering Restoraunt Section...');

    // Generate all cards
    const cardsHtml = restaurantsData.map(restaurant => generateCardHtml(restaurant)).join('');

    // Section HTML
    const sectionHtml = `
        <section id="restoraunt" class="py-12 px-4 md:px-8 max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl font-bold text-[#2B2A2A] mb-3">
                    🍽 Вкусные места города
                </h2>
                <p class="text-gray-600 max-w-lg mx-auto">
                    Рекомендации от организаторов и участников прошлых турниров
                </p>
            </div>
            
            <!-- Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${cardsHtml}
            </div>
        </section>
    `;

    // Inject into DOM
    const app = document.getElementById('app');
    if (app) {
        app.insertAdjacentHTML('beforeend', sectionHtml);
        console.log('Restoraunt section injected successfully.');
    } else {
        console.error('App container not found');
    }
};
