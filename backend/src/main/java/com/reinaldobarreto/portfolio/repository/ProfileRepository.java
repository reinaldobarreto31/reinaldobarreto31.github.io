package com.reinaldobarreto.portfolio.repository;

import com.reinaldobarreto.portfolio.dto.EducationDto;
import com.reinaldobarreto.portfolio.dto.ExperienceDto;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * In-memory repository providing the static portfolio dataset.
 * Promotes future migration to a persistent store (JPA/MongoDB) without
 * changing service or controller layers.
 */
@Repository
public class ProfileRepository {

    public String getPhone() {
        return "+55 47 98830-2308";
    }

    public String getEmail() {
        return "reinaldobarretosilva@gmail.com";
    }

    public String getGithub() {
        return "https://github.com/reinaldobarreto31";
    }

    public String getLinkedin() {
        return "https://linkedin.com/in/reinaldo-barreto-2a4ba2116";
    }

    public List<String> getCertifications() {
        return List.of(
                "APIs RESTful com Spring Boot e Java - Udemy",
                "Spring Cloud e Microsserviços - Udemy",
                "Testes unitários e TDD com JUnit e Mockito - Udemy",
                "Docker e Kubernetes na prática - Udemy",
                "Desenvolvimento Android (Kotlin e Java) - Udemy",
                "Linguagens de Programação: Java, Kotlin"
        );
    }

    public List<EducationDto> getEducation() {
        return List.of(
                new EducationDto(
                        "Centro Universitário Jorge Amado (UNIJORGE)",
                        "CST em Análise e Desenvolvimento de Sistemas",
                        "2021 - 2023"
                ),
                new EducationDto(
                        "CEEP Newton Sucupira",
                        "Técnico em Administração",
                        "1994 - 1996"
                )
        );
    }

    public List<String> getLanguages() {
        return List.of(
                "Português (fluente)",
                "English (intermediate)",
                "Español (basic)"
        );
    }

    /**
     * Returns experiences with company-agnostic data (i18n-translated fields are filled at the service layer).
     */
    public List<ExperienceTemplate> getExperiences() {
        return List.of(
                new ExperienceTemplate(
                        "prodeb",
                        "PRODEB - Companhia de Processamento de Dados do Estado da Bahia",
                        "Mar/2024 - Set/2024",
                        "Bahia, Brasil",
                        List.of(
                                "Desenvolvimento backend escalável em Java e Spring Boot para o Governo do Estado",
                                "Otimização de arquitetura e implementação de fluxos de automação",
                                "Modernização de sistemas públicos críticos"
                        ),
                        List.of("Java", "Spring Boot", "Java EE", "Struts JSP", "Vue.js", "PostgreSQL")
                ),
                new ExperienceTemplate(
                        "lampp",
                        "LAMPP IT Solutions",
                        "Mar/2022 - Mai/2022",
                        "Bahia, Brasil",
                        List.of(
                                "APIs REST seguras com Spring Security e OAuth2",
                                "Sistemas críticos para SSP-BA e Polícia Militar",
                                "Sistema de Auditoria Interna garantindo integridade de dados"
                        ),
                        List.of("Spring Boot", "Java EE", "JSP", "Struts", "JSF", "Angular 2+", "React.js", "OAuth2")
                ),
                new ExperienceTemplate(
                        "edza",
                        "EDZA Planejamento Consultoria e Informática LTDA",
                        "Nov/2019 - Mar/2022",
                        "Bahia, Brasil",
                        List.of(
                                "ERP Municipal: módulos de Tributário, Saúde, RH e NFe",
                                "Atendimento técnico para Ilhéus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas",
                                "Administração do parque tecnológico, servidores Linux/Windows, disponibilidade 24/7"
                        ),
                        List.of("Java EE", "JSP", "Struts", "Spring Boot", "Angular", "Vue.js", "Linux", "Windows")
                )
        );
    }

    public record ExperienceTemplate(
            String id,
            String company,
            String period,
            String location,
            List<String> highlights,
            List<String> stack
    ) {}
}
