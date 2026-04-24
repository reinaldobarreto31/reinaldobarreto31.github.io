package com.reinaldobarreto.portfolio.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.time.OffsetDateTime;
import java.util.List;

@Schema(description = "Erro padrão da API")
public record ApiErrorDto(
        int status,
        String error,
        String message,
        String path,
        List<String> details,
        OffsetDateTime timestamp
) {}
