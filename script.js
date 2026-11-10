// UHL ARCHIVE Master Core Script
document.addEventListener('DOMContentLoaded', () => {

    // --- БЛОК 1: СЕЗОНИ (seasons.html) ---
    const seasonDetails = document.getElementById('season-details-view');
    const seasonSelector = document.getElementById('season-selector');

    const seasonsFull = {
        "8": { champ: "4 раки і толяс", cup: "sim 23", scorer: "Agbonlahor 11 (88 голів)", teams: [
            { name: "4 раки і толяс", status: "🏆 Чемпіон України" },
            { name: "Sало Team", status: "🥈 Срібний призер" },
            { name: "АГОВ TEAM", status: "🥉 Бронзовий призер" },
            { name: "sim 23", status: "🏆 Володар Кубка УХЛ" },
            { name: "Курочки", status: "1/2 фіналу Кубка" },
            { name: "Жмеринка Юнайтед", status: "1/4 фіналу Кубка" },
            { name: "ХК ТРЮКІ", status: "1/2 фіналу Кубка" },
            { name: "Okay Team", status: "1/4 фіналу Кубка" },
            { name: "Мрія", status: "Учасник Вищої ліги" },
            { name: "Ratas", status: "Учасник Вищої ліги" }
        ]},
        "7": { champ: "4 раки і толяс", cup: "Team Slaves", scorer: "Agbonlahor 11 (82 голи)", teams: [
            { name: "4 раки і толяс", status: "🏆 Чемпіон України" },
            { name: "Team Slaves", status: "🏆 Володар Кубка УХЛ" },
            { name: "Sало Team", status: "🥉 3 місце" },
            { name: "Seluki", status: "4 місце" },
            { name: "Ratas", status: "5 місце" },
            { name: "Мрія", status: "6 місце" },
            { name: "Coconut", status: "7 місце" }
        ]},
        "6": { champ: "4 раки і толяс", cup: "4 раки і толяс", scorer: "Agbonlahor 11 (154 голів)", teams: [
            { name: "4 раки і толяс", status: "🏆 Золотий дубль (Чемпіон + Кубок)" },
            { name: "Team Slaves", status: "🥈 2 місце" },
            { name: "Warriors", status: "🥉 3 місце" },
            { name: "Sало Team", status: "🥈 Фіналіст Кубка" },
            { name: "Ratas", status: "5 місце" },
            { name: "Coconut", status: "6 місце" }
        ]},
        "5": { champ: "Big Dick Club", cup: "Big Dick Club", scorer: "Agbonlahor 11 (87 голів)", teams: [
            { name: "Big Dick Club", status: "🏆 Золотий дубль (Чемпіон + Кубок)" },
            { name: "4 раки і толяс", status: "🥈 2 місце" },
            { name: "Butterflies", status: "🥉 3 місце / Фіналіст Кубка" },
            { name: "Пісочниця", status: "4 місце" },
            { name: "Ratas", status: "5 місце" }
        ]},
        "4": { champ: "4 раки і толяс", cup: "Мрія", scorer: "cancer (115 голів)", teams: [
            { name: "4 раки і толяс", status: "🏆 Чемпіон України" },
            { name: "Мрія", status: "🏆 Володар Кубка УХЛ / 🥈 2 місце" },
            { name: "Butterflies", status: "🥉 3 місце" },
            { name: "Seluki", status: "4 місце" },
            { name: "ФК ЕНЕРГЕТИК", status: "🥈 Фіналіст Кубка" }
        ]},
        "3": { champ: "4 раки і толяс", cup: "4 раки і толяс", scorer: "Agbonlahor 11 (114 голів)", teams: [
            { name: "4 раки і толяс", status: "🏆 Золотий дубль" },
            { name: "Мрія", status: "🥈 2 місце" },
            { name: "Butterflies", status: "🥉 3 місце" },
            { name: "COCONUT", status: "4 місце" }
        ]},
        "2": { champ: "4 раки і толяс", cup: "4 раки і толяс", scorer: "^aMp^ (115 голів)", teams: [
            { name: "4 раки і толяс", status: "🏆 Золотий дубль" },
            { name: "Мрія", status: "🥈 2 місце" },
            { name: "ФК Уєбани", status: "🥉 3 місце" },
            { name: "Freedom", status: "4 місце" }
        ]},
        "1": { champ: "Big Dick Club", cup: "Big Dick Club", scorer: "iks (117 голів)", teams: [
            { name: "Big Dick Club", status: "🏆 Перший Чемпіон в історії УХЛ" },
            { name: "Bulls", status: "🥈 2 місце" },
            { name: "Team Slaves", status: "🥉 3 місце" },
            { name: "ФК Уєбани", status: "4 місце" }
        ]}
    };

    function renderSeasonView(sNum) {
        if (!seasonDetails) return;
        const s = seasonsFull[sNum];
        seasonDetails.innerHTML = `
            <div class="card-grid" style="margin-bottom:20px;">
                <div class="card">
                    <h3 style="color:#d4af37;">🥇 Чемпіон</h3>
                    <p style="font-size:18px; font-weight:bold;">${s.champ}</p>
                </div>
                <div class="card">
                    <h3 style="color:#d4af37;">🏆 Володар Кубка</h3>
                    <p style="font-size:18px; font-weight:bold;">${s.cup}</p>
                </div>
                <div class="card">
                    <h3 style="color:#d4af37;">⚽ Найкращий бомбардир</h3>
                    <p style="font-size:18px; font-weight:bold;">${s.scorer}</p>
                </div>
            </div>

            <h3>📊 Турнірна Таблиця ${sNum} Сезону</h3>
            <div class="table-responsive" style="margin-top:10px;">
                <table class="data-table">
                    <thead><tr><th>#</th><th>Команда</th><th>Статус / Результати</th></tr></thead>
                    <tbody>
                        ${s.teams.map((t, i) => `<tr><td>${i+1}</td><td><strong>${t.name}</strong></td><td>${t.status}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    if (seasonDetails && seasonSelector) {
        seasonSelector.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-btn')) {
                document.querySelectorAll('#season-selector .tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderSeasonView(e.target.dataset.s);
            }
        });
    }

    // --- БЛОК 2: ІСТОРІЯ ТРАНСФЕРІВ (transfers.html) ---
    const transfersList = document.getElementById('transfers-list');
    const transferSearch = document.getElementById('transfer-search');
    
    const sampleTransfers = [
        { player: "Agbonlahor 11", from: "Мрія", to: "4 раки і толяс", season: "Сезон 3", details: "Офіційний трансфер" },
        { player: "tolyasik", from: "ФК Уєбани", to: "4 раки і толяс", season: "Сезон 2", details: "Перехід капітана" },
        { player: "cancer", from: "COCONUT", to: "Butterflies", season: "Сезон 4", details: "Трансфер бомбардира" },
        { player: "tekashka", from: "COCONUT", to: "Зоря Миронівка", season: "Сезон 7", details: "Оренда" },
        { player: "Din", from: "Мрія", to: "Дніпро", season: "Сезон 6", details: "Трансфер" },
        { player: "gr0nback", from: "DREAMCATCHER", to: "Динамо Київ", season: "Сезон 5", details: "Вільний агент" },
        { player: "Kjamb", from: "ЛНЗ Черкаси", to: "4 раки і толяс", season: "Сезон 7", details: "Трансфер" }
    ];

    function renderTransfers(filter = '') {
        if (!transfersList) return;
        const q = filter.toLowerCase();
        const filtered = sampleTransfers.filter(t => 
            t.player.toLowerCase().includes(q) || 
            t.from.toLowerCase().includes(q) || 
            t.to.toLowerCase().includes(q)
        );

        transfersList.innerHTML = filtered.map(t => `
            <tr>
                <td><strong>${t.player}</strong></td>
                <td style="color:#e74c3c;">${t.from}</td>
                <td style="color:#2ecc71;">${t.to}</td>
                <td><span class="season-tag">${t.season}</span></td>
                <td style="color:#888;">${t.details}</td>
            </tr>
        `).join('');
    }

    if (transfersList) {
        renderTransfers();
        transferSearch?.addEventListener('input', (e) => renderTransfers(e.target.value));
    }

    // --- БЛОК 3: БАЗА ГРАВЦІВ (players.html) ---
    const playersList = document.getElementById('players-list');
    const playerSearch = document.getElementById('player-search');
    const sortSelect = document.getElementById('sort-select');

    if (playersList) {
        fetch('data/database.json')
            .then(res => res.json())
            .then(data => {
                const playersArray = Object.values(data.players || {});
                function renderPlayers() {
                    let list = [...playersArray];
                    const q = playerSearch?.value.toLowerCase() || '';
                    if (q) list = list.filter(p => p.name.toLowerCase().includes(q));

                    const sortBy = sortSelect?.value || 'goals';
                    list.sort((a, b) => {
                        if (sortBy === 'name') return a.name.localeCompare(b.name);
                        return (b.stats[sortBy] || 0) - (a.stats[sortBy] || 0);
                    });

                    playersList.innerHTML = list.slice(0, 50).map((p, idx) => `
                        <tr>
                            <td>${idx + 1}</td>
                            <td><strong>${p.name}</strong></td>
                            <td style="color:#888;">${p.current_team || '—'}</td>
                            <td style="color:#d4af37; font-weight:bold;">${p.stats.goals}</td>
                            <td>${p.stats.assists}</td>
                            <td>${p.stats.cs}</td>
                            <td>${p.history?.length || 1}</td>
                        </tr>
                    `).join('');
                }
                renderPlayers();
                playerSearch?.addEventListener('input', renderPlayers);
                sortSelect?.addEventListener('change', renderPlayers);
            })
            .catch(() => console.log('База даних завантажиться на GitHub Pages'));
    }
});