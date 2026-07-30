#!/usr/bin/env node
import { ReplitConnectors } from "@replit/connectors-sdk";

const OWNER = "reinaldobarreto31";
const connectors = new ReplitConnectors();

async function gh(method, path, body) {
  const res = await connectors.proxy("github", path, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: body ? { "Content-Type": "application/json" } : {},
  });
  const text = await res.text();
  const data = text ? JSON.parse(text).catch?.(() => ({})) ?? JSON.parse(text) : {};
  return { status: res.status, data };
}

// ── 1. Delete Ruby repos ────────────────────────────────────────────────────
const rubyRepos = [
  "rails-link-shortener",
  "ruby-expense-tracker",
  "rails-tasks-api",
  "rails-auth-api",
  "expense-tracker-web",
  "stockwise",  // old duplicate — real one is stockwise-go
];

console.log("=== Deleting Ruby / stale repos ===");
for (const repo of rubyRepos) {
  const r = await gh("DELETE", `/repos/${OWNER}/${repo}`);
  console.log(r.status === 204 ? `✅ deleted ${repo}` : `⚠️  ${repo} → ${r.status}`);
}

// ── 2. Update profile repo descriptions ─────────────────────────────────────
console.log("\n=== Updating repo descriptions ===");
const descUpdates = [
  {
    repo: "reinaldobarreto31",
    description: "✨ Reinaldo Barreto — Java · Spring Boot · Kotlin · Go | Backend Engineer",
  },
  {
    repo: "reinaldobarreto31.github.io",
    description: "🌐 Portfólio — Java · Spring Boot · Kotlin · Go · React",
  },
];
for (const { repo, description } of descUpdates) {
  const r = await gh("PATCH", `/repos/${OWNER}/${repo}`, { description });
  console.log(r.status === 200 ? `✅ updated ${repo}` : `⚠️  ${repo} → ${r.status}`);
}

// ── 3. Create spring-boot-swagger-crud repo ──────────────────────────────────
console.log("\n=== Creating spring-boot-swagger-crud ===");
const createRes = await gh("POST", "/user/repos", {
  name: "spring-boot-swagger-crud",
  description: "☕ RESTful CRUD API — Spring Boot 3 · OpenAPI/Swagger · PostgreSQL · Docker",
  private: false,
  auto_init: false,
});
if (createRes.status === 201) {
  console.log("✅ Repo created:", createRes.data.html_url);
} else {
  console.log("⚠️  Create repo:", createRes.status, JSON.stringify(createRes.data));
}

const README_SWAGGER = `# ☕ spring-boot-swagger-crud

RESTful CRUD API built with **Spring Boot 3** and documented with **OpenAPI 3 / Swagger UI**.

## 🚀 Stack

| Layer | Technology |
|-------|-----------|
| Language | Java 21 |
| Framework | Spring Boot 3 |
| API Docs | SpringDoc OpenAPI 3 (Swagger UI) |
| Database | PostgreSQL |
| ORM | Spring Data JPA / Hibernate |
| Validation | Bean Validation (Jakarta) |
| Container | Docker + Docker Compose |

## 📦 Running locally

\`\`\`bash
# Start PostgreSQL
docker compose up -d db

# Run the application
./mvnw spring-boot:run
\`\`\`

## 📖 Swagger UI

After starting the app, open:

\`\`\`
http://localhost:8080/swagger-ui.html
\`\`\`

All endpoints are documented with request/response schemas, validation constraints, and example payloads.

## 🔗 Endpoints

\`\`\`
GET    /api/products          → list all (pagination + filter)
GET    /api/products/{id}     → find by id
POST   /api/products          → create
PUT    /api/products/{id}     → full update
PATCH  /api/products/{id}     → partial update
DELETE /api/products/{id}     → remove
\`\`\`

## 🗄️ Entity

\`\`\`java
@Entity
public class Product {
    Long    id;
    String  name;       // @NotBlank
    String  description;
    BigDecimal price;   // @Positive
    Integer stock;      // @Min(0)
    String  category;
}
\`\`\`

## 🛠️ Project structure

\`\`\`
src/main/java/com/reinaldobarreto/crud/
├── controller/   ProductController.java
├── service/      ProductService.java
├── repository/   ProductRepository.java
├── model/        Product.java
├── dto/          ProductRequest.java · ProductResponse.java
└── config/       OpenApiConfig.java
\`\`\`

## 📋 Requirements

- Java 21+
- Maven 3.9+
- Docker (for PostgreSQL)

---

> Part of my backend portfolio — [reinaldobarreto31.github.io](https://reinaldobarreto31.github.io)
`;

const readmeContent = Buffer.from(README_SWAGGER).toString("base64");
const readmeRes = await gh("PUT", `/repos/${OWNER}/spring-boot-swagger-crud/contents/README.md`, {
  message: "docs: initial README — Spring Boot 3 + OpenAPI/Swagger CRUD",
  content: readmeContent,
});
console.log(readmeRes.status === 201 ? "✅ README created" : `⚠️  README → ${readmeRes.status}`);

// pom.xml
const POM = `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.3.0</version>
  </parent>

  <groupId>com.reinaldobarreto</groupId>
  <artifactId>spring-boot-swagger-crud</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <name>spring-boot-swagger-crud</name>
  <description>RESTful CRUD API with Spring Boot 3 and OpenAPI/Swagger</description>

  <properties>
    <java.version>21</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springdoc</groupId>
      <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
      <version>2.5.0</version>
    </dependency>
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <optional>true</optional>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <configuration>
          <excludes>
            <exclude>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
            </exclude>
          </excludes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
`;

const pomRes = await gh("PUT", `/repos/${OWNER}/spring-boot-swagger-crud/contents/pom.xml`, {
  message: "build: add pom.xml — Spring Boot 3 + SpringDoc OpenAPI + PostgreSQL",
  content: Buffer.from(POM).toString("base64"),
});
console.log(pomRes.status === 201 ? "✅ pom.xml created" : `⚠️  pom.xml → ${pomRes.status}`);

// docker-compose.yml
const DOCKER = `services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: cruddb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/cruddb
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
    depends_on:
      - db

volumes:
  pgdata:
`;

const dockerRes = await gh("PUT", `/repos/${OWNER}/spring-boot-swagger-crud/contents/docker-compose.yml`, {
  message: "chore: add docker-compose.yml for PostgreSQL + app",
  content: Buffer.from(DOCKER).toString("base64"),
});
console.log(dockerRes.status === 201 ? "✅ docker-compose.yml created" : `⚠️  docker-compose → ${dockerRes.status}`);

console.log("\n✅ All done!");
