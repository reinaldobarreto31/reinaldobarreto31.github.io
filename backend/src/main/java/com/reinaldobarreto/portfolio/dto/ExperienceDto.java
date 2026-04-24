package com.reinaldobarreto.portfolio.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(description = "Experiência profissional")
public record ExperienceDto(
        String id,
        String company,
        String role,
        String period,
        String location,
        String summary,
        List<String> highlights,
        List<String> stack
) {}
