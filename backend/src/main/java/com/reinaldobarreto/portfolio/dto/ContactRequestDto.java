package com.reinaldobarreto.portfolio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Schema(description = "Payload do formulário de contato")
public record ContactRequestDto(
        @NotBlank(message = "{validation.name.notblank}")
        @Size(max = 120)
        @Schema(example = "Recrutador X") String name,

        @NotBlank(message = "{validation.email.notblank}")
        @Email(message = "{validation.email.invalid}")
        @Size(max = 180)
        @Schema(example = "recruiter@empresa.com") String email,

        @NotBlank(message = "{validation.message.notblank}")
        @Size(min = 10, max = 2000, message = "{validation.message.size}")
        @Schema(example = "Olá Reinaldo, gostaria de conversar sobre uma vaga...") String message
) {}
