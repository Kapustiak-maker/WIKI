const pages = {
  home: {
    ru: {
      title: 'NOCTRL — Ванильное Выживание',
      content: `
        <h2>Добро пожаловать на NOCTRL</h2>
        <p>NOCTRL — это <strong>ванильный survival сервер</strong> с честной игрой и стабильностью. Без донатных преимуществ, лагов и скучных механик.</p>
        
        <h3>Что такое ванильный сервер?</h3>
        <p>Это сервер, который использует стандартные правила Minecraft без модов и огромного количества плагинов. Мы добавили только необходимые плагины для удобства и безопасности.</p>
        
        <h3>Наши ценности</h3>
        <div class="rule-box">
          <strong>🎮 Честная игра</strong> — никакого pay-to-win, никаких привилегий за деньги
        </div>
        <div class="rule-box">
          <strong>⚡ Стабильность</strong> — сервер работает 24/7 без крашей и лагов
        </div>
        <div class="rule-box">
          <strong>🛡️ Безопасность</strong> — защита от читеров и логирование всех действий
        </div>
        <div class="rule-box">
          <strong>🌍 Защита</strong> — гриферство запрещено, и будет наказано.
        </div>
        
        <h3>Присоединяйся!</h3>
        <p>Версия сервера: <strong>1.21.1</strong></p>
        <p>IP сервера: <strong>noctrl.nolags.fun Порт(не обязательно) 20036</strong></p>
        <p>Максимально игроков: <strong>Безлимит</strong></p>
        <p>Чтобы присоединиться, просто добавь сервер в лист серверов Minecraft и присоединись!</p>
        <p>Если у тебя есть вопросы или проблемы, присоединяйся к нашему <strong>Discord</strong> — там всегда помогут.</p>
      `
    },
    en: {
      title: 'NOCTRL — Vanilla Survival',
      content: `
        <h2>Welcome to NOCTRL</h2>
        <p>NOCTRL is a <strong>vanilla survival server</strong> with fair play and stability. No pay-to-win, no lag, no boring mechanics.</p>
        
        <h3>What is a vanilla server?</h3>
        <p>A server that uses standard Minecraft rules without mods and tons of plugins. We added only the necessary plugins for convenience and security.</p>
        
        <h3>Our Values</h3>
        <div class="rule-box">
          <strong>🎮 Fair Play</strong> — no pay-to-win, no money privileges
        </div>
        <div class="rule-box">
          <strong>⚡ Stability</strong> — server runs 24/7 without crashes and lag
        </div>
        <div class="rule-box">
          <strong>🛡️ Protection</strong> — griefing is forbidden and will be punished
        </div>
        <div class="rule-box">
          <strong>🌍 Moderation</strong> — strict rules to keep the server clean and safe
        </div>
        
        <h3>Join Us!</h3>
        <p>Server Version: <strong>1.21.1</strong></p>
        <p>Server IP: <strong>noctrl.nolags.fun Port(optional) 20036</strong></p>
        <p>Max Players: <strong>Unlimited</strong></p>
        <p>To join, simply add the server to your Minecraft server list and connect!</p>
        <p>If you have questions or issues, join our <strong>Discord</strong> — there's always help.</p>
      `
    }
  },

  rules: {
    ru: {
      title: 'Правила сервера',
      content: `
        <h2>📋 Правила сервера NOCTRL</h2>
        <p>Эти правила необходимы для создания безопасной и справедливой среды для всех игроков.</p>
        
        <h3>1️⃣ Запрещённые действия</h3>
        <div class="rule-box">
          <strong>❌ Читы и модификации</strong><br>
          Запрещены: x-ray, авто-кликеры, модификации для помощи в игре, читы клиент-сайда. Модификации для улучшения графики и качества жизни (OptiFine, Fabric) разрешены.
        </div>
        
        <div class="rule-box">
          <strong>❌ Лаг-машины и крашеры</strong><br>
          Запрещено создавать конструкции, которые вызывают лаги или крашат сервер. Сюда входят огромные мобо-фермы, огромные редстоун-сооружения без смысла и другие ресурсоёмкие механизмы.
        </div>
        
        <div class="rule-box">
          <strong>❌ Спам и флуд</strong><br>
          Запрещены спамить в чате, переполнять чат одинаковыми сообщениями или символами.
        </div>
        
        <div class="rule-box">
          <strong>❌ Оскорбления и токсичность</strong><br>
          Уважайте друг друга и администрацию. Запрещены оскорбления, расизм, сексизм и прочие формы дискриминации.
        </div>
        
        <h3>2️⃣ Гриферство</h3>
        <div class="rule-box">
          <strong>❌ Гриферство запрещено, но....</strong><br>
          Вы можете вредить другим игрокам и их постройкам, но ТОЛЬКО во времена специальных ивентов (например Судная Ночь). Обычный PvP-гриф — это нормально, баги и эксплойты — нет.
        </div>
        
        <h3>3️⃣ AFK-фермы</h3>
        <div class="rule-box">
          <strong>⚠️ AFK-фермы разрешены в разумных пределах</strong><br>
          Вы можете создавать фермы, но они не должны вызывать лаги. Максимум одна фермя на игрока одновременно.
        </div>
        
        <h3>4️⃣ Забанить можно за:</h3>
        <ul>
          <li>Использование читов и x-ray</li>
          <li>Создание лаг-машин</li>
          <li>Использование ботов для автоматизации</li>
          <li>Оскорбления и расизм</li>
          <li>Постоянный спам</li>
          <li>Кража чужой собственности (если доказано)</li>
          <li>Использование багов и эксплойтов
          <li>Гриферство.</li>
        </ul>
        
        <h3>5️⃣ Как обжаловать бан</h3>
        <p>Если ты считаешь, что был забанен несправедливо, присоединяйся к Discord и напиши в канал #обжалование-банов. Администраторы рассмотрят твоё дело.</p>
      `
    },
    en: {
      title: 'Server Rules',
      content: `
        <h2>📋 NOCTRL Server Rules</h2>
        <p>These rules are necessary to create a safe and fair environment for all players.</p>
        
        <h3>1️⃣ Forbidden Actions</h3>
        <div class="rule-box">
          <strong>❌ Cheats and Modifications</strong><br>
          Forbidden: x-ray, auto-clickers, gameplay modifications, client-side cheats. Graphics mods (OptiFine, Fabric) are allowed.
        </div>
        
        <div class="rule-box">
          <strong>❌ Lag Machines and Crash Exploits</strong><br>
          Creating structures that cause lag or server crashes is forbidden. This includes huge mob farms, massive redstone constructions, and other resource-intensive mechanisms.
        </div>
        
        <div class="rule-box">
          <strong>❌ Spam and Flooding</strong><br>
          Spamming chat with repeated messages or characters is forbidden.
        </div>
        
        <div class="rule-box">
          <strong>❌ Insults and Toxicity</strong><br>
          Respect each other and the staff. Insults, racism, sexism, and other discrimination are forbidden.
        </div>
        
        <h3>2️⃣ Griefing</h3>
        <div class="rule-box">
          <strong>❌ Griefing is forbidden, but...</strong><br>
          You can harm other players and their builds, but ONLY during special events (like Doomsday Night). Normal PvP grief is fine, exploits and bugs are not.
        </div>
        
        <h3>3️⃣ AFK Farms</h3>
        <div class="rule-box">
          <strong>⚠️ AFK farms are allowed within reason</strong><br>
          You can create farms, but they must not cause lag. Maximum one farm per player at a time.
        </div>
        
        <h3>4️⃣ Bannable Offenses:</h3>
        <ul>
          <li>Using cheats and x-ray</li>
          <li>Creating lag machines</li>
          <li>Using bots for automation</li>
          <li>Insults and racism</li>
          <li>Persistent spam</li>
          <li>Stealing others' property (if proven)</li>
          <li>Using exploits and bugs</li>
          <li>Griefing</li>
        </ul>
        
        <h3>5️⃣ How to Appeal a Ban</h3>
        <p>If you believe you were banned unfairly, join Discord and write in #ban-appeal. Administrators will review your case.</p>
      `
    }
  },

  plugins: {
    ru: {
      title: 'Плагины и возможности',
      content: `
        <h2>🔧 Плагины и возможности</h2>
        <p>Сервер использует минимум плагинов для поддержания чистоты ванильного опыта, но добавляет удобства и безопасность.</p>
        
        <h3>SleepFixer</h3>
        <div class="rule-box">
          <strong>Что делает:</strong> Ночь пропускается, если спит хотя бы 1 игрок вместо стандартных 50%.
        </div>
        <p><strong>Зачем:</strong> Чтобы один ленивый ночью не блокировал остальных.</p>
        
        <h3>EssentialsX</h3>
        <div class="rule-box">
          <strong>Что делает:</strong> Предоставляет полезные команды, спавн, телепортацию и другие инструменты QoL (качество жизни).
        </div>
        <p><strong>Основные команды:</strong></p>
        <ul>
          <li><code>/home</code> — установить и перейти домой</li>
          <li><code>/warp</code> — телепортация на выбранные точки</li>
          <li><code>/spawn</code> — вернуться на спавн</li>
          <li><code>/msg [игрок]</code> — личное сообщение</li>
          <li><code>/tpa [игрок]</code> — запрос телепортации к игроку</li>
        </ul>
        
        <h3>CoreProtect</h3>
        <div class="rule-box">
          <strong>Что делает:</strong> Логирует все действия игроков (блоки, убийства, ломание) и защищает от читеров.
        </div>
        <p><strong>Зачем:</strong> Администраторы могут проверить кто что сломал или украл, и откатить изменения.</p>
        
        <h3>Dynmap</h3>
        <div class="rule-box">
          <strong>Что делает:</strong> Реал-тайм карта мира, видна в браузере.
        </div>
        <p><strong>Адрес:</strong> <code>http://noctrl.nolags.fun:20036</code></p>
        <p>Можно видеть все постройки, игроков онлайн и исследовать карту прямо из браузера.</p>
        
        <h3>AntiCheat</h3>
        <div class="rule-box">
          <strong>Что делает:</strong> Автоматически детектирует и блокирует читеров.
        </div>
        <p><strong>Зачем:</strong> Чистота сервера и честная игра для всех.</p>
        
        <h3>Geyser</h3>
        <div class="rule-box">
          <strong>Что делает:</strong> Позволяет игрокам на Bedrock Edition (мобильная версия, консоли) играть на Java сервере.
        </div>
        <p><strong>Зачем:</strong> Больше игроков из разных платформ могут присоединиться!</p>
        
        <h3>Команды администратора (никого не касается)</h3>
        <p>На сервере установлены инструменты для администраторов, которые помогают следить за порядком, откатывать изменения и банить читеров.</p>
      `
    },
    en: {
      title: 'Plugins & Features',
      content: `
        <h2>🔧 Plugins & Features</h2>
        <p>The server uses minimal plugins to maintain vanilla experience while adding convenience and security.</p>
        
        <h3>SleepFixer</h3>
        <div class="rule-box">
          <strong>What it does:</strong> Night skips if at least 1 player sleeps instead of standard 50%.
        </div>
        <p><strong>Why:</strong> So one lazy player doesn't block everyone at night.</p>
        
        <h3>EssentialsX</h3>
        <div class="rule-box">
          <strong>What it does:</strong> Provides useful commands, spawn, teleportation and other QoL tools.
        </div>
        <p><strong>Main commands:</strong></p>
        <ul>
          <li><code>/home</code> — set and go home</li>
          <li><code>/warp</code> — teleport to selected points</li>
          <li><code>/spawn</code> — return to spawn</li>
          <li><code>/msg [player]</code> — private message</li>
          <li><code>/tpa [player]</code> — request teleportation</li>
        </ul>
        
        <h3>CoreProtect</h3>
        <div class="rule-box">
          <strong>What it does:</strong> Logs all player actions and protects from cheaters.
        </div>
        <p><strong>Why:</strong> Admins can check who broke/stole what and rollback changes.</p>
        
        <h3>Dynmap</h3>
        <div class="rule-box">
          <strong>What it does:</strong> Real-time world map visible in browser.
        </div>
        <p><strong>Address:</strong> <code>http://noctrl.nolags.fun:20036</code></p>
        <p>See all builds, online players and explore the map from browser.</p>
        
        <h3>AntiCheat</h3>
        <div class="rule-box">
          <strong>What it does:</strong> Automatically detects and blocks cheaters.
        </div>
        <p><strong>Why:</strong> Server purity and fair play for everyone.</p>
        
        <h3>Geyser</h3>
        <div class="rule-box">
          <strong>What it does:</strong> Allows Bedrock Edition players to play on Java server.
        </div>
        <p><strong>Why:</strong> More players from different platforms can join!</p>
        
        <h3>Admin Commands (not your concern)</h3>
        <p>The server has admin tools that help maintain order, rollback changes and ban cheaters.</p>
      `
    }
  },

  commands: {
    ru: {
      title: 'Команды',
      content: `
        <h2>⌨️ Команды сервера</h2>
        <p>Здесь список всех полезных команд, которые ты можешь использовать.</p>
        
        <h3>🏠 Телепортация и дом</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/home</span>
            <span class="command-desc">Установить или вернуться домой</span>
          </div>
          <div class="command-item">
            <span class="command-name">/sethome</span>
            <span class="command-desc">Установить точку дома в текущем месте</span>
          </div>
          <div class="command-item">
            <span class="command-name">/spawn</span>
            <span class="command-desc">Вернуться на спавн сервера</span>
          </div>
          <div class="command-item">
            <span class="command-name">/warp [название]</span>
            <span class="command-desc">Телепортироваться на выбранную точку</span>
          </div>
          <div class="command-item">
            <span class="command-name">/tpa [игрок]</span>
            <span class="command-desc">Попросить разрешение телепортироваться к игроку</span>
          </div>
          <div class="command-item">
            <span class="command-name">/tpaccept</span>
            <span class="command-desc">Принять запрос телепортации</span>
          </div>
          <div class="command-item">
            <span class="command-name">/tpdeny</span>
            <span class="command-desc">Отклонить запрос телепортации</span>
          </div>
        </div>
        
        <h3>💬 Чат и игроки</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/msg [игрок] [сообщение]</span>
            <span class="command-desc">Отправить личное сообщение</span>
          </div>
          <div class="command-item">
            <span class="command-name">/reply [сообщение]</span>
            <span class="command-desc">Ответить на последнее личное сообщение</span>
          </div>
          <div class="command-item">
            <span class="command-name">/list</span>
            <span class="command-desc">Показать список всех онлайн игроков</span>
          </div>
          <div class="command-item">
            <span class="command-name">/who [игрок]</span>
            <span class="command-desc">Информация об игроке</span>
          </div>
        </div>
        
        <h3>⚙️ Личные настройки</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/nick [ник]</span>
            <span class="command-desc">Изменить ник (если разрешено)</span>
          </div>
          <div class="command-item">
            <span class="command-name">/seen [игрок]</span>
            <span class="command-desc">Когда игрок был в последний раз онлайн</span>
          </div>
          <div class="command-item">
            <span class="command-name">/balance</span>
            <span class="command-desc">Показать твой баланс (если включена экономика)</span>
          </div>
          <div class="command-item">
            <span class="command-name">/pay [игрок] [сумма]</span>
            <span class="command-desc">Отправить деньги игроку</span>
          </div>
        </div>
        
        <h3>🌍 Утилиты</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/tp [игрок] [x y z]</span>
            <span class="command-desc">Телепортироваться к координатам (если разрешено)</span>
          </div>
          <div class="command-item">
            <span class="command-name">/coords</span>
            <span class="command-desc">Показать текущие координаты</span>
          </div>
          <div class="command-item">
            <span class="command-name">/time</span>
            <span class="command-desc">Показать текущее время на сервере</span>
          </div>
        </div>
        
        <p><strong>Примечание:</strong> Некоторые команды могут быть ограничены или недоступны в зависимости от конфигурации сервера.</p>
      `
    },
    en: {
      title: 'Commands',
      content: `
        <h2>⌨️ Server Commands</h2>
        <p>Here's a list of all useful commands you can use.</p>
        
        <h3>🏠 Teleportation & Home</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/home</span>
            <span class="command-desc">Set or return home</span>
          </div>
          <div class="command-item">
            <span class="command-name">/sethome</span>
            <span class="command-desc">Set home point at current location</span>
          </div>
          <div class="command-item">
            <span class="command-name">/spawn</span>
            <span class="command-desc">Return to server spawn</span>
          </div>
          <div class="command-item">
            <span class="command-name">/warp [name]</span>
            <span class="command-desc">Teleport to selected warp point</span>
          </div>
          <div class="command-item">
            <span class="command-name">/tpa [player]</span>
            <span class="command-desc">Request permission to teleport to player</span>
          </div>
          <div class="command-item">
            <span class="command-name">/tpaccept</span>
            <span class="command-desc">Accept teleport request</span>
          </div>
          <div class="command-item">
            <span class="command-name">/tpdeny</span>
            <span class="command-desc">Deny teleport request</span>
          </div>
        </div>
        
        <h3>💬 Chat & Players</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/msg [player] [message]</span>
            <span class="command-desc">Send private message</span>
          </div>
          <div class="command-item">
            <span class="command-name">/reply [message]</span>
            <span class="command-desc">Reply to last private message</span>
          </div>
          <div class="command-item">
            <span class="command-name">/list</span>
            <span class="command-desc">Show all online players</span>
          </div>
          <div class="command-item">
            <span class="command-name">/who [player]</span>
            <span class="command-desc">Player information</span>
          </div>
        </div>
        
        <h3>⚙️ Personal Settings</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/nick [nickname]</span>
            <span class="command-desc">Change nickname (if allowed)</span>
          </div>
          <div class="command-item">
            <span class="command-name">/seen [player]</span>
            <span class="command-desc">When player was last online</span>
          </div>
          <div class="command-item">
            <span class="command-name">/balance</span>
            <span class="command-desc">Show your balance (if economy enabled)</span>
          </div>
          <div class="command-item">
            <span class="command-name">/pay [player] [amount]</span>
            <span class="command-desc">Send money to player</span>
          </div>
        </div>
        
        <h3>🌍 Utilities</h3>
        <div class="command-list">
          <div class="command-item">
            <span class="command-name">/tp [player] [x y z]</span>
            <span class="command-desc">Teleport to coordinates (if allowed)</span>
          </div>
          <div class="command-item">
            <span class="command-name">/coords</span>
            <span class="command-desc">Show current coordinates</span>
          </div>
          <div class="command-item">
            <span class="command-name">/time</span>
            <span class="command-desc">Show current server time</span>
          </div>
        </div>
        
        <p><strong>Note:</strong> Some commands may be limited or unavailable depending on server configuration.</p>
      `
    }
  },

  faq: {
    ru: {
      title: 'FAQ - Часто задаваемые вопросы',
      content: `
        <h2>❓ FAQ - Часто задаваемые вопросы</h2>
        <p>Ответы на самые популярные вопросы о сервере.</p>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Как присоединиться к серверу?</div>
          <div class="faq-answer">
            Откройте Minecraft, нажмите "Мультиплеер", затем "Добавить сервер". 
            Введите название (например, NOCTRL) и адрес сервера: <strong>noctrl.nolags.fun</strong>. 
            Сохраните и подключитесь!
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Какая версия Minecraft нужна?</div>
          <div class="faq-answer">
            Сервер поддерживает версию <strong>1.21.1</strong>.Также можно заходить с версий от 1.8 1.21.11.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Можно ли использовать моды?</div>
          <div class="faq-answer">
            Да, но только графические моды (OptiFine, Fabric, Sodium). 
            Моды, которые дают преимущество в игре (читы, x-ray) запрещены и приведут к бану.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Как вернуть предметы, если я умер?</div>
          <div class="faq-answer">
            К сожалению, на ванильном сервере администраторы не восстанавливают предметы. 
            Это часть игровой механики выживания. Но вы можете использовать <code>/home</code> 
            для установки точки дома и быстро вернуться!
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Что такое гриферство и можно ли его делать?</div>
          <div class="faq-answer">
            Гриферство — это разрушение чужих построек. На NOCTRL гриферство <strong>запрещено</strong>. Если вас загриферили вне ивента, обратитесь в поддержку.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Как не потерять свои вещи?</div>
          <div class="faq-answer">
            Найдите безопасное место для своих ценностей. Вы можете:
            <ul>
              <li>Постройте дом подальше от других игроков</li>
              <li>Используйте сундуки в защищённых местах</li>
              <li>Попросите админа помочь с защитой (если доступно)</li>
            </ul>
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Как пожаловаться на читера?</div>
          <div class="faq-answer">
            Если вы подозреваете читера:
            <ol>
              <li>Присоединитесь к нашему Discord</li>
              <li>Откройте канал #отчёты-о-читерах</li>
              <li>Опишите что видели (скриншот, видео помогут)</li>
              <li>Администраторы проверят и примут меры</li>
            </ol>
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Сколько лагов на сервере?</div>
          <div class="faq-answer">
            Сервер оптимизирован и работает на надёжном хостинге. В норме лагов быть не должно. 
            Если вы испытываете лаги:
            <ul>
              <li>Проверьте интернет соединение</li>
              <li>Уменьшите рендер дистанцию в настройках</li>
              <li>Напишите администраторам в Discord</li>
            </ul>
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Когда сервер был создан?</div>
          <div class="faq-answer">
            Сервер NOCTRL был создан с целью предоставить честное и стабильное место для ванильного выживания. 
            Он постоянно развивается и улучшается благодаря обратной связи от сообщества.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Как связаться с администрацией?</div>
          <div class="faq-answer">
            Лучший способ — присоединиться к <strong>Discord</strong>. Там есть каналы для:
            <ul>
              <li>#помощь — общие вопросы</li>
              <li>#отчёты — отчёты о проблемах</li>
              <li>#обжалование-банов — если вас забанили</li>
            </ul>
          </div>
        </div>
      `
    },
    en: {
      title: 'FAQ - Frequently Asked Questions',
      content: `
        <h2>❓ FAQ - Frequently Asked Questions</h2>
        <p>Answers to the most popular questions about the server.</p>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">How do I join the server?</div>
          <div class="faq-answer">
            Open Minecraft, click "Multiplayer", then "Add Server". 
            Enter name (e.g., NOCTRL) and server address: <strong>play.noctrl.ru:25565</strong>. 
            Save and connect!
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">What Minecraft version is needed?</div>
          <div class="faq-answer">
            The server supports <strong>1.20.x</strong>. If you have a different version, 
            use Minecraft launcher and select the correct version before launching.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Can I use mods?</div>
          <div class="faq-answer">
            Yes, but only graphics mods (OptiFine, Fabric, Sodium). 
            Mods that give gameplay advantage (cheats, x-ray) are forbidden and will result in a ban.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">How do I recover items if I died?</div>
          <div class="faq-answer">
            Unfortunately, admins don't restore items on vanilla servers. 
            It's part of the survival mechanics. But you can use <code>/home</code> 
            to set a home point and return quickly!
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">What is griefing and is it allowed?</div>
          <div class="faq-answer">
            Griefing is destroying other players' builds. On NOCTRL, griefing is <strong>allowed</strong>, 
            but without exploits. It's part of PvP experience. If you don't want to be griefed, 
            build in a safe place away from others or ask admins for help.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">How do I protect my items?</div>
          <div class="faq-answer">
            Find a safe place for your valuables. You can:
            <ul>
              <li>Build a house away from other players</li>
              <li>Use chests in protected locations</li>
              <li>Ask admin for protection help (if available)</li>
            </ul>
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">How do I report a cheater?</div>
          <div class="faq-answer">
            If you suspect a cheater:
            <ol>
              <li>Join our Discord</li>
              <li>Open #cheater-reports channel</li>
              <li>Describe what you saw (screenshots, videos help)</li>
              <li>Admins will investigate and take action</li>
            </ol>
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">Is the server laggy?</div>
          <div class="faq-answer">
            The server is optimized and runs on reliable hosting. There shouldn't be lag. 
            If you experience lag:
            <ul>
              <li>Check your internet connection</li>
              <li>Reduce render distance in settings</li>
              <li>Write to admins on Discord</li>
            </ul>
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">When was the server created?</div>
          <div class="faq-answer">
            NOCTRL was created to provide a fair and stable place for vanilla survival. 
            It constantly evolves and improves thanks to community feedback.
          </div>
        </div>
        
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFAQ(this)">How do I contact the administration?</div>
          <div class="faq-answer">
            The best way is to join our <strong>Discord</strong>. There are channels for:
            <ul>
              <li>#help — general questions</li>
              <li>#reports — problem reports</li>
              <li>#ban-appeals — if you've been banned</li>
            </ul>
          </div>
        </div>
      `
    }
  },

  map: {
    ru: {
      title: 'Карта мира (Dynmap)',
      content: `
        <h2>🗺️ Карта мира (Dynmap)</h2>
        <p>Реал-тайм карта сервера. Здесь вы можете видеть все постройки, игроков и исследовать мир прямо из браузера.</p>
        
        <h3>Как использовать карту:</h3>
        <ul>
          <li><strong>Зум:</strong> Используйте колесо мыши или кнопки +/-</li>
          <li><strong>Перемещение:</strong> Левая кнопка мыши и перетаскивание</li>
          <li><strong>Поиск:</strong> Введите имя игрока или координаты для поиска</li>
          <li><strong>Игроки:</strong> Зелёные точки показывают онлайн игроков</li>
          <li><strong>Маркеры:</strong> Специальные места отмечены на карте</li>
        </ul>
        
        <h3>Особенности:</h3>
        <p>✅ Обновляется каждые несколько минут</p>
        <p>✅ Видны все биомы и рельеф</p>
        <p>✅ Можно видеть нижний мир (Nether) и энд (End)</p>
        <p>✅ Отмечены интересные места</p>
        
        <h3>Карта встроена ниже:</h3>
        <iframe src="http://c13.play2go.cloud:20036" loading="lazy"></iframe>
        
        <p><strong>Если карта не загружается:</strong></p>
        <p>Откройте карту в отдельном окне: <strong>play.noctrl.ru:8080</strong></p>
        <p>Проверьте брандмауэр и антивирус, они могут блокировать доступ.</p>
      `
    },
    en: {
      title: 'World Map (Dynmap)',
      content: `
        <h2>🗺️ World Map (Dynmap)</h2>
        <p>Real-time server map. Here you can see all builds, players and explore the world directly from browser.</p>
        
        <h3>How to use the map:</h3>
        <ul>
          <li><strong>Zoom:</strong> Use mouse wheel or +/- buttons</li>
          <li><strong>Movement:</strong> Left mouse button and drag</li>
          <li><strong>Search:</strong> Enter player name or coordinates to search</li>
          <li><strong>Players:</strong> Green dots show online players</li>
          <li><strong>Markers:</strong> Special places are marked on the map</li>
        </ul>
        
        <h3>Features:</h3>
        <p>✅ Updates every few minutes</p>
        <p>✅ All biomes and terrain visible</p>
        <p>✅ Can see Nether and End</p>
        <p>✅ Interesting places marked</p>
        
        <h3>Map embedded below:</h3>
        <iframe src="http://c13.play2go.cloud:20036" loading="lazy"></iframe>
        
        <p><strong>If map doesn't load:</strong></p>
        <p>Open map in separate window: <strong>play.noctrl.ru:8080</strong></p>
        <p>Check firewall and antivirus, they may block access.</p>
      `
    }
  },

  team: {
    ru: {
      title: 'Наша команда',
      content: `
        <h2>👥 Наша команда</h2>
        <p>Люди, которые делают NOCTRL лучше каждый день.</p>
        
        <h3>Администрация</h3>
        <div class="team-member">
          <div class="member-header">
            <strong class="member-name">👑 Kendexx_</strong>
            <span class="member-role">Создатель и главный администратор</span>
          </div>
          <p class="member-desc">Основатель сервера NOCTRL. Отвечает за развитие, безопасность и общее направление сервера. Всегда готов помочь и выслушать предложения от игроков.</p>
          <p class="member-info">📧 Discord: Kendexx_</p>
        </div>
        
        <h3>Модераторы</h3>
        <p>В ближайшее время появятся помощники администратора, которые будут следить за порядком и помогать игрокам!</p>
        
        <h3>Как присоединиться к команде?</h3>
        <p>Если ты активный игрок и хочешь помогать развивать сервер, напиши Kendexx_ в Discord. Ищем:</p>
        <ul>
          <li>🔨 Опытных строителей для создания арен и событий</li>
          <li>⚔️ Активных модераторов для следящие за порядком</li>
          <li>💻 Помощников с техническими знаниями</li>
        </ul>
      `
    },
    en: {
      title: 'Our Team',
      content: `
        <h2>👥 Our Team</h2>
        <p>The people who make NOCTRL better every day.</p>
        
        <h3>Administration</h3>
        <div class="team-member">
          <div class="member-header">
            <strong class="member-name">👑 Kendexx_</strong>
            <span class="member-role">Creator and Head Administrator</span>
          </div>
          <p class="member-desc">Founder of NOCTRL server. Responsible for development, security and overall server direction. Always ready to help and listen to player suggestions.</p>
          <p class="member-info">📧 Discord: Kendexx_</p>
        </div>
        
        <h3>Moderators</h3>
        <p>Administrator assistants will soon appear who will monitor order and help players!</p>
        
        <h3>How to join the team?</h3>
        <p>If you're an active player and want to help develop the server, write to Kendexx_ on Discord. We're looking for:</p>
        <ul>
          <li>🔨 Experienced builders for creating arenas and events</li>
          <li>⚔️ Active moderators to keep order</li>
          <li>💻 Assistants with technical knowledge</li>
        </ul>
      `
    }
  },

  news: {
    ru: {
      title: 'Новости и обновления',
      content: `
        <h2>📢 Новости и обновления</h2>
        <p>Последние новости сервера NOCTRL прямо из Discord канала.</p>
        <a href="https://discord.com/channels/1450558110854021233/1450563791137013790" target="_blank" class="discord-link-btn">
          💬 Все новости в Discord
        </a>
        <div id="discordNews"></div>
      `
    },
    en: {
      title: 'News & Updates',
      content: `
        <h2>📢 News & Updates</h2>
        <p>Latest news from NOCTRL Discord channel.</p>
        <a href="https://discord.com/channels/1450558110854021233/1450563791137013790" target="_blank" class="discord-link-btn">
          💬 All news in Discord
        </a>
        <div id="discordNews"></div>
      `
    }
  }
};

function loadPage(pageName) {
  const page = pages[pageName];
  const content = document.getElementById('content');
  const pageTitle = document.getElementById('pageTitle');
  const backBtn = document.getElementById('backBtn');
  
  if (pageHistory[pageHistory.length - 1] !== pageName) {
    pageHistory.push(pageName);
  }
  
  const lang = currentLang;
  pageTitle.textContent = page[lang].title;
  content.innerHTML = page[lang].content;
  
  if (pageName === 'news') {
    loadDiscordNews(lang);
  }
  
  backBtn.style.display = pageHistory.length > 1 ? 'block' : 'none';
  backBtn.textContent = lang === 'ru' ? '← Назад' : '← Back';
  
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[onclick="loadPage('${pageName}')"]`).classList.add('active');
  
  content.scrollTop = 0;
}

function loadDiscordNews(lang) {
  const newsContainer = document.getElementById('discordNews');
  
  if (!newsContainer) {
    console.log('News container not found');
    return;
  }
  
  fetch('news_data.json?t=' + new Date().getTime())
    .then(response => response.json())
    .then(data => {
      const news = data.news || [];
      
      console.log('✅ Новости загружены:', news.length);
      
      newsContainer.innerHTML = '';
      
      if (news.length === 0) {
        newsContainer.innerHTML = '<p style="color: #888;">Новостей пока нет. Следи за обновлениями!</p>';
        return;
      }
      
      news.forEach(newsItem => {
        const newsEl = document.createElement('div');
        newsEl.className = 'news-item';
        
        try {
          const date = new Date(newsItem.timestamp);
          let formattedDate = newsItem.date;
          
          if (date instanceof Date && !isNaN(date)) {
            formattedDate = lang === 'ru' ? 
              date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) :
              date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
          }
          
          newsEl.innerHTML = `
            <div class="news-header">
              <span class="news-date">${formattedDate}</span>
              <strong class="news-title">📢 ${escapeHtml(newsItem.author)}</strong>
            </div>
            <p class="news-content">${escapeHtml(newsItem.content)}</p>
          `;
        } catch (e) {
          console.error('Ошибка парсинга новости:', e);
        }
        
        newsContainer.appendChild(newsEl);
      });
    })
    .catch(error => {
      console.error('❌ Ошибка загрузки новостей:', error);
      newsContainer.innerHTML = '<p style="color: #888;">Не удалось загрузить новости из дискорда!</p>';
    });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function goBack() {
  if (pageHistory.length > 1) {
    pageHistory.pop();
    loadPage(pageHistory[pageHistory.length - 1]);
  }
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  loadPage('home');
});
