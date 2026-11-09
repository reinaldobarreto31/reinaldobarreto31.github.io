$mockupLimpapp = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="100%" height="100%" style="background:#090d16; border-radius:24px; font-family:system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="grad-limp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7f52ff" />
      <stop offset="100%" stop-color="#9333ea" />
    </linearGradient>
    <linearGradient id="card-limp" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#141c2e" />
      <stop offset="100%" stop-color="#0f1624" />
    </linearGradient>
  </defs>

  <!-- Status Bar -->
  <text x="24" y="24" fill="#a1a1aa" font-size="11" font-weight="600">09:41</text>
  <circle cx="180" cy="18" r="4" fill="#1e293b" />
  <g transform="translate(300, 14)">
    <path d="M0 8 h4 v-4 h-4 z M6 8 h4 v-6 h-4 z M12 8 h4 v-8 h-4 z" fill="#a1a1aa" />
  </g>

  <!-- App Bar -->
  <rect x="18" y="42" width="36" height="36" rx="10" fill="#1e1b4b" />
  <path d="M36 54 l-6 6 l6 6" stroke="#c084fc" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <text x="64" y="65" fill="#ffffff" font-size="17" font-weight="700">Limpapp Services</text>
  <rect x="270" y="48" width="72" height="24" rx="12" fill="#7f52ff" fill-opacity="0.2" stroke="#7f52ff" stroke-width="1" />
  <text x="306" y="64" fill="#c084fc" font-size="10" font-weight="700" text-anchor="middle">EM ANDAMENTO</text>

  <!-- Service Card -->
  <rect x="18" y="92" width="324" height="150" rx="16" fill="url(#card-limp)" stroke="#27272a" stroke-width="1" />
  <text x="34" y="120" fill="#ffffff" font-size="15" font-weight="700">Higienização Residencial</text>
  <text x="34" y="138" fill="#a1a1aa" font-size="11">Profissional: Cláudia Santos (4.9 ★)</text>
  <text x="34" y="156" fill="#71717a" font-size="11">Data: Hoje, 14:00 · Salvador, BA</text>

  <!-- Photos Before / After Showcase -->
  <rect x="34" y="172" width="95" height="56" rx="8" fill="#1e293b" stroke="#3f3f46" stroke-width="1" />
  <text x="81" y="204" fill="#a1a1aa" font-size="10" text-anchor="middle">Antes (Ambiente)</text>
  <rect x="137" y="172" width="95" height="56" rx="8" fill="#1e293b" stroke="#7f52ff" stroke-width="1" />
  <text x="184" y="204" fill="#c084fc" font-size="10" text-anchor="middle">Depois (Limpo)</text>
  <rect x="240" y="172" width="86" height="56" rx="8" fill="#2e1065" stroke="#7f52ff" stroke-width="1" stroke-dasharray="3,3" />
  <text x="283" y="196" fill="#c084fc" font-size="16" text-anchor="middle">+</text>
  <text x="283" y="212" fill="#c084fc" font-size="9" text-anchor="middle">Add Foto</text>

  <!-- Photo Upload Interactive Button -->
  <rect x="18" y="258" width="324" height="46" rx="14" fill="url(#grad-limp)" />
  <text x="180" y="286" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">📷 Subir Foto Ilustrativa do Serviço</text>

  <!-- Room Offline Status -->
  <rect x="18" y="318" width="324" height="92" rx="16" fill="url(#card-limp)" stroke="#27272a" stroke-width="1" />
  <circle cx="42" cy="346" r="14" fill="#065f46" />
  <path d="M36 346 l4 4 l8 -8" stroke="#34d399" stroke-width="2" fill="none" stroke-linecap="round" />
  <text x="68" y="342" fill="#ffffff" font-size="13" font-weight="600">Sincronização Offline Ativa</text>
  <text x="68" y="358" fill="#a1a1aa" font-size="11">Persistência local via Room Database</text>
  <text x="68" y="392" fill="#38bdf8" font-size="11" font-weight="600">Backend: Java 21 / Spring Boot 3 API</text>

  <!-- Bottom Navigation -->
  <rect x="0" y="580" width="360" height="60" fill="#0b0f19" stroke="#1f2937" stroke-width="1" />
  <circle cx="70" cy="605" r="4" fill="#7f52ff" />
  <text x="70" y="622" fill="#c084fc" font-size="9" text-anchor="middle">Início</text>
  <circle cx="180" cy="605" r="4" fill="#71717a" />
  <text x="180" y="622" fill="#71717a" font-size="9" text-anchor="middle">Serviços</text>
  <circle cx="290" cy="605" r="4" fill="#71717a" />
  <text x="290" y="622" fill="#71717a" font-size="9" text-anchor="middle">Galeria</text>
</svg>
'@

$mockupHabitFlow = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="100%" height="100%" style="background:#0b1120; border-radius:24px; font-family:system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="grad-habit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>
  </defs>
  <text x="24" y="24" fill="#94a3b8" font-size="11" font-weight="600">09:41</text>
  <text x="24" y="68" fill="#ffffff" font-size="20" font-weight="800">HabitFlow Android</text>
  <text x="24" y="86" fill="#94a3b8" font-size="12">Kotlin · Jetpack Compose · Room</text>

  <!-- Ring Card -->
  <rect x="18" y="104" width="324" height="130" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <circle cx="80" cy="169" r="44" stroke="#334155" stroke-width="8" fill="none" />
  <circle cx="80" cy="169" r="44" stroke="url(#grad-habit)" stroke-width="8" fill="none" stroke-dasharray="276" stroke-dashoffset="55" stroke-linecap="round" />
  <text x="80" y="174" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">80%</text>
  <text x="145" y="150" fill="#ffffff" font-size="14" font-weight="700">Meta Diária</text>
  <text x="145" y="170" fill="#38bdf8" font-size="12" font-weight="600">4 de 5 hábitos feitos</text>
  <text x="145" y="190" fill="#94a3b8" font-size="11">Sequência: 🔥 14 dias</text>

  <!-- Habits List -->
  <rect x="18" y="248" width="324" height="52" rx="14" fill="#1e293b" />
  <circle cx="44" cy="274" r="10" fill="#0284c7" />
  <text x="66" y="278" fill="#ffffff" font-size="13" font-weight="600">Beber 2.5L de Água</text>
  <text x="310" y="278" fill="#38bdf8" font-size="12">✓</text>

  <rect x="18" y="310" width="324" height="52" rx="14" fill="#1e293b" />
  <circle cx="44" cy="336" r="10" fill="#7c3aed" />
  <text x="66" y="340" fill="#ffffff" font-size="13" font-weight="600">Estudo Kotlin &amp; Compose</text>
  <text x="310" y="340" fill="#38bdf8" font-size="12">✓</text>

  <rect x="18" y="372" width="324" height="52" rx="14" fill="#1e293b" />
  <circle cx="44" cy="398" r="10" fill="#16a34a" />
  <text x="66" y="402" fill="#ffffff" font-size="13" font-weight="600">Treino Diário 45 min</text>
  <text x="310" y="402" fill="#38bdf8" font-size="12">✓</text>

  <rect x="18" y="434" width="324" height="52" rx="14" fill="#1e293b" stroke="#475569" stroke-width="1" stroke-dasharray="3,3" />
  <circle cx="44" cy="460" r="10" fill="#334155" />
  <text x="66" y="464" fill="#94a3b8" font-size="13">Leitura Técnica (Pendente)</text>

  <!-- FAB Button -->
  <circle cx="300" cy="540" r="26" fill="url(#grad-habit)" />
  <text x="300" y="547" fill="#ffffff" font-size="22" font-weight="600" text-anchor="middle">+</text>
</svg>
'@

$mockupCryptoPulse = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="100%" height="100%" style="background:#0a0e17; border-radius:24px; font-family:system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="grad-crypto" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
    </linearGradient>
  </defs>
  <text x="24" y="24" fill="#71717a" font-size="11" font-weight="600">09:41</text>
  <text x="24" y="66" fill="#ffffff" font-size="18" font-weight="800">CryptoPulse KMP</text>
  <text x="24" y="84" fill="#a1a1aa" font-size="11">Multiplatform · Ktor Client · StateFlow</text>

  <!-- Big Value Card -->
  <rect x="18" y="100" width="324" height="170" rx="18" fill="#121826" stroke="#1f2937" stroke-width="1" />
  <text x="34" y="128" fill="#9ca3af" font-size="12">Bitcoin / USD</text>
  <text x="34" y="156" fill="#ffffff" font-size="26" font-weight="800">$ 94,820.50</text>
  <text x="34" y="178" fill="#10b981" font-size="12" font-weight="700">+5.42% (24h)</text>
  <!-- Sparkline chart -->
  <path d="M 34 240 Q 90 220, 150 230 T 250 200 T 324 190" fill="none" stroke="#10b981" stroke-width="3" />
  <path d="M 34 240 Q 90 220, 150 230 T 250 200 T 324 190 V 254 H 34 Z" fill="url(#grad-crypto)" />

  <!-- Coin Row 1 -->
  <rect x="18" y="284" width="324" height="56" rx="14" fill="#121826" />
  <circle cx="46" cy="312" r="14" fill="#f59e0b" />
  <text x="46" y="317" fill="#ffffff" font-size="12" font-weight="800" text-anchor="middle">₿</text>
  <text x="72" y="310" fill="#ffffff" font-size="13" font-weight="700">Bitcoin</text>
  <text x="72" y="324" fill="#9ca3af" font-size="10">BTC · Ktor API</text>
  <text x="320" y="310" fill="#ffffff" font-size="13" font-weight="700" text-anchor="end">$ 94,820</text>
  <text x="320" y="324" fill="#10b981" font-size="10" text-anchor="end">+5.4%</text>

  <!-- Coin Row 2 -->
  <rect x="18" y="348" width="324" height="56" rx="14" fill="#121826" />
  <circle cx="46" cy="376" r="14" fill="#6366f1" />
  <text x="46" y="381" fill="#ffffff" font-size="12" font-weight="800" text-anchor="middle">Ξ</text>
  <text x="72" y="374" fill="#ffffff" font-size="13" font-weight="700">Ethereum</text>
  <text x="72" y="388" fill="#9ca3af" font-size="10">ETH · Coroutines Flow</text>
  <text x="320" y="374" fill="#ffffff" font-size="13" font-weight="700" text-anchor="end">$ 3,450</text>
  <text x="320" y="388" fill="#10b981" font-size="10" text-anchor="end">+3.1%</text>

  <!-- Coin Row 3 -->
  <rect x="18" y="412" width="324" height="56" rx="14" fill="#121826" />
  <circle cx="46" cy="440" r="14" fill="#14b8a6" />
  <text x="46" y="445" fill="#ffffff" font-size="12" font-weight="800" text-anchor="middle">S</text>
  <text x="72" y="438" fill="#ffffff" font-size="13" font-weight="700">Solana</text>
  <text x="72" y="452" fill="#9ca3af" font-size="10">SOL · Room Cache</text>
  <text x="320" y="438" fill="#ffffff" font-size="13" font-weight="700" text-anchor="end">$ 218</text>
  <text x="320" y="452" fill="#10b981" font-size="10" text-anchor="end">+8.7%</text>
</svg>
'@

$mockupChefExpress = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="100%" height="100%" style="background:#0f172a; border-radius:24px; font-family:system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="grad-chef" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f97316" />
      <stop offset="100%" stop-color="#ea580c" />
    </linearGradient>
  </defs>
  <text x="24" y="24" fill="#94a3b8" font-size="11" font-weight="600">09:41</text>
  <text x="24" y="66" fill="#ffffff" font-size="18" font-weight="800">ChefExpress Delivery</text>
  <text x="24" y="84" fill="#fdba74" font-size="11">Android Nativo · Kotlin · MVVM · Coil</text>

  <!-- Promo Banner -->
  <rect x="18" y="100" width="324" height="110" rx="16" fill="url(#grad-chef)" />
  <text x="34" y="136" fill="#ffffff" font-size="18" font-weight="800">Sabores Especiais</text>
  <text x="34" y="156" fill="#ffedd5" font-size="12">Frete grátis no primeiro pedido</text>
  <rect x="34" y="170" width="110" height="26" rx="13" fill="#ffffff" />
  <text x="89" y="187" fill="#ea580c" font-size="11" font-weight="700" text-anchor="middle">PEDIR AGORA</text>

  <!-- Dish 1 -->
  <rect x="18" y="224" width="324" height="84" rx="14" fill="#1e293b" />
  <rect x="28" y="234" width="64" height="64" rx="10" fill="#334155" />
  <text x="60" y="270" fill="#f97316" font-size="20" text-anchor="middle">🍔</text>
  <text x="104" y="254" fill="#ffffff" font-size="14" font-weight="700">Smash Burger Artesanal</text>
  <text x="104" y="272" fill="#94a3b8" font-size="11">Carne angus, queijo cheddar, bacon</text>
  <text x="104" y="292" fill="#fb923c" font-size="13" font-weight="700">R$ 34,90</text>
  <rect x="274" y="274" width="56" height="24" rx="12" fill="#f97316" />
  <text x="302" y="290" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">+ Add</text>

  <!-- Dish 2 -->
  <rect x="18" y="318" width="324" height="84" rx="14" fill="#1e293b" />
  <rect x="28" y="328" width="64" height="64" rx="10" fill="#334155" />
  <text x="60" y="364" fill="#f97316" font-size="20" text-anchor="middle">🍕</text>
  <text x="104" y="348" fill="#ffffff" font-size="14" font-weight="700">Pizza Napolitana</text>
  <text x="104" y="366" fill="#94a3b8" font-size="11">Molho artesanal, manjericão fresco</text>
  <text x="104" y="386" fill="#fb923c" font-size="13" font-weight="700">R$ 49,90</text>
  <rect x="274" y="368" width="56" height="24" rx="12" fill="#f97316" />
  <text x="302" y="384" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">+ Add</text>
</svg>
'@

$mockupClimaTemp = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="100%" height="100%" style="background:#0f172a; border-radius:24px; font-family:system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="grad-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
  </defs>
  <text x="24" y="24" fill="#94a3b8" font-size="11" font-weight="600">09:41</text>
  <text x="24" y="66" fill="#ffffff" font-size="18" font-weight="800">ClimaTempo Android</text>
  <text x="24" y="84" fill="#7dd3fc" font-size="11">Kotlin · Retrofit 2 · GPS Location</text>

  <!-- Big Weather Card -->
  <rect x="18" y="100" width="324" height="200" rx="20" fill="url(#grad-sky)" />
  <text x="180" y="140" fill="#ffffff" font-size="18" font-weight="600" text-anchor="middle">Salvador, BA</text>
  <text x="180" y="196" fill="#ffffff" font-size="52" font-weight="800" text-anchor="middle">28°C</text>
  <text x="180" y="224" fill="#e0f2fe" font-size="14" text-anchor="middle">☀️ Ensolarado com nuvens</text>
  <text x="90" y="260" fill="#bae6fd" font-size="12" text-anchor="middle">Umidade: 68%</text>
  <text x="270" y="260" fill="#bae6fd" font-size="12" text-anchor="middle">Vento: 18 km/h</text>

  <!-- 5-day forecast -->
  <rect x="18" y="316" width="324" height="150" rx="16" fill="#1e293b" />
  <text x="34" y="342" fill="#ffffff" font-size="13" font-weight="700">Previsão dos Próximos Dias</text>
  <text x="34" y="374" fill="#94a3b8" font-size="12">Terça · Sol</text>
  <text x="310" y="374" fill="#38bdf8" font-size="12" text-anchor="end">29° / 23°</text>
  <text x="34" y="406" fill="#94a3b8" font-size="12">Quarta · Parcial</text>
  <text x="310" y="406" fill="#38bdf8" font-size="12" text-anchor="end">28° / 22°</text>
  <text x="34" y="438" fill="#94a3b8" font-size="12">Quinta · Chuva passageira</text>
  <text x="310" y="438" fill="#38bdf8" font-size="12" text-anchor="end">26° / 21°</text>
</svg>
'@

$mockupFitPulse = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640" width="100%" height="100%" style="background:#0f172a; border-radius:24px; font-family:system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="grad-fit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>
  <text x="24" y="24" fill="#94a3b8" font-size="11" font-weight="600">09:41</text>
  <text x="24" y="66" fill="#ffffff" font-size="18" font-weight="800">FitPulse Multiplatform</text>
  <text x="24" y="84" fill="#6ee7b7" font-size="11">Flutter 3 &amp; Dart · Intermediário Multi</text>

  <rect x="18" y="100" width="324" height="140" rx="18" fill="url(#grad-fit)" />
  <text x="36" y="136" fill="#ffffff" font-size="14" font-weight="600">Treino em Andamento</text>
  <text x="36" y="174" fill="#ffffff" font-size="34" font-weight="800">00:45:20</text>
  <text x="36" y="204" fill="#d1fae5" font-size="13">🔥 420 kcal queimadas</text>

  <!-- Workout details -->
  <rect x="18" y="254" width="324" height="70" rx="14" fill="#1e293b" />
  <text x="36" y="282" fill="#ffffff" font-size="14" font-weight="700">Supino Reto com Barra</text>
  <text x="36" y="302" fill="#94a3b8" font-size="11">4 séries × 10 reps (32 kg)</text>
  <text x="310" y="292" fill="#10b981" font-size="12" font-weight="700" text-anchor="end">4/4 Concluído</text>

  <rect x="18" y="334" width="324" height="70" rx="14" fill="#1e293b" />
  <text x="36" y="362" fill="#ffffff" font-size="14" font-weight="700">Agachamento Livre</text>
  <text x="36" y="382" fill="#94a3b8" font-size="11">4 séries × 12 reps (40 kg)</text>
  <text x="310" y="372" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="end">2/4 Em Andamento</text>
</svg>
'@

$files = @(
  @{ name = "mockup-limpapp.svg"; content = $mockupLimpapp },
  @{ name = "mockup-habitflow.svg"; content = $mockupHabitFlow },
  @{ name = "mockup-cryptopulse.svg"; content = $mockupCryptoPulse },
  @{ name = "mockup-chefexpress.svg"; content = $mockupChefExpress },
  @{ name = "mockup-climatemp.svg"; content = $mockupClimaTemp },
  @{ name = "mockup-fitpulse.svg"; content = $mockupFitPulse }
)

foreach ($f in $files) {
  [System.IO.File]::WriteAllText("assets/mockups/$($f.name)", $f.content, [System.Text.Encoding]::UTF8)
  [System.IO.File]::WriteAllText("_deploy_standalone/public/mockups/$($f.name)", $f.content, [System.Text.Encoding]::UTF8)
  [System.IO.File]::WriteAllText("_deploy_standalone/src/assets/mockups/$($f.name)", $f.content, [System.Text.Encoding]::UTF8)
}

Write-Output "6 Mockups created in all directories!"
