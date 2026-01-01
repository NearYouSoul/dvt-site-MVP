window.renderGameTable = function () {
    console.log('Rendering Game Table Section...');

    const containerId = 'game-table-section';
    let activeTab = 'Group A'; // 'Group A', 'Group B', 'Playoff'

    // Data from dock/logic/game_cards.md
    const data = {
        'Group A': {
            location: 'Метеор (Коммунистическая 88)',
            mapLinks: {
                yandex: 'https://yandex.ru/maps/org/meteor/140804587061?si=mztcf4bcft5h1c1xz92r1y04p8',
                gis: 'https://2gis.ru/togliatti/geo/70030076158403180/49.476569,53.472623'
            },
            matches: [
                { time: '14:30', team1: { name: 'Самуральск', img: 'img/teams/samuralsk.png' }, team2: { name: 'Чебы', img: 'img/teams/cheb.png' }, referee: 'Уфа' },
                { time: '15:30', team1: { name: 'Уфа', img: 'img/teams/ufa.png' }, team2: { name: 'ДримТим', img: 'img/teams/dreamteam.png' }, referee: 'Самуральск' },
                { time: '16:30', team1: { name: 'ДримТим', img: 'img/teams/dreamteam.png' }, team2: { name: 'Чебы', img: 'img/teams/cheb.png' }, referee: 'Уфа' },
                { time: '17:30', team1: { name: 'Уфа', img: 'img/teams/ufa.png' }, team2: { name: 'Самуральск', img: 'img/teams/samuralsk.png' }, referee: 'Чебы' },
                { time: '18:30', team1: { name: 'Уфа', img: 'img/teams/ufa.png' }, team2: { name: 'Чебы', img: 'img/teams/cheb.png' }, referee: 'ДримТим' },
                { time: '19:30', team1: { name: 'Самуральск', img: 'img/teams/samuralsk.png' }, team2: { name: 'ДримТим', img: 'img/teams/dreamteam.png' }, referee: 'Чебы' },
                { time: '20:30 – 21:30', event: 'Свободная игра (играют все желающие)', note: 'В 21:30 освобождаем зал.' }
            ]
        },
        'Group B': {
            location: 'ДК ТоАЗа (Коммунистическая 12)',
            mapLinks: {
                yandex: 'https://yandex.ru/maps/-/CLTznM4z',
                gis: 'https://2gis.ru/togliatti/geo/3096753024951045/49.464908,53.474358'
            },
            matches: [
                { time: '14:30', team1: { name: 'Татарлар', img: 'img/teams/tatarlar.png' }, team2: { name: 'Тольятти', img: 'img/teams/tolyatty.png' }, referee: 'Солянка' },
                { time: '15:30', team1: { name: 'Казань', img: 'img/teams/kazan.png' }, team2: { name: 'Солянка', img: 'img/teams/solyanka.png' }, referee: 'Татарлар' },
                { time: '16:30', team1: { name: 'Тольятти', img: 'img/teams/tolyatty.png' }, team2: { name: 'Солянка', img: 'img/teams/solyanka.png' }, referee: 'Казань' },
                { time: '17:30', team1: { name: 'Казань', img: 'img/teams/kazan.png' }, team2: { name: 'Татарлар', img: 'img/teams/tatarlar.png' }, referee: 'Тольятти' },
                { time: '18:30', team1: { name: 'Тольятти', img: 'img/teams/tolyatty.png' }, team2: { name: 'Казань', img: 'img/teams/kazan.png' }, referee: 'Солянка' },
                { time: '19:30', team1: { name: 'Татарлар', img: 'img/teams/tatarlar.png' }, team2: { name: 'Солянка', img: 'img/teams/solyanka.png' }, referee: 'Казань' },
                { time: '20:30 – 21:30', event: 'Свободная игра (играют все желающие)', note: 'В 21:30 освобождаем зал.' }
            ]
        },
        'Playoff': {
            // Reusing Group B location as requested
            location: 'ДК ТоАЗа (Коммунистическая 12)',
            mapLinks: {
                yandex: 'https://yandex.ru/maps/-/CLTznM4z',
                gis: 'https://2gis.ru/togliatti/geo/3096753024951045/49.464908,53.474358'
            },
            matches: [
                { title: 'ПОЛУФИНАЛ №1', participants: '1 место Группы А vs 2 место Группы Б' },
                { title: 'ПОЛУФИНАЛ №2', participants: '2 место Группы А vs 1 место Группы Б' },
                { title: 'ФИНАЛ', participants: 'Победитель ПФ №1 vs Победитель ПФ №2' },
                { title: 'МАТЧ ЗА 3 МЕСТО', participants: 'Выбывший из ПФ №1 vs Выбывший из ПФ №2' },
                { title: 'МАТЧ ЗА 5 МЕСТО', participants: '3 место Группы А vs 3 место Группы Б' },
                { title: 'МАТЧ ЗА 7 МЕСТО', participants: '4 место Группы А vs 4 место Группы Б' }
            ]
        }
    };

    function render() {
        const existing = document.getElementById(containerId);
        if (existing) existing.remove();

        const section = document.createElement('section');
        section.id = containerId;
        section.className = "w-full px-4 mb-20 max-w-4xl mx-auto mt-8";

        const app = document.getElementById('app');
        if (!app) return;

        // --- Winner App Promo Block ---
        const promoBlock = document.createElement('div');
        promoBlock.className = "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 text-center";

        promoBlock.innerHTML = `
            <h2 class="text-xl md:text-2xl font-bold text-[#2B2A2A] mb-2">Хотите следить за результатами матчей?</h2>
            <p class="text-gray-500 mb-6">Установите приложение Winner и затем перейдите по ссылке на турнир.</p>
            
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <!-- iOS Button -->
                <a href="https://apps.apple.com/ru/app/winner-менеджер-лиги/id1453673502" target="_blank" 
                   class="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                    Winner для IOS
                </a>
                
                <!-- Android Button -->
                <a href="https://play.google.com/store/apps/details?id=il.talent.winner&pcampaignid=web_share" target="_blank" 
                   class="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                    Winner для ANDROID
                </a>
                
                <!-- Tournament Link Button -->
                <button disabled title="Ссылка будет добавлена позже"
                   class="inline-flex items-center justify-center px-6 py-3 bg-[#5A7ACD] hover:bg-blue-600 text-white rounded-xl font-bold shadow-md transition-all gap-2 opacity-80 cursor-not-allowed">
                    <img src="img/site/logo_winner.png" alt="Winner" class="w-6 h-6 object-contain brightness-0 invert">
                    Наблюдать за турниром
                </button>
            </div>
        `;

        section.appendChild(promoBlock);

        // --- Tabs ---
        const tabsContainer = document.createElement('div');
        // Fix: Use flex-wrap and justify-center to handle narrow screens per formatting request
        tabsContainer.className = "flex flex-wrap justify-center gap-2 mb-6 px-1";

        const tabs = ['Group A', 'Group B', 'Playoff'];
        const tabLabels = { 'Group A': 'ГРУППА А', 'Group B': 'ГРУППА Б', 'Playoff': 'ПЛЕЙ-ОФФ' };

        tabs.forEach(tab => {
            const btn = document.createElement('button');
            const isActive = activeTab === tab;
            btn.className = `whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isActive
                ? 'bg-[#5A7ACD] text-white shadow-md'
                : 'bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`;
            btn.innerText = tabLabels[tab];
            btn.onclick = () => {
                activeTab = tab;
                render();
            };
            tabsContainer.appendChild(btn);
        });

        section.appendChild(tabsContainer);

        // --- Content ---
        const contentContainer = document.createElement('div');
        contentContainer.className = "flex flex-col gap-4";

        const activeData = data[activeTab];

        // --- Location Card ---
        // Render for all tabs since Playoff now also has location data
        if (activeData.location) {
            const locationCard = document.createElement('div');
            locationCard.className = "bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-2";

            locationCard.innerHTML = `
                <div class="text-center md:text-left">
                    <span class="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Место проведения</span>
                    <p class="text-gray-800 font-bold">${activeData.location}</p>
                </div>
                <div class="flex gap-2 w-full md:w-auto">
                    <a href="${activeData.mapLinks.yandex}" target="_blank" class="flex-1 md:flex-none text-center bg-[#FEB05D] hover:bg-orange-400 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                        ЯНДЕКС КАРТЫ
                    </a>
                    <a href="${activeData.mapLinks.gis}" target="_blank" class="flex-1 md:flex-none text-center bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                        2ГИС
                    </a>
                </div>
            `;
            contentContainer.appendChild(locationCard);
        }

        // --- Matches ---
        if (activeTab === 'Playoff') {
            // Render Playoff Matches
            activeData.matches.forEach(match => {
                const card = document.createElement('div');
                card.className = "bg-white p-5 rounded-2xl shadow-sm border border-gray-100";

                card.innerHTML = `
                    <div class="flex flex-col items-center text-center">
                        <h3 class="text-[#5A7ACD] font-bold text-lg mb-2">${match.title}</h3>
                        <p class="text-gray-700 font-medium">${match.participants}</p>
                    </div>
                `;
                contentContainer.appendChild(card);
            });
        } else {
            // Render Group Matches
            activeData.matches.forEach(match => {
                const card = document.createElement('div');
                card.className = "bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 relative overflow-hidden";

                if (match.event) {
                    // Free Play / Event Card
                    card.classList.add("bg-gradient-to-r", "from-blue-50", "to-transparent");
                    card.innerHTML = `
                         <div class="flex justify-between items-center mb-1">
                            <span class="bg-[#2B2A2A] text-white text-xs font-bold px-2 py-1 rounded-md">${match.time}</span>
                        </div>
                        <div class="text-center py-2">
                            <h3 class="font-bold text-[#2B2A2A] text-lg">${match.event}</h3>
                            <p class="text-sm text-gray-500 mt-1">${match.note}</p>
                        </div>
                    `;
                } else {
                    // Match Card
                    card.innerHTML = `
                        <div class="flex justify-between items-start border-b border-gray-100 pb-2 mb-1">
                            <div class="flex items-center gap-2">
                                <span class="bg-[#5A7ACD] text-white text-xs font-bold px-2 py-1 rounded-md">${activeTab === 'Group A' ? 'ГР. А' : 'ГР. Б'}</span>
                                <span class="text-[#2B2A2A] font-bold text-lg">${match.time}</span>
                            </div>
                            <div class="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-lg">
                                Судьи: <span class="text-gray-600">${match.referee}</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between py-2">
                            <!-- Team 1 -->
                            <div class="flex flex-col items-center w-1/3 gap-2">
                                <div class="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                                    <img src="${match.team1.img}" alt="${match.team1.name}" class="max-w-full max-h-full object-contain drop-shadow-sm">
                                </div>
                                <span class="text-xs md:text-sm font-bold text-center leading-tight text-gray-800">${match.team1.name}</span>
                            </div>

                            <!-- VS -->
                            <div class="flex flex-col items-center justify-center w-1/3">
                                <span class="text-2xl font-black text-gray-200">VS</span>
                            </div>

                            <!-- Team 2 -->
                            <div class="flex flex-col items-center w-1/3 gap-2">
                                <div class="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                                    <img src="${match.team2.img}" alt="${match.team2.name}" class="max-w-full max-h-full object-contain drop-shadow-sm">
                                </div>
                                <span class="text-xs md:text-sm font-bold text-center leading-tight text-gray-800">${match.team2.name}</span>
                            </div>
                        </div>
                    `;
                }
                contentContainer.appendChild(card);
            });
        }

        section.appendChild(contentContainer);

        // Insertion Logic: Should be AFTER Notes Section
        // Layout: Header -> Notes -> Game Table
        // We always append to app. If notes is already there, we append after it (which is default behavior of appendChild to same parent).
        // But if notes is NOT there yet (e.g. initial load where notes loads later), we might have issues if we depend on its presence.
        // However, standard flow: Header -> Notes -> Game Table.
        // We will just append to app. The sequence in index.html controls the order.
        app.appendChild(section);
    }

    // Initial render
    render();
};
