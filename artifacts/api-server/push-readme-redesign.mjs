#!/usr/bin/env node
const pat = process.env.GITHUB_PAT_WORKFLOW;
const OWNER = "reinaldobarreto31";
const REPO  = "reinaldobarreto31";
const SHA   = "d08169ffa89fdaf309e4ef4e62c4310c1ef35f68";

async function gh(method, path, body) {
  const res = await fetch("https://api.github.com" + path, {
    method,
    headers: {
      Authorization: "Bearer " + pat,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

// Get current SHA dynamically
const cur = await gh("GET", `/repos/${OWNER}/${REPO}/contents/README.md`);
const sha = cur.data.sha;
console.log("Current SHA:", sha);

const README = `<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=26&duration=3000&pause=1000&color=6DB33F&center=true&vCenter=true&width=820&lines=Hi+%F0%9F%91%8B+I'm+Reinaldo+Barreto;Java+%26+Spring+Boot+Engineer+%E2%98%95;Kotlin+%C2%B7+Go+%C2%B7+React+%C2%B7+Vue.js;Microsservi%C3%A7os+%7C+OAuth2+%7C+Keycloak;%F0%9F%93%8D+Navegantes%2C+Santa+Catarina+%E2%80%94+Brazil;Open+to+Remote+%7C+Hireable+%F0%9F%9F%A2)](https://git.io/typing-svg)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

</div>

## About Me

\`\`\`
+----------------------------------------------------------+
|  Developer.kt  x  |  Developer.java  |  experience.yml  |
+----------------------------------------------------------+
\`\`\`

\`\`\`kotlin
// Developer.kt  --  reinaldobarreto31

package dev.reinaldobarreto

data class Developer(
    val name        : String       = "Reinaldo Barreto da Silva",
    val location    : String       = "Navegantes, Santa Catarina - Brazil",
    val focus       : List<String> = listOf("Java 17/21", "Spring Boot 3", "Kotlin", "Go"),
    val frontend    : List<String> = listOf("React", "Vue.js", "TypeScript"),
    val devops      : List<String> = listOf("Docker", "GitHub Actions", "Jenkins", "SonarQube"),
    val auth        : List<String> = listOf("OAuth2", "Keycloak", "Spring Security", "JWT"),
    val db          : List<String> = listOf("PostgreSQL", "MySQL", "Redis"),
    val hireable    : Boolean      = true
) {
    fun currentFocus(): String =
        "Building scalable microservices for the public sector"

    fun contact(): Map<String, String> = mapOf(
        "portfolio" to "https://reinaldobarreto31.github.io",
        "linkedin"  to "linkedin.com/in/reinaldo-barreto-da-silva-2a4ba2116"
    )
}
\`\`\`

\`\`\`java
// Developer.java  --  reinaldobarreto31

public class Developer {
    String   name     = "Reinaldo Barreto da Silva";
    String   location = "Navegantes, Santa Catarina - Brazil";
    String[] focus    = { "Java 17/21", "Spring Boot 3", "Kotlin", "Go" };
    String[] devops   = { "Docker", "GitHub Actions", "Jenkins", "SonarQube" };
    String[] auth     = { "OAuth2", "Keycloak", "Spring Security", "JWT" };
    boolean  hireable = true;

    String currentFocus() {
        return "Building scalable APIs & microservices for the public sector";
    }
}
\`\`\`

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## Tech Stack

<div align="center">

### Backend

![Java](https://img.shields.io/badge/Java_17%2F21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![OAuth2](https://img.shields.io/badge/OAuth2%2FKeycloak-EF4B4B?style=for-the-badge&logo=keycloak&logoColor=white)

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Data & Infra

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Linux Ubuntu](https://img.shields.io/badge/Linux_Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

### DevOps & Quality

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![SonarQube](https://img.shields.io/badge/SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)
![JUnit 5](https://img.shields.io/badge/JUnit_5-25A162?style=for-the-badge&logo=junit5&logoColor=white)

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## Featured Projects

<div align="center">
<table>
  <tr>
    <td width="50%" valign="top" align="center">
      <h3>clientehub</h3>
      <p>CRUD completo de clientes<br/>Spring Boot 3 REST API + React 18 + PostgreSQL</p>
      <p>
        <img src="https://img.shields.io/badge/Java_21-ED8B00?style=flat-square&logo=openjdk&logoColor=white" />
        <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" />
        <img src="https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black" />
        <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
      </p>
      <a href="https://github.com/reinaldobarreto31/clientehub">
        <img src="https://img.shields.io/badge/View_Repo-6DB33F?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
    <td width="50%" valign="top" align="center">
      <h3>stockwise-go</h3>
      <p>Sistema de controle de estoque<br/>Go REST API + JWT Auth + PostgreSQL + Docker</p>
      <p>
        <img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white" />
        <img src="https://img.shields.io/badge/REST_API-FF6C37?style=flat-square&logo=postman&logoColor=white" />
        <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
        <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" />
      </p>
      <a href="https://github.com/reinaldobarreto31/stockwise-go">
        <img src="https://img.shields.io/badge/View_Repo-00ADD8?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top" align="center">
      <h3>spring-boot-swagger-crud</h3>
      <p>RESTful CRUD API com OpenAPI 3 / Swagger UI<br/>Spring Boot 3 + Lombok + Docker Compose</p>
      <p>
        <img src="https://img.shields.io/badge/Java_21-ED8B00?style=flat-square&logo=openjdk&logoColor=white" />
        <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" />
        <img src="https://img.shields.io/badge/OpenAPI_3-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white" />
        <img src="https://img.shields.io/badge/Swagger_UI-85EA2D?style=flat-square&logo=swagger&logoColor=black" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
      </p>
      <a href="https://github.com/reinaldobarreto31/spring-boot-swagger-crud">
        <img src="https://img.shields.io/badge/View_Repo-ED8B00?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
    <td width="50%" valign="top" align="center">
      <h3>kotlin-tasks-android</h3>
      <p>App Android de gestao de tarefas<br/>Kotlin + MVVM + Room Database + Navigation</p>
      <p>
        <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white" />
        <img src="https://img.shields.io/badge/Android-34A853?style=flat-square&logo=android&logoColor=white" />
        <img src="https://img.shields.io/badge/MVVM-7F52FF?style=flat-square&logo=kotlin&logoColor=white" />
        <img src="https://img.shields.io/badge/Room_DB-7F52FF?style=flat-square&logo=sqlite&logoColor=white" />
      </p>
      <a href="https://github.com/reinaldobarreto31/kotlin-tasks-android">
        <img src="https://img.shields.io/badge/View_Repo-7F52FF?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
  </tr>
</table>
</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## GitHub Stats

<div align="center">

[![GitHub Streak](https://streak-stats.demolab.com?user=reinaldobarreto31&theme=dark&background=0d1117&border=333&stroke=6DB33F&ring=6DB33F&fire=ED8B00&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=6DB33F&sideLabels=6DB33F&dates=888)](https://git.io/streak-stats)

</div>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://raw.githubusercontent.com/reinaldobarreto31/reinaldobarreto31/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)"
    srcset="https://raw.githubusercontent.com/reinaldobarreto31/reinaldobarreto31/output/github-contribution-grid-snake.svg" />
  <img alt="Snake eating contributions"
    src="https://raw.githubusercontent.com/reinaldobarreto31/reinaldobarreto31/output/github-contribution-grid-snake-dark.svg"
    width="100%" />
</picture>
</div>

<div align="center">

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=reinaldobarreto31&bg_color=0d1117&color=6DB33F&line=6DB33F&point=ffffff&area=true&area_color=6DB33F&title_color=6DB33F&hide_border=false&border=333333)](https://github.com/ashutosh00710/github-readme-activity-graph)

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## Work Experience

\`\`\`yaml
# experience.yml  --  reinaldobarreto31

- company: PRODEB
  period:  "Mar/2024 - Set/2024"
  stack:   [ Java, "Spring Boot", "Vue.js", PostgreSQL, "Linux Ubuntu" ]
  sector:  Governo do Estado da Bahia (sistemas publicos estaduais)

- company: LAMPP IT Solutions
  period:  "Mar/2022 - Mai/2022"
  stack:   [ Java, "Spring Boot", "Spring Security", OAuth2, Angular, React ]
  sector:  SSP-BA / PM-BA (Seguranca Publica)

- company: EDZA Engenharia
  period:  "Nov/2019 - Mar/2022"
  stack:   [ "Java EE", "Spring Boot", "Vue.js", Angular, MySQL, Linux ]
  sector:  ERP Municipal (Ilheus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas)
\`\`\`

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

<div align="center">

\`\`\`
+-------------------------------------------------------------+
|                                                             |
|   Stack    : Java  Spring Boot  Kotlin  Go                 |
|   Frontend : React  Vue.js  TypeScript                     |
|   Location : Navegantes, SC  --  Brazil                    |
|   Status   : Open to remote  |  Hireable                   |
|                                                             |
+-------------------------------------------------------------+
\`\`\`

[![Portfolio](https://img.shields.io/badge/Portfolio-6DB33F?style=for-the-badge&logo=googlechrome&logoColor=white)](https://reinaldobarreto31.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/reinaldo-barreto-da-silva-2a4ba2116)

![Profile views](https://komarev.com/ghpvc/?username=reinaldobarreto31&color=6DB33F&style=flat-square&label=Profile+Views)

</div>
`;

const r = await gh("PUT", `/repos/${OWNER}/${REPO}/contents/README.md`, {
  message: "feat: redesign profile — Kotlin + Java IDE aesthetic, reliable project cards, streak stats",
  content: Buffer.from(README).toString("base64"),
  sha,
});
console.log(r.status, r.data.commit?.sha ?? JSON.stringify(r.data).slice(0, 300));
