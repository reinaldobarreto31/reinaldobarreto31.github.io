package com.reinaldobarreto.portfolio.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(description = "Perfil profissional traduzido conforme Accept-Language")
public record ProfileDto(
        @Schema(example = "Reinaldo Barreto da Silva") String name,
        @Schema(example = "Software Engineer | DevOps & SRE | Full Stack") String role,
        @Schema(example = "Construindo sistemas críticos resilientes") String tagline,
        String summary,
        String objective,
        @Schema(example = "Navegantes, Santa Catarina - SC") String location,
        @Schema(example = "+55 47 98830-2308") String phone,
        @Schema(example = "reinaldobarretosilva@gmail.com") String email,
        @Schema(example = "https://github.com/reinaldobarreto31") String github,
        @Schema(example = "https://linkedin.com/in/reinaldo-barreto-2a4ba2116") String linkedin,
        List<String> languages,
        List<EducationDto> education,
        List<String> certifications
) {}
