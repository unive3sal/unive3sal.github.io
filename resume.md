# Yuhao Deng

dengyuhao.233@outlook.com · China · [Github](https://github.com/unive3sal)

## Summary

Backend and platform engineer with 5+ years of experience spanning AI agent systems, cloud reliability, and performance-sensitive C++ software. At Super Intelligence Inc., owned technical architecture and backend delivery for an AI growth platform, including agent-runtime migration, AWS infrastructure, and Rust authorization services. Previously worked at Alibaba Cloud and Ericsson. Combines Python/FastAPI, Rust/Axum, PostgreSQL, and cloud operations to build reliable AI products; contributes to open-source AI developer tooling.

## Experience

### Super Intelligence Inc. — AI Engineer, Architect (Jul 2026 – Nov 2026)

- Owned backend architecture for Megahit, an AI growth platform. Led migration from a custom agent loop to PydanticAI, introducing typed tool contracts, durable execution, resumable activity streams, and shared memory integration; completed the staged cutover and retired the legacy runtime.
- Migrated the application database from Supabase to Aurora PostgreSQL and maintained separate API/worker services on AWS ECS. Established automated build/deployment checks and refactored backend CI tests to run in approximately 5–6 minutes, supporting repeatable releases and production troubleshooting.
- Designed and implemented a Rust/Axum authorization service using Cognito OIDC and PostgreSQL. Added session revocation, tenant membership, explicit action grants, and transactional audit records; integrated the existing application and completed acceptance in the AWS test environment.
- Built a Rust MCP data workspace exposing 17 structured-data and file tools. Implemented per-owner database isolation, scoped access, idempotent mutations, bounded queries, and authenticated file transfers, providing a working service for integration with internal data tooling.

### Alibaba Cloud — SRE (Sep 2025 – Jun 2026)

_Hangzhou_

- Supported cloud-service and distributed-database reliability through incident response, health checks, operational readiness, and Kubernetes troubleshooting.
- Developed emergency-response and drill-platform tooling in Rust and TypeScript, and maintained CI/CD and operational automation for reliability workflows.
- Handled on-call incident response for cloud services and distributed databases, triaging alerts, assessing customer impact, and coordinating escalation and mitigation with engineering teams to restore service and hand over unresolved issues.
- Supported international customers through technical troubleshooting and incident updates; collaborated with international support and engineering teams to align investigation findings, coordinate follow-up actions, and drive issues toward resolution.

### Ericsson — Experienced Developer Software (Jul 2021 – Sep 2025)

_Chengdu_

- Developed and maintained Linux-based radio software in C++17, with a focus on signal-processing libraries and performance-sensitive systems.
- Responsibilities spanned software architecture, concurrent execution, numerical algorithms, and low-level debugging, supporting code maintainability and runtime efficiency.

## Education

### University of Electronic Science and Technology of China — Master, Signal and Information Processing (2018 – 2021)

### Hebei University of Technology — Bachelor, Electronic Information Engineering (2014 – 2018)

## Projects

### Megahit — AI CMO agent (Jul 2026 – Nov 2026)

- Owned end-to-end architecture for an AI growth platform spanning conversational agents, campaign planning/execution, shared memory, and agency workspaces. Defined service boundaries and frontend/backend contracts across React, FastAPI, AWS ECS, Aurora PostgreSQL, S3, and isolated research sandboxes.
- Separated model reasoning from deterministic business commands, keeping PostgreSQL as the business source of truth. Designed typed agent/tool contracts and immutable, versioned workflow modules; enabled Chat and Campaign to reuse capabilities and memory while isolating mutable sessions and authorization scopes.
- Designed recovery and external-action safeguards using durable checkpoints, worker leases/fencing, explicit retry ownership, content-bound approvals, and an idempotent operation ledger with provider-receipt reconciliation. Decoupled execution from SSE connections and introduced a durable activity feed so progress remains observable across disconnects and restarts.
- Retained and extended the existing PostgreSQL-backed worker after validating recovery invariants, avoiding an additional orchestration service. Turned the architecture into a staged PydanticAI migration, completed cutover and legacy-loop retirement, and documented architecture decisions and shared contracts as the implementation baseline.

### cc-switch-cli — Open-Source AI Coding Assistant CLI

- Designed and implemented a Rust daemon with IPC and supervised per-app proxy workers, adding restart recovery and runtime-state reconciliation so proxies remain managed after the CLI/TUI exits.
- Built prioritized automatic provider failover with TUI controls and scriptable CLI commands, supporting live queue updates; validated provider-outage scenarios with mock-provider integration tests.
- Implemented conflict-aware merging of live and saved provider configurations to preserve unrelated local edits; corrected hot-switch backups so disabling the proxy restores the latest selected provider.
- Hardened OpenAI/Anthropic streaming and tool-call compatibility; isolated filesystem state in parallel tests and integrated unit and integration suites into CI to catch regressions.

[https://github.com/SaladDay/cc-switch-cli](https://github.com/SaladDay/cc-switch-cli)

### Time series forecasting algorithm research (Apr 2025 – Sep 2025)

- Led the time-series forecasting workflow from model selection and evaluation through training, hyperparameter tuning, and deployment.
- Compared LSTM, LightGBM, and Informer; selected Informer to capture long-range temporal dependencies while reducing attention complexity through sparse attention.
- Achieved an RMSE of approximately 3 on an internal dataset; the project won 2nd prize in the company AI hackathon.

### Code refactoring and architecture designing for the signal processing library (Jun 2024 – Mar 2025)

- Redesigned inter-thread communication in a C++ signal-processing library using Protocol Buffers and Linux epoll, moving key components from synchronous calls toward an asynchronous architecture.
- Parallelized matrix factorization and rewrote the Cholesky decomposition implementation, improving matrix-operation efficiency by approximately 6x in key workloads.
- Used objdump and disassembly analysis to investigate floating-point precision and runtime issues in numerical computations.

## Skills

- **C++**: STL, C++17, Linux, CUDA
- **Rust**: tokio, Axum, SQLx, MCP
- **Python**: PyTorch, pandas, agent dev, FastAPI, PydanticAI
- **typescript**: react, solana, agent dev

## Certifications

### Alibaba Cloud Certified Professional - Cloud Computing — Alibaba Cloud (Dec 2025)

### Alibaba Cloud Certified Professional - LLM — Alibaba Cloud (Oct 2025)

## Languages

- **Chinese** — Native
- **English** — B2
- **French** — B1

## Interests

- **Philosophy**
- **Historical European Martial Arts **
- **Linguistic**
