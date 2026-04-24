package com.reinaldobarreto.portfolio.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.time.OffsetDateTime;

@Schema(description = "Resposta ao envio do formulário de contato")
public record ContactResponseDto(
        boolean success,
        String message,
        OffsetDateTime timestamp
) {}
