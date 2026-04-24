package com.reinaldobarreto.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI portfolioOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Portfolio API - Reinaldo Barreto")
                        .description("REST API para o portfólio profissional. Suporta i18n via header Accept-Language (pt, en, es).")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Reinaldo Barreto da Silva")
                                .email("reinaldobarretosilva@gmail.com")
                                .url("https://github.com/reinaldobarreto31"))
                        .license(new License().name("MIT").url("https://opensource.org/licenses/MIT")))
                .servers(List.of(
                        new Server().url("/").description("Default")
                ));
    }
}
