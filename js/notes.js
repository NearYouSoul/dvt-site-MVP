window.renderNotes = function () {
    console.log('Rendering Notes Section...');

    // State
    let activeTab = 'spectator'; // 'spectator' or 'player'

    // Icons (Lucide Icons)
    const icons = {
        heart: 'heart',
        shoe: 'footprints',
        megaphone: 'megaphone',
        book: 'book-open',
        flame: 'flame',
        pen: 'pencil',
        medical: 'hospital',
        stop: 'ban',
        users: 'users',
        shirt: 'shirt',
        droplet: 'droplet',
        video: 'video',
        shield: 'shield-check',
        music: 'music',
        coffee: 'coffee',
        trash: 'trash-2',
        hash: 'hash',
        smile: 'smile',
        trophy: 'trophy'
    };


    const data = {
        spectator: {
            title: "ЗРИТЕЛЮ",
            color: "#FEB05D", // Orange
            items: [
                {
                    icon: icons.heart,
                    text: "Мы за то, чтобы вы поддерживали все команды, а не только любимую."
                },
                {
                    icon: icons.shoe,
                    text: "Возьмите вторую обувь, которая не оставляет чёрточек. А если забыли взять, наденьте бахилы. В зале «Метеора» бахилы продаются поштучно по 5 руб. В зале «ДК ТоАЗа» мы закупим 100 пар бахил на 2 дня, можете брать из коробки на ресепшене."
                },
                {
                    icon: icons.megaphone,
                    text: "Предметы болельщиков не запрещены (плакаты, помпоны и т.д.). Но пожалуйста, без громких дудок (вувузел) и оскорблений. Поддерживайте команды, а не давите на оппонентов."
                }
            ]
        },
        player: {
            title: "ИГРОКУ",
            color: "#5A7ACD", // Blue
            items: [
                {
                    icon: icons.book,
                    text: "Уважайте решения судей и читайте официальные правила, мы играем по ним."
                },
                {
                    icon: icons.flame,
                    text: "Не забывайте про качественную разминку, это залог игры без травм."
                },
                {
                    icon: icons.pen,
                    text: "Подпишите мячи."
                },
                {
                    icon: icons.medical,
                    text: "Для каждого зала будет дежурить медик. Пожалуйста, возьмите с собой все важные медицинские документы."
                },
                {
                    icon: icons.stop,
                    text: "Во время игры никто не должен играть вторым мячом находясь в неотделенной от игровой площадки части зала."
                },
                {
                    icon: icons.users,
                    text: "Во время разминки перед матчем, на игровой площадке разминаются только игроки играющих команд."
                },
                {
                    icon: icons.shirt,
                    text: "Подойдите серьёзно к выбору одежды (удобная, приличная спортивная форма)."
                },
                {
                    icon: icons.droplet,
                    text: "Оба зала оборудованы душевыми. Не забудьте тапочки, полотенце и средства личной гигиены."
                }
            ]
        },
        common: [
            {
                icon: icons.video,
                text: "На вахте будут встречающие. Также пришлём видео как попасть в зал."
            },
            {
                icon: icons.shield,
                text: "Не забывайте про технику безопасности и следите за своими вещами."
            },
            {
                icon: icons.music,
                text: "В каждом зале будет играть музыка, на разминке и между розыгрышами."
            },
            {
                icon: icons.coffee,
                text: "В залах будет вода, батончики (для игроков), чай, кофе, сахар. В «Метеоре» есть кафетерий (до 21:00)."
            },
            {
                icon: icons.trash,
                text: "Пожалуйста, не оставляйте мусор. Мусорные контейнеры есть в залах и коридорах."
            },
            {
                icon: icons.hash,
                text: "Используйте хэштеги в беседе ДВТ. Важное будет помечено #объявления."
            },
            {
                icon: icons.smile,
                text: "Давайте сделаем игры максимально комфортными и дружескими. Турнир должен объединять города!"
            },
            {
                icon: icons.trophy,
                text: "У нас нет трофеев, главное - игра. Приезжайте с лёгким настроем и получите удовольствие!"
            }
        ]
    };

    const containerId = 'notes-section';

    function render() {
        // Content for Active Tab
        const activeData = data[activeTab];

        // Create New Section Container
        const section = document.createElement('section');
        section.id = containerId;
        section.className = "w-full px-4 mb-20 max-w-4xl mx-auto mt-8";

        // App container check
        const app = document.getElementById('app');
        if (!app) return;

        // Check for existing to replace or append
        const existing = document.getElementById(containerId);

        // --- Components ---

        // 1. Toggle Switch
        const toggleHtml = `
            <div class="flex justify-center mb-8">
                <div class="bg-white p-1 rounded-2xl shadow-sm flex w-full max-w-[320px]">
                    <button 
                        class="flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === 'spectator' ? 'bg-[#FEB05D] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}"
                        onclick="window.setNotesTab('spectator')"
                    >
                        ЗРИТЕЛЮ
                    </button>
                    <button 
                         class="flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === 'player' ? 'bg-[#5A7ACD] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}"
                         onclick="window.setNotesTab('player')"
                    >
                        ИГРОКУ
                    </button>
                </div>
            </div>
        `;

        // 2. Dynamic Content List
        const dynamicListHtml = document.createElement('div');
        dynamicListHtml.className = "grid gap-4 mb-8";

        activeData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:shadow-md";
            card.innerHTML = `
                <div class="min-w-[40px] w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0" style="background-color: ${activeData.color}">
                    <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                </div>
                <p class="text-sm md:text-base text-gray-700 leading-relaxed pt-1">${item.text}</p>
            `;
            dynamicListHtml.appendChild(card);
        });

        // 3. Header for Common
        const commonHeaderHtml = `
             <div class="flex items-center gap-2 mb-6 mt-12 px-2">
                <div class="h-8 w-1 bg-[#2B2A2A] rounded-full"></div>
                <h2 class="text-2xl font-bold text-[#2B2A2A]">ОБЩИЕ</h2>
            </div>
        `;

        // 4. Common Items List
        const commonListHtml = document.createElement('div');
        commonListHtml.className = "grid gap-4"; // same grid layout

        data.common.forEach(item => {
            const card = document.createElement('div');
            card.className = "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:shadow-md";
            card.innerHTML = `
                 <div class="min-w-[40px] w-10 h-10 rounded-full bg-[#2B2A2A] flex items-center justify-center text-white shrink-0">
                    <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                </div>
                <p class="text-sm md:text-base text-gray-700 leading-relaxed pt-1">${item.text}</p>
            `;
            commonListHtml.appendChild(card);
        });



        // Assembly
        section.innerHTML = toggleHtml;
        section.appendChild(dynamicListHtml);
        section.insertAdjacentHTML('beforeend', commonHeaderHtml);
        section.appendChild(commonListHtml);

        if (existing) {
            existing.replaceWith(section);
        } else {
            app.appendChild(section);
        }

        // Initialize Lucide Icons
        if (window.lucide) {
            lucide.createIcons();
        }
    }

    // Expose toggle function globally
    window.setNotesTab = function (tab) {
        if (activeTab !== tab) {
            activeTab = tab;
            render();
        }
    }

    // Initial render
    render();
}
