---
title: "Phase 7 — Agents · MCP · Agent SDK · Skills"
roadmap: ai-engineer
phase: 7
weeks: [21, 22, 23, 24, 25, 26]
start: 2027-02-15
end: 2027-03-28
stage: planned
---

# Phase 7 — Agents · MCP · Agent SDK · Skills

W21–W26 · 2027-02-15 → 2027-03-28 · ~36h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W21 (2027-02-15 → 2027-02-21) — Agent loop tay, patterns

**Học (2h)**
- [ ] Đọc 'Building effective agents'
- [ ] Loop: plan→tool→observe, stop, budget, state machine
- [ ] Khi nào không cần agent

**Build (3h)**
- [ ] p07 agent loop tay trên llm-client (không framework)
- [ ] Max steps, budget, stop conditions + tests

**Notes → done**
- [ ] B [[agent-loop-from-scratch]] — Agent loop from scratch: plan→tool→observe, stop conditions, budget
- [ ] B [[agent-patterns]] — Agent patterns: chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer, ReAct
- [ ] B [[agent-when-not-to]] — When not to build an agent

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W07.md`

## W22 (2027-02-22 → 2027-02-28) — Tool design, MCP server

**Học (2h)**
- [ ] 'Writing tools for agents'; idempotency
- [ ] MCP spec: tools/resources/prompts

**Build (3h)**
- [ ] MCP server: list_topics, update_stage, create_note, search_notes (dùng p05)

**Notes → done**
- [ ] B [[agent-tool-design]] — Tool design for agents: naming, schema, errors, idempotency
- [ ] B [[mcp-server-ts]] — MCP server in TypeScript: tools, resources, prompts

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W08.md`

## W23 (2027-03-01 → 2027-03-07) — MCP client, memory, multi-agent, reliability, landscape

**Học (2h)**
- [ ] Transports, auth, A2A overview
- [ ] Memory & compaction
- [ ] Multi-agent, HITL
- [ ] Agent eval; frameworks landscape

**Build (3h)**
- [ ] Test MCP server với 2 client khác nhau
- [ ] HITL approve trước khi mở PR

**Notes → done**
- [ ] B [[mcp-client-transports-auth]] — MCP client, transports, auth; A2A overview
- [ ] B [[agent-memory-context]] — Agent memory: short/long-term, episodic; context management/compaction
- [ ] B [[agent-multi-agent-hitl]] — Multi-agent orchestration and human-in-the-loop
- [ ] B [[agent-eval-reliability]] — Agent eval and reliability: task success, trajectory, retries, idempotency
- [ ] B [[agent-frameworks-landscape]] — Agent frameworks landscape: OpenAI Agents SDK, Google ADK, LangGraph, Mastra, Vercel AI

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W09.md`

## W24 (2027-03-08 → 2027-03-14) — Claude Agent SDK

**Học (2h)**
- [ ] Tools, permissions, hooks, subagents, sessions, memory tool

**Build (3h)**
- [ ] Port agent loop tay sang Agent SDK
- [ ] Note so sánh loop tay vs SDK

**Notes → done**
- [ ] C [[claude-agent-sdk]] — Claude Agent SDK: tools, permissions, hooks, subagents, sessions, memory

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W10.md`

## W25 (2027-03-15 → 2027-03-21) — Skills, Claude Code platform

**Học (2h)**
- [ ] Agent Skills
- [ ] CLAUDE.md, hooks, custom subagents

**Build (3h)**
- [ ] Skill + subagent + hooks cho workflow weekly log → plan → note skeleton → PR

**Notes → done**
- [ ] C [[claude-agent-skills]] — Agent Skills
- [ ] C [[claude-code-platform-hooks-subagents]] — Claude Code as platform: CLAUDE.md, hooks, subagents

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W11.md`

## W26 (2027-03-22 → 2027-03-28) — Plugin, computer use, managed agents

**Học (2h)**
- [ ] Plugin/marketplace
- [ ] Computer use overview
- [ ] Managed Agents overview

**Build (3h)**
- [ ] Đóng gói plugin (MCP + Skill + subagent), publish
- [ ] Blog #3

**Notes → done**
- [ ] C [[claude-code-plugins]] — Claude Code plugins and marketplace
- [ ] C [[claude-computer-use-overview]] — Computer use overview and risks
- [ ] C [[anthropic-managed-agents-overview]] — Managed Agents overview
- [ ] P [[portability-openai-agents-sdk-google-adk]] — Portability: OpenAI Agents SDK, Google ADK vs Claude Agent SDK

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W12.md`

**Deliverable:** Claude Code plugin publish, dùng thật

**Checkpoint (quiz với Claude):** Plugin chạy 2 tuần; MCP test với 2 client; quiz agent reliability
