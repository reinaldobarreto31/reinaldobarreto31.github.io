package com.reinaldobarreto.portfolio.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Formação acadêmica")
public record EducationDto(
        String institution,
        String course,
        String period
) {}
