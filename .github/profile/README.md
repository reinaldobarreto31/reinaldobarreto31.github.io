# 👋 Olá, eu sou Reinaldo Barreto da Silva

> **Software Engineer · Full-Stack Java 8+ / Spring Boot 3 · Mobile Kotlin & Flutter · Front-ends Next.js | Vue 3 | Angular 18**

---

## 🚀 Sobre Mim

- 🏢 **Analista de Sistemas / Desenvolvedor de Software** com foco em soluções escaláveis
- 🎯 **Especialidade:** Java 8+ LTS, Spring Boot 3 (Security / Data JPA / Cloud Gateway / OpenAPI 3)
- 📱 **Mobile:** Kotlin 2.0 · Jetpack Compose (Android Nativo) · Flutter 3.x (iOS + Android)
- ⚡ **Full-Stack Front-ends:** Next.js 14 · Node.js 20 LTS · React 18 · Vue.js 3 · Angular 18 · TypeScript 5 · JavaScript (ES2024)
- 🛠️ **Infra:** PostgreSQL · MySQL · MongoDB · Redis · Docker · Kubernetes · GitHub Actions CI/CD
- 📐 **Padrões:** Clean Architecture · Hexagonal (Ports & Adapters) · DDD · SOLID · CQRS · TDD (JUnit 5 · Mockito)

---

## 🏆 Stack Principal — Prioridade Oficial

> ### 1️⃣ Back-end (Foco #1)
>
> ![Java](https://img.shields.io/badge/Java%2026+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
> ![Spring Boot](https://img.shields.io/badge/Spring_Boot%203-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
> ![Spring Security](https://img.shields.io/badge/Spring_Security%206-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
> ![Hibernate](https://img.shields.io/badge/JPA%20Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
> ![JUnit 5](https://img.shields.io/badge/JUnit%205-25A162?style=for-the-badge&logo=junit5&logoColor=white)
> ![Mockito](https://img.shields.io/badge/Mockito-C22D40?style=for-the-badge&logo=mockito&logoColor=white)

> ### 2️⃣ Mobile (Híbrido + Nativo)
>
> ![Kotlin](https://img.shields.io/badge/Kotlin%202.0-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
> ![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=jetpack-compose&logoColor=white)
> ![Flutter](https://img.shields.io/badge/Flutter%203.x-02569B?style=for-the-badge&logo=flutter&logoColor=white)
> ![Dart](https://img.shields.io/badge/Dart%203-0175C2?style=for-the-badge&logo=dart&logoColor=white)

> ### 3️⃣ Front-end Full-Stack (NUNCA omitir)
>
> ![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=next.js&logoColor=white)
> ![Node.js](https://img.shields.io/badge/Node.js%2020%20LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
> ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
> ![Vue.js](https://img.shields.io/badge/Vue.js%203-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)
> ![Angular](https://img.shields.io/badge/Angular%2018-DD0031?style=for-the-badge&logo=angular&logoColor=white)
> ![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)
> ![TypeScript](https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
> ![JavaScript](https://img.shields.io/badge/JavaScript%20ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
> ![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
> ![Vite](https://img.shields.io/badge/Vite%205-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> ### 4️⃣ Bancos · DevOps · Infra
>
> ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
> ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
> ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
> ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
> ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
> ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
> ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
> ![Swagger](https://img.shields.io/badge/OpenAPI%203-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
> ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
> ![Linux](https://img.shields.io/badge/Linux%20Ubuntu-2496ED?style=for-the-badge&logo=linux&logoColor=white)

---

## � Amostras de Código (Stack em Ação — Java & Kotlin 2.0)

> Trechos reais da stack que trabalho diariamente: **Spring Boot 3 REST + JPA** e **Jetpack Compose Android com Coroutines Flow**.

### 🟦 Java LTS · Spring Boot 3 · (Controller · Repository · Record DTO)

```java
// ==============================
// ClienteResponse.java — RECORD (Java 8+)
// ==============================
package br.com.reinaldobarreto.clientehub.dto;

import java.time.LocalDate;

public record ClienteResponse(
        Long id,
        String nome,
        String email,
        String telefone,
        String cpfCnpj,
        LocalDate dataCadastro,
        Boolean ativo
) {}
```

```java
// ==============================
// ClienteRepository.java — JPA + Spring Data
// ==============================
package br.com.reinaldobarreto.clientehub.repositories;

import br.com.reinaldobarreto.clientehub.entities.Cliente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    Optional<Cliente> findByEmailIgnoreCase(String email);

    @Query("""
           SELECT c FROM Cliente c
            WHERE (:busca IS NULL
               OR LOWER(c.nome)   LIKE LOWER(CONCAT('%', :busca, '%'))
               OR LOWER(c.email)  LIKE LOWER(CONCAT('%', :busca, '%'))
               OR LOWER(c.cpfCnpj) LIKE LOWER(CONCAT('%', :busca, '%')))
           """)
    Page<Cliente> buscarPaginado(@Param("busca") String busca, Pageable pageable);
}
```

```java
// ==============================
// ClienteController.java — REST + Spring Security JWT 6.x
// ==============================
package br.com.reinaldobarreto.clientehub.controllers;

import br.com.reinaldobarreto.clientehub.dto.ClienteRequest;
import br.com.reinaldobarreto.clientehub.dto.ClienteResponse;
import br.com.reinaldobarreto.clientehub.services.ClienteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/clientes")
@RequiredArgsConstructor
@Tag(name = "Clientes", description = "CRUD completo de clientes (autenticado JWT)")
@SecurityRequirement(name = "bearer-key")
@CrossOrigin(origins = {"http://localhost:3000", "https://reinaldobarreto31.github.io"}, maxAge = 3600)
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN','OPERADOR')")
    @Operation(summary = "Lista paginada de clientes (com busca textual)")
    public ResponseEntity<Page<ClienteResponse>> listar(
            @RequestParam(required = false) String busca,
            @PageableDefault(size = 20, sort = {"nome"}) Pageable pageable) {
        return ResponseEntity.ok(clienteService.listarPaginado(busca, pageable));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','OPERADOR')")
    @Operation(summary = "Busca um cliente pelo ID")
    public ResponseEntity<ClienteResponse> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(clienteService.buscarPorId(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Cadastra novo cliente")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ClienteResponse> cadastrar(@RequestBody @Valid ClienteRequest request) {
        var salvo = clienteService.cadastrar(request);
        var uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(salvo.id()).toUri();
        return ResponseEntity.created(uri).body(salvo);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Atualiza cliente existente")
    public ResponseEntity<ClienteResponse> atualizar(@PathVariable Long id,
                                                      @RequestBody @Valid ClienteRequest request) {
        return ResponseEntity.ok(clienteService.atualizar(id, request));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Remove (soft-delete) um cliente")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        clienteService.remover(id);
        return ResponseEntity.noContent().build();
    }
}
```

### 🟪 Kotlin 2.0 · Jetpack Compose Android (ViewModel + StateFlow + Hilt)

```kotlin
// ==============================
// HomeViewModel.kt — MVVM + Coroutines Flow + Hilt DI
// ==============================
package br.com.reinaldobarreto.appfinanceiro.ui.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.reinaldobarreto.appfinanceiro.data.LancamentoRepository
import br.com.reinaldobarreto.appfinanceiro.data.ResumoMes
import br.com.reinaldobarreto.appfinanceiro.domain.Lancamento
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import java.time.YearMonth
import javax.inject.Inject

@HiltViewModel
class HomeViewModel @Inject constructor(
    private val repository: LancamentoRepository
) : ViewModel() {

    private val _mesCorrente = MutableStateFlow(YearMonth.now())
    val mesCorrente: StateFlow<YearMonth> = _mesCorrente.asStateFlow()

    @OptIn(ExperimentalCoroutinesApi::class)
    val uiState: StateFlow<HomeUiState> = _mesCorrente
        .flatMapLatest { mes ->
            combine(
                repository.lancamentosDoMes(mes),
                repository.resumoDoMes(mes)
            ) { lancamentos, resumo ->
                HomeUiState.Sucesso(
                    mes = mes,
                    lancamentos = lancamentos,
                    resumo = resumo
                )
            }
        }
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = HomeUiState.Carregando
        )

    fun proximoMes() { _mesCorrente.update { it.plusMonths(1) } }
    fun mesAnterior() { _mesCorrente.update { it.minusMonths(1) } }

    fun alternarPago(lancamento: Lancamento) {
        viewModelScope.launch {
            repository.salvar(lancamento.copy(pago = !lancamento.pago))
        }
    }
}

sealed interface HomeUiState {
    data object Carregando : HomeUiState
    data class Sucesso(
        val mes: YearMonth,
        val lancamentos: List<Lancamento>,
        val resumo: ResumoMes
    ) : HomeUiState
}
```

```kotlin
// ==============================
// HomeScreen.kt — Jetpack Compose + Material3
// ==============================
package br.com.reinaldobarreto.appfinanceiro.ui.home

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import br.com.reinaldobarreto.appfinanceiro.domain.TipoLancamento.RECEITA
import java.time.format.DateTimeFormatter

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    viewModel: HomeViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("App Financeiro") },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer
                )
            )
        }
    ) { padding ->
        when (val state = uiState) {
            HomeUiState.Carregando -> Box(Modifier.fillMaxSize()) {
                CircularProgressIndicator(Modifier.align(Alignment.Center))
            }
            is HomeUiState.Sucesso -> ConteudoHome(
                state = state,
                onAnterior = viewModel::mesAnterior,
                onProximo = viewModel::proximoMes,
                onTogglePago = viewModel::alternarPago,
                modifier = Modifier.padding(padding)
            )
        }
    }
}

@Composable
private fun ConteudoHome(
    state: HomeUiState.Sucesso,
    onAnterior: () -> Unit,
    onProximo: () -> Unit,
    onTogglePago: (br.com.reinaldobarreto.appfinanceiro.domain.Lancamento) -> Unit,
    modifier: Modifier = Modifier
) {
    LazyColumn(modifier.padding(horizontal = 16.dp, vertical = 12.dp)) {

        item {
            SeletorMes(
                mesStr = state.mes.format(DateTimeFormatter.ofPattern("MMMM / yyyy")),
                onAnterior = onAnterior,
                onProximo = onProximo
            )
        }

        item {
            ResumoCard(state.resumo)
            Spacer(Modifier.height(16.dp))
        }

        items(state.lancamentos, key = { it.id ?: 0L }) { lancamento ->
            LancamentoItem(
                lancamento = lancamento,
                onTogglePago = { onTogglePago(lancamento) }
            )
            HorizontalDivider(Modifier.padding(vertical = 4.dp))
        }
    }
}

@Composable
private fun SeletorMes(mesStr: String, onAnterior: () -> Unit, onProximo: () -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        IconButton(onClick = onAnterior) { Icon(Icons.Default.ChevronLeft, null) }
        Text(mesStr.replaceFirstChar { it.uppercaseChar() },
             style = MaterialTheme.typography.titleMedium)
        IconButton(onClick = onProximo) { Icon(Icons.Default.ChevronRight, null) }
    }
}
```

---

## �📦 Projetos Principais (Repositórios Reais)

| # | 🌟 Projeto | Link | Principais Stacks |
|---|---|---|---|
| 1 | **Portal Cliente + Contrato Spring Full-Stack** | [clientehub](https://github.com/reinaldobarreto31/clientehub) | Java 8+ · Spring Boot 3 · PostgreSQL · Next.js 14 · TypeScript |
| 2 | **StockWise — Gestão de Estoque & Financeiro** | [stockwise](https://github.com/reinaldobarreto31/stockwise) | Spring Boot 3 · Spring Data JPA · Thymeleaf · Bootstrap · MySQL |
| 3 | **Portfólio Pessoal (Publicado)** | [reinaldobarreto31.github.io](https://reinaldobarreto31.github.io) | React 18 · TypeScript 5 · Vite 5 · Tailwind · shadcn/ui · Admin CRUD |
| 4 | **PDF Compressor Web (Offline-first)** | [→ dentro do portfolio](https://reinaldobarreto31.github.io/pdf-compressor/) | Vite · React · TS · Service Worker · Canvas Compress |

---

## 📊 GitHub Stats

<div align="center">
  <img width="49%" src="https://github-readme-stats.vercel.app/api?username=reinaldobarreto31&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&rank_icon=github" />
  <img width="49%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=reinaldobarreto31&layout=compact&theme=tokyonight&hide_border=true&langs_count=12" />
</div>

<div align="center">
  <img width="75%" src="https://github-readme-streak-stats.herokuapp.com/?user=reinaldobarreto31&theme=tokyonight&hide_border=true" />
</div>

---

## 🎯 Perfil Técnico Completo

| Categoria | Detalhes |
|---|---|
| **Arquitetura** | Clean Architecture · Hexagonal (Ports & Adapters) · DDD · CQRS · Event Sourcing · Microserviços |
| **Back-end** | Java 8+ Records · Virtual Threads · Spring Boot 3 Starters · Spring Security 6 JWT · Spring Cloud Gateway · JPA Hibernate · Migrations Flyway / Liquibase |
| **Testes** | TDD · JUnit 5 · Mockito · TestContainers · Spring Boot Test · Jest · Vitest · Cypress |
| **Mobile** | Kotlin 2.0 · Coroutines Flow · Hilt DI · Room DB · Jetpack Compose. Flutter Riverpod · Provider · Go Router · Firebase · SQLite |
| **Front-end SSR/SSG** | Next.js 14 App Router · RSC · Server Actions · tRPC · NextAuth · ISR · Edge Runtime. Nuxt 3 · Angular Universal · SSR Vite |
| **Front-end SPA** | Vue 3 Composition API · Pinia · Nuxt 3 · Angular 18 Standalone · Signals · NgRx · RxJS. React 18 hooks · Context Reducer · Radix · shadcn/ui |
| **Bancos SQL** | PostgreSQL 16 (JSONB · Window Fns · GIN/GiST indexes). MySQL 8 (InnoDB FULLTEXT · Replication · Flyway) |
| **NoSQL / Cache** | MongoDB Atlas Aggregation · Atlas Search · Change Streams. Redis 7 Cache · Rate Limit · Pub/Sub · Bloom Filters |
| **DevOps & Infra** | Docker multi-stage. Docker Compose. Kubernetes Deploy Ingress Helm HPA. GitHub Actions (reusable, matrix, cache, artifacts). Linux Ubuntu · systemd · SSH hardening · ufw · fail2ban · bash scripting |
| **API & Docs** | OpenAPI 3.0 Spec. Springdoc OpenAPI + Swagger UI + Redoc. JWT (Access + Refresh). API Gateway · Rate Limit · Circuit Breaker · Resilience4j |
| **Versionamento** | Git Flow · Conventional Commits · Rebase · Cherry-pick · Husky pre-commit · Semantic Release |

---

## 📞 Contato

| 📧 Email | 🐙 GitHub | 💼 LinkedIn |
|---|---|---|
| **reinaldobarretosilva@gmail.com** | [github.com/reinaldobarreto31](https://github.com/reinaldobarreto31) | [linkedin.com/in/reinaldobarreto](https://www.linkedin.com/in/reinaldobarreto) |

---

<div align="center">

### 🔑 Portfólio Online · Painel Admin Incluso

👉 **[reinaldobarreto31.github.io](https://reinaldobarreto31.github.io)** · Painel CRUD · Export Currículo PNG

</div>
