# Kotlin Tasks Android 📱

> App Android para gestão de tarefas com arquitetura MVVM, Room Database e Material Design 3.

![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Material 3](https://img.shields.io/badge/Material_3-757575?style=for-the-badge&logo=material-design&logoColor=white)
![Room](https://img.shields.io/badge/Room_DB-4285F4?style=for-the-badge&logo=android&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Funcionalidades

- ✅ **CRUD completo** — criar, editar, excluir e marcar tarefas como concluídas
- 🔔 **Notificações locais** — lembretes por data/hora com WorkManager
- 🎯 **Prioridades** — filtro por Alta / Média / Baixa com indicadores visuais
- 🔍 **Busca e filtros** — pesquisa em tempo real com Flow
- 🌙 **Dark mode** — suporte nativo ao tema escuro (Material 3)
- 📦 **Persistência offline** — 100% local com Room + SQLite

---

## 🏗️ Arquitetura MVVM

```
app/
├── data/
│   ├── local/
│   │   ├── TaskDao.kt          # Data Access Object (Room)
│   │   ├── TaskDatabase.kt     # Singleton do banco (RoomDatabase)
│   │   └── TaskEntity.kt       # Entidade mapeada para tabela SQL
│   └── repository/
│       └── TaskRepository.kt   # Fonte única de verdade (Single Source of Truth)
│
├── domain/
│   ├── model/
│   │   └── Task.kt             # Modelo de domínio (desacoplado do Room)
│   └── usecase/
│       ├── GetTasksUseCase.kt
│       ├── AddTaskUseCase.kt
│       ├── UpdateTaskUseCase.kt
│       └── DeleteTaskUseCase.kt
│
├── presentation/
│   ├── tasklist/
│   │   ├── TaskListFragment.kt
│   │   └── TaskListViewModel.kt
│   ├── taskdetail/
│   │   ├── TaskDetailFragment.kt
│   │   └── TaskDetailViewModel.kt
│   └── adapter/
│       └── TaskAdapter.kt      # RecyclerView + DiffUtil
│
└── di/
    └── AppModule.kt            # Injeção de dependência (Hilt)
```

---

## 🛠️ Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Linguagem | Kotlin 1.9 |
| UI | Material Design 3 + ViewBinding |
| Arquitetura | MVVM + Clean Architecture |
| Banco de dados | Room 2.6 (SQLite) |
| Assincronismo | Coroutines + Flow |
| Injeção de dep. | Hilt (Dagger) |
| Navegação | Navigation Component |
| Tarefas agendadas | WorkManager |
| Testes | JUnit4 + MockK + Espresso |
| Build | Gradle 8 (KTS) |
| Min SDK | API 26 (Android 8.0) |
| Target SDK | API 34 (Android 14) |

---

## 🚀 Como rodar

### Pré-requisitos

- Android Studio Hedgehog (2023.1.1) ou superior
- JDK 17
- Android SDK API 34

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/reinaldobarreto31/kotlin-tasks-android.git
cd kotlin-tasks-android

# 2. Abra no Android Studio
# File → Open → selecione a pasta do projeto

# 3. Sincronize o Gradle
# Android Studio fará isso automaticamente

# 4. Execute no emulador ou dispositivo físico
# Run → Run 'app'  (Shift+F10)
```

> **Nota:** Certifique-se de que o emulador está rodando ou que o dispositivo está conectado via USB com depuração USB ativada.

---

## 📁 Estrutura do Projeto

```
kotlin-tasks-android/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/barreto/kotlintasks/
│   │   │   │   ├── data/
│   │   │   │   ├── domain/
│   │   │   │   ├── presentation/
│   │   │   │   └── di/
│   │   │   ├── res/
│   │   │   │   ├── layout/
│   │   │   │   ├── values/
│   │   │   │   └── drawable/
│   │   │   └── AndroidManifest.xml
│   │   ├── test/                # Testes unitários
│   │   └── androidTest/         # Testes instrumentados
│   └── build.gradle.kts
├── gradle/
│   └── libs.versions.toml       # Version catalog
├── build.gradle.kts
└── settings.gradle.kts
```

---

## 🧪 Testes

```bash
# Testes unitários
./gradlew test

# Testes instrumentados (requer dispositivo/emulador)
./gradlew connectedAndroidTest

# Relatório de cobertura
./gradlew jacocoTestReport
```

---

## 📋 Roadmap

- [x] Estrutura MVVM com Clean Architecture
- [x] Room Database + DAO + Migrations
- [x] Coroutines + Flow para reatividade
- [x] Material Design 3 com suporte a temas
- [ ] Sincronização com Firebase Firestore
- [ ] Backup e restauração na nuvem
- [ ] Widgets para a tela inicial
- [ ] Integração com Google Calendar

---

## 👤 Autor

**Reinaldo Barreto**

- GitHub: [@reinaldobarreto31](https://github.com/reinaldobarreto31)
- LinkedIn: [Reinaldo Barreto](https://linkedin.com/in/reinaldo-barreto)

---

## 📄 Licença

Este projeto está licenciado sob a MIT License — veja o arquivo [LICENSE](LICENSE) para detalhes.
