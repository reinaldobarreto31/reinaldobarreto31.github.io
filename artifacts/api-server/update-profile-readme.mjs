#!/usr/bin/env node
// Update GitHub profile README (reinaldobarreto31/reinaldobarreto31)
import { ReplitConnectors } from "@replit/connectors-sdk";

const OWNER = "reinaldobarreto31";
const REPO  = "reinaldobarreto31";

const connectors = new ReplitConnectors();

async function gh(method, path, body) {
  const res = await connectors.proxy("github", path, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: body ? { "Content-Type": "application/json" } : {},
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

const README = `<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=6DB33F&center=true&vCenter=true&width=800&lines=Hi+%F0%9F%91%8B+I'm+Reinaldo+Barreto;Java+%26+Spring+Boot+Engineer+%E2%98%95;Kotlin+%C2%B7+Go+%C2%B7+React+%C2%B7+Vue.js;Microsservi%C3%A7os+%7C+OAuth2+%7C+Keycloak;Linux+Ubuntu+is+my+home+%F0%9F%90%A7;Clean+Code+%7C+CI%2FCD+%7C+Docker)](https://git.io/typing-svg)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

</div>

## ☕ About Me

\`\`\`java
// Developer.java — reinaldobarreto31

public class Developer {
    String  name      = "Reinaldo Barreto da Silva";
    String  location  = "Navegantes, Santa Catarina — Brazil 🇧🇷";
    String[] focus    = {"Java 17/21", "Spring Boot 3", "Kotlin", "Go", "React", "Vue.js"};
    String[] devops   = {"Docker", "GitHub Actions", "Jenkins", "SonarQube", "Linux Ubuntu"};
    String[] auth     = {"OAuth2", "Keycloak", "Spring Security", "JWT"};
    String[] db       = {"PostgreSQL", "MySQL", "Redis"};
    boolean  hireable = true;

    String currentFocus() {
        return "☕ Building scalable APIs & microservices for the public sector";
    }
}
\`\`\`

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🛠️ Tech Stack

<div align="center">

### ☕ Backend — Primary Stack

[![Java](https://img.shields.io/badge/Java_17%2F21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://github.com/reinaldobarreto31?tab=repositories&q=java)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot_3-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://github.com/reinaldobarreto31?tab=repositories&q=spring)
[![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)](https://github.com/reinaldobarreto31?tab=repositories)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://github.com/reinaldobarreto31?tab=repositories&q=go)
[![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)](#)
[![OAuth2](https://img.shields.io/badge/OAuth2%2FKeycloak-EF4B4B?style=for-the-badge&logo=keycloak&logoColor=white)](#)

### 🌐 Frontend

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

### 🗄️ Data & Infrastructure

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](#)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](#)
[![Ubuntu](https://img.shields.io/badge/Linux_Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)](#)

### ⚙️ DevOps & Quality

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](#)
[![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](#)
[![SonarQube](https://img.shields.io/badge/SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)](#)
[![JUnit](https://img.shields.io/badge/JUnit_5-25A162?style=for-the-badge&logo=junit5&logoColor=white)](#)

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🚀 Featured Projects

<div align="center">

[![clientehub](https://github-readme-stats.vercel.app/api/pin/?username=reinaldobarreto31&repo=clientehub&theme=dark&title_color=6DB33F&icon_color=6DB33F&border_color=6DB33F&bg_color=0d1117)](https://github.com/reinaldobarreto31/clientehub)
[![stockwise-go](https://github-readme-stats.vercel.app/api/pin/?username=reinaldobarreto31&repo=stockwise-go&theme=dark&title_color=00ADD8&icon_color=00ADD8&border_color=00ADD8&bg_color=0d1117)](https://github.com/reinaldobarreto31/stockwise-go)

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 📊 GitHub Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=reinaldobarreto31&show_icons=true&theme=dark&title_color=6DB33F&icon_color=6DB33F&border_color=333&bg_color=0d1117&hide_border=false)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=reinaldobarreto31&layout=compact&theme=dark&title_color=6DB33F&border_color=333&bg_color=0d1117)

</div>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://raw.githubusercontent.com/reinaldobarreto31/reinaldobarreto31/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)"
    srcset="https://raw.githubusercontent.com/reinaldobarreto31/reinaldobarreto31/output/github-snake.svg" />
  <img alt="🐍 Snake eating contributions"
    src="https://raw.githubusercontent.com/reinaldobarreto31/reinaldobarreto31/output/github-snake-dark.svg"
    width="100%" />
</picture>
</div>

<div align="center">

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=reinaldobarreto31&bg_color=0d1117&color=6DB33F&line=6DB33F&point=ffffff&area=true&area_color=6DB33F&title_color=6DB33F&hide_border=false&border=333333)](https://github.com/ashutosh00710/github-readme-activity-graph)

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

## 🏢 Work Experience

| Company | Period | Stack |
|---------|--------|-------|
| 🏛️ **PRODEB** | Mar/2024 – Set/2024 | Java · Spring Boot · Vue.js · PostgreSQL · Linux Ubuntu |
| 🔬 **LAMPP IT Solutions** | Mar/2022 – Mai/2022 | Java · Spring Boot · Spring Security · OAuth2 · Angular · React |
| ⚙️ **EDZA Engenharia** | Nov/2019 – Mar/2022 | Java EE · Spring Boot · Vue.js · Angular · MySQL · Linux |

<div align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</div>

<div align="center">

\`\`\`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ☕  Stack: Java · Spring Boot · Kotlin · Go
  🌐  Frontend: React · Vue.js · TypeScript
  📍  Location: Navegantes, SC — Brazil
  🔍  Open to: Remote positions in Brazil & abroad
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\`\`\`

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-6DB33F?style=for-the-badge&logoColor=white)](https://reinaldobarreto31.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/reinaldo-barreto-da-silva-2a4ba2116)

![Profile views](https://komarev.com/ghpvc/?username=reinaldobarreto31&color=6DB33F&style=flat-square&label=Profile+Views)

</div>
`;

// Get current SHA
const current = await gh("GET", `/repos/${OWNER}/${REPO}/contents/README.md`);
if (current.status !== 200) {
  console.error("Failed to fetch current README:", current);
  process.exit(1);
}
const sha = current.data.sha;
console.log("Current SHA:", sha);

// Push updated README
const content = Buffer.from(README).toString("base64");
const result = await gh("PUT", `/repos/${OWNER}/${REPO}/contents/README.md`, {
  message: "chore: update profile README — Java/Spring Boot/Kotlin/Go, Navegantes/SC",
  content,
  sha,
});

if (result.status === 200 || result.status === 201) {
  console.log("✅ README updated successfully!");
  console.log("Commit:", result.data.commit?.sha);
} else {
  console.error("❌ Failed:", result.status, JSON.stringify(result.data, null, 2));
}
