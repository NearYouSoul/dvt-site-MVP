window.renderNotes = function () {
    console.log('Rendering Notes Section...');

    // State
    let activeTab = 'spectator'; // 'spectator' or 'player'

    // Icons (Simple SVG Paths)
    const icons = {
        heart: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />',
        shoe: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.48 12.384c.642.477 1.258.988 1.84 1.527.794.736 1.68 1.34 2.651 1.777a.75.75 0 01-.652 1.393 21.43 21.43 0 00-3.1-2.079.75.75 0 01.261-1.393zM14.542 9.77a.75.75 0 01.386 1.45c-.868.23-1.696.586-2.46.965a.75.75 0 01-.68-1.34 16.91 16.91 0 012.754-1.075zm-6.075-.125a.75.75 0 00-.934 1.096c1.32.863 3.3.992 5.067.86a.75.75 0 00-.112-1.496c-1.397.104-2.906.012-4.021-.46zM1.5 19.5h21" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.57 15.657l.666-.37a8.625 8.625 0 012.788-5.32c1.944-1.945 4.805-2.607 7.04-1.74l.643.25c.875.34 1.48 1.157 1.558 2.094l.056.671a5.618 5.618 0 001.625 3.518l.842.842" />',
        megaphone: '<path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />',
        book: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />',
        flame: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.046 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />',
        pen: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />',
        medical: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" stroke-width="3" />', // simplified cross
        stop: '<path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />',
        users: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />',
        shirt: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16.084 16.084 0 00-4.649 4.763m5.498 5.497a4.5 4.5 0 01-3.266 5.772M16.637 13.97a9.01 9.01 0 00-3.375-3.375" />', // Just using a generic shape, shirt icon is tricky in path
        droplet: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 5.925-9.75 9.47-9.75 14.128 0 3.935 3.189 7.122 7.125 7.122 2.365 0 4.467-1.139 5.76-2.924a7.133 7.133 0 001.365-4.2c0-4.656-4.363-8.199-9.75-14.124z" />',
        video: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />',
        shield: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />',
        music: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 18.13h.01M9 18.13a3.89 3.89 0 003.89-3.89V6.392a3.89 3.89 0 013.889-3.89h.011m0 0h.011a3.89 3.89 0 013.889 3.890v5.845a3.89 3.89 0 01-3.89 3.889H17.5" />',
        coffee: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />', // using generic text/path combo as food
        trash: '<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />',
        hash: '<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />',
        smile: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
        trophy: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.961 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m11.372-5.362c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.961 3.99-2.48 5.228m2.48-5.228V2.721" />'
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
                text: "В каждом зале будет играть музыка на разминке и между розыгрышами."
            },
            {
                icon: icons.coffee,
                text: "В залах будет вода, батончики (для игроков), чай, кофе, сахар. В «Метеоре» есть кафетерий (до 21:00)."
            },
            {
                icon: icons.trash,
                text: "Пожалуйста, не оставляйте мусор. Контейнеры есть в залах и коридорах."
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        ${item.icon}
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        ${item.icon}
                    </svg>
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
