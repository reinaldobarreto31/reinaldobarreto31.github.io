# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- **artifacts/portfolio** (web, slug `portfolio`, served at `/`, port 21113):
  Personal portfolio for Reinaldo Barreto da Silva — Software Engineer (DevOps/SRE) in Java→Rails transition.
  Stack: React + Vite + Tailwind + framer-motion + react-icons + lucide-react.
  Sections: Hero (Rails badge, train-tracks SVG, profile photo), About (Java→Rails timeline + dev/ops skills),
  Experience (PRODEB / LAMPP / EDZA), Projects, live SRE Status Board (polls /api/status every 5s), Contact form
  (POSTs /api/contact, persisted in PostgreSQL). PWA manifest + service worker installed. PT-BR copy throughout.
- **artifacts/api-server** (api): Express + Drizzle backend exposing `/api/contact`, `/api/status/services`,
  `/api/status/incidents`, `/api/healthz`. Status data is simulated server-side with jitter for the SRE dashboard.
- **artifacts/mockup-sandbox** (design): Vite preview server for component mockups (not used in current build).

## Database Schema

- `contact_submissions` (id, name, email, subject, message, createdAt) — backs the contact form.

## API Contract

OpenAPI spec at `lib/api-spec/openapi.yaml`. Run `pnpm --filter @workspace/api-spec run codegen` after editing
to regenerate `@workspace/api-zod` schemas and `@workspace/api-client-react` TanStack Query hooks
(`useSubmitContact`, `useGetServiceStatus`, `useListIncidents`, `useHealthCheck`).
