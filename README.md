---
title: Invoice Processing Pipeline
emoji: 🧾
colorFrom: blue
colorTo: indigo
sdk: docker
app_port: 7860
tags:
  - openenv
  - multi-agent
  - grpo
  - rlhf
  - fraud-detection
  - invoice
---

<div align="center">

<!-- Animated header banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Invoice%20Processing%20Pipeline&fontSize=40&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Self-Improving%20Multi-Agent%20Fraud%20Detection%20%7C%20OpenEnv%20%2B%20GRPO%20%2B%20Qwen2.5&descAlignY=55&descSize=16" width="100%"/>

<!-- Badges row 1 -->
<p>
  <a href="https://ps2181-invoice-processing-pipeline.hf.space/web">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-HuggingFace%20Spaces-FF9D00?style=for-the-badge&logo=huggingface&logoColor=white" />
  </a>
  <a href="https://colab.research.google.com/drive/1C1_3giNt-NmbzKNFJr5_L1fms3L8LfmB">
    <img src="https://img.shields.io/badge/Training%20Colab-Open%20Notebook-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=white" />
  </a>
  <a href="https://ps2181-invoice-processing-pipeline.hf.space/docs">
    <img src="https://img.shields.io/badge/API%20Docs-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  </a>
</p>

<!-- Badges row 2 -->
<p>
  <img src="https://img.shields.io/badge/Framework-OpenEnv-1A356E?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Model-Qwen2.5--1.5B%20+%20LoRA%20r%3D16-8B1A4E?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Training-GRPO%20+%20Unsloth-00A67E?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Agents-5%20Adversarial-E44D26?style=for-the-badge" />
</p>

<!-- Badges row 3 -->
<p>
  <img src="https://img.shields.io/badge/Tasks-7%20Progressive-6C3483?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployment-Docker%20%7C%20HF%20Spaces-0D1117?style=for-the-badge&logo=docker" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Hackathon-Meta%20PyTorch%202026-FF6B35?style=for-the-badge" />
</p>

<br/>

> **Meta PyTorch OpenEnv Hackathon — Grand Finale · April 25–26, 2026**
>
> Team: **Pritam Satpathy** & **Gnana Nawin T** · Scaler School of Technology, Bangalore

<br/>

<!-- Animated typing headline -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=007A87&center=true&vCenter=true&width=750&lines=5-Agent+Adversarial+Fraud+Detection+System;Self-Improving+via+Cross-Episode+Regulator;GRPO-Trained+LoRA+Agents+on+Live+Environment;Invoice+%E2%86%92+Extract+%E2%86%92+Audit+%E2%86%92+Approve+%E2%86%92+Improve" alt="Typing SVG" />
</a>

</div>

---

## 🔥 What Makes This Different

> Most multi-agent systems are **static pipelines**. Ours **gets harder for itself over time**.

The system contains a **Predictive Regulator** — a cross-episode meta-agent that monitors the Auditor across 30 rolling episodes, detects fraud types it systematically fails on (**blind spots**), and **automatically biases the Generator** to produce more of exactly those fraud types. No human intervention. No manual curriculum design. The system pressure-tests its own weakest point, every single episode.

<div align="center">

```
┌─────────────────────────────────────────────────────────────────────┐
│                    THE SELF-IMPROVEMENT LOOP                        │
│                                                                     │
│   ┌───────────┐   adversarial   ┌───────────┐   structured JSON    │
│   │           │ ──────────────► │           │ ──────────────────►  │
│   │ Generator │  (biased toward │ Extractor │                       │
│   │           │   blind spots)  │           │   4 reward signals    │
│   └─────▲─────┘                 └───────────┘                       │
│         │                                           │               │
│   bias  │                               invoice JSON│               │
│ weights │                                           ▼               │
│         │                               ┌───────────┐               │
│   ┌─────┴─────┐   detection rates       │           │               │
│   │           │ ◄────────────────────── │  Auditor  │               │
│   │ Regulator │                         │           │               │
│   │ (30-ep    │   blind spot report     └─────┬─────┘               │
│   │  window)  │ ──────────────────────►       │ verdict +           │
│   └───────────┘                               │ confidence          │
│                                               ▼                     │
│                                    ┌───────────────────┐            │
│                                    │      Approver     │            │
│                                    │  approve/escalate │            │
│                                    │  /reject (gated   │            │
│                                    │  by confidence)   │            │
│                                    └───────────────────┘            │
└─────────────────────────────────────────────────────────────────────┘
```

</div>

---

## ⚡ Three Novel Features

<table>
<tr>
<td width="33%" align="center">

### 🔮 Predictive Regulator

Computes **trend slope** over 5-episode windows.<br/>Warns of *emerging* blind spots **before** detection rates cross the critical threshold — proactive oversight, not reactive retraining.

`+0.15 early-warning bonus`

</td>
<td width="33%" align="center">

### 🧩 Compound Fraud

Invoices carry **two fraud signals simultaneously** (e.g. phantom vendor + price gouging).<br/>Partial credit `+0.65` for catching one; full reward `+0.99` for both.

Prevents single-signal heuristics.

</td>
<td width="33%" align="center">

### 📊 Confidence Calibration

Tracks `(confidence, correct?)` pairs per fraud type.<br/>Detects **overconfident misses** — the Auditor saying "90% sure, approved" on fraud — the most dangerous real-world failure mode.

</td>
</tr>
</table>

---

## 🤖 Five Agents, One Closed Loop

<div align="center">

| Agent | Role | Reward Signal |
|:---:|:---|:---|
| 🏭 **Generator** | Creates clean or fraudulent invoices, biased by Regulator blind-spot weights | `+0.85` evades Auditor + Approver · `+0.60` evades Auditor only · `+0.10` caught |
| 🔍 **Extractor** | Parses raw OCR invoice text → structured JSON | 4 independent signals: format `0.10` · field accuracy `0.40` · math `0.25` · completeness `0.25` |
| 🕵️ **Auditor** | Classifies each invoice with fraud type + confidence score | `+0.99` correct type · `+0.90` clean clearance · `+0.65` compound (one caught) · `+0.01` miss/FP |
| ✅ **Approver** | Final approve / escalate / reject (rule-based, confidence-gated) | `≥0.80` confidence → reject · `0.50–0.80` → escalate · approved → approve |
| 🧠 **Regulator** | Cross-episode meta-agent — 30-episode rolling window, blind-spot tracker | Precision `0.35` + Recall `0.35` + No over-flagging `0.15` + Early warning `0.15` |

</div>

---

## 🎯 Seven Tasks — Progressive Difficulty

<div align="center">

```
Easy ──────────────────────────────────────────────────────────► Expert
  │            │            │           │           │       │       │
  ▼            ▼            ▼           ▼           ▼       ▼       ▼
easy        medium         hard       expert    adversarial nego supply
                                                           tiate chain
Single      Batch         Extract    Full        OCR       Ask    Detect
invoice     clean &       + recon-   fraud       corrupt   clari  logistics
extraction  normalise     cile vs    audit       +traps    fying  anomalies
            messy docs    PO         (4 types)             Qs
```

</div>

| # | Task | Difficulty | What the Agent Must Do |
|:---:|:---|:---:|:---|
| 1 | `easy` | 🟢 Easy | Extract `vendor`, `date`, `currency`, `total`, `line_items` from a single clean invoice |
| 2 | `medium` | 🟡 Medium | Clean & normalise a batch: fix date format chaos, vendor typos, currency symbol pollution |
| 3 | `hard` | 🟠 Hard | Extract + reconcile against purchase orders — flag overcharges, extra items, missing items |
| 4 | `expert` | 🔴 Expert | Fraud audit using vendor registry, market prices, and invoice history — classify fraud type exactly |
| 5 | `adversarial` | 🟠 Hard | Ignore SUBTOTAL trap + fake TAX/ADJUSTMENT + FX noise; OCR-corrupted vendor labels |
| 6 | `negotiate` | 🟡 Medium | Ask clarification questions `{"question": "..."}` then extract; `+15%` bonus for ≤2 questions |
| 7 | `supply_chain` | 🔴 Expert | Detect `quantity_shortfall`, `price_spike`, `unauthorized_substitution`, `phantom_delivery` |

---

## 🧠 Trained LoRA Agents

All three generative agents trained with **GRPO on live environment data** — the HF Space `/grader` endpoint *is* the reward function during training.

<div align="center">

| Agent | Base Model | LoRA Config | HuggingFace Hub |
|:---:|:---|:---:|:---|
| 🔍 Extractor | Qwen2.5-1.5B-Instruct | r=16, α=16, 4-bit QLoRA | [ps2181/extractor-lora-qwen2.5-1.5b](https://huggingface.co/ps2181/extractor-lora-qwen2.5-1.5b) |
| 🕵️ Auditor | Qwen2.5-1.5B-Instruct | r=16, α=16, 4-bit QLoRA | [ps2181/auditor-lora-qwen2.5-1.5b](https://huggingface.co/ps2181/auditor-lora-qwen2.5-1.5b) |
| 🏭 Generator | Qwen2.5-1.5B-Instruct | r=16, α=16, 4-bit QLoRA | [ps2181/generator-lora-qwen2.5-1.5b](https://huggingface.co/ps2181/generator-lora-qwen2.5-1.5b) |

</div>

**LoRA target modules:** `q_proj`, `k_proj`, `v_proj`, `o_proj`, `gate_proj`, `up_proj`, `down_proj`

---

## 📈 Training Results

### Extractor — GRPO Training Progress

The model learned to extract structured JSON from noisy invoice text via **reinforcement learning with 4 independent reward signals**, scoring directly against the live environment grader.

| Step | Total Reward | Env Score | Format | Math Consistency |
|:---:|:---:|:---:|:---:|:---:|
| 10 | 2.361 | 0.113 | 0.900 | 0.347 |
| 20 | 2.595 | 0.282 | 0.900 | 0.413 |
| 30 | 2.657 | 0.304 | **0.950** | 0.403 |

> 📊 **Environment score: `0.113 → 0.304` in 30 steps — a 169% improvement** in live-graded extraction accuracy.

### 🔍 Reward Hacking Caught in Training

At step 10, we observed the model achieving `math_consistency = 0.97` and `completeness = 1.0` while `field_accuracy = 0.00` — it had learned to output **arithmetically-consistent JSON with entirely hallucinated values**.

Our 4 **independent** reward signals made this visible immediately. A single aggregated reward would have never surfaced this.

```
Step 10 — Reward Hacking Detected:
  format:             0.10  ✅
  math_consistency:   0.97  ✅ ← model gaming this signal
  completeness:       1.00  ✅ ← model gaming this signal
  field_accuracy:     0.00  ❌ ← hallucinating all values

  Action: adjusted training emphasis on field_accuracy weight
  Result: field_accuracy climbed to 0.30+ by step 30
```

This is exactly why multiple independent reward signals matter — and why we have 4.

---

## 🎁 Reward Architecture

### Extractor — 4 Independent Signals

```python
def reward_format(extracted) -> float:              # weight 0.10
    """Are all 5 required JSON keys present?"""

def reward_field_accuracy(extracted, gt) -> float:  # weight 0.40
    """Do vendor / date / currency / total match ground truth?"""

def reward_math_consistency(extracted) -> float:    # weight 0.25
    """Does qty × unit_price = amount for every line item?"""

def reward_completeness(extracted, gt) -> float:    # weight 0.25
    """Recall: what fraction of expected line items are present?"""

# All rewards clamped to (0.01, 0.99) — no log(0), no gradient collapse
```

### Auditor Reward

| Outcome | Reward | Why |
|:---|:---:|:---|
| Correct fraud type detected | **0.99** | Incentivises precise classification, not just binary flagging |
| Clean invoice correctly approved | **0.90** | High reward keeps false-positive rate low |
| Compound fraud — one of two types caught | **0.65** | Partial credit prevents cliff on hard cases |
| Fraud flagged but wrong type | **0.50** | Penalises sloppiness; rewards catching *something* |
| Miss or false positive | **0.01** | Near-zero punishes both failure modes symmetrically |

### Generator Reward (Adversarial Self-Play)

| Outcome | Reward |
|:---|:---:|
| Fraud evades **both** Auditor and Approver | **0.85** |
| Auditor misses, Approver catches | **0.60** |
| Auditor catches it | **0.10** |

### Regulator Reward

```
Total = Precision(0.35) + Recall(0.35) + No-over-flagging(0.15) + Early-warning-bonus(0.15)
```

---

## 🦺 Five Fraud Types

<div align="center">

| Type | Detection Method | Example |
|:---|:---|:---|
| 🏚️ `phantom_vendor` | Vendor not in Approved Vendor Registry | "QuickSupply Hub" — not in approved list |
| 💸 `price_gouging` | Unit price > 150% of market ceiling | Laptop at $2,800 when market max is $1,299 |
| ➕ `math_fraud` | Invoice total ≠ sum of line items | Total $5,200 when items sum to $4,400 |
| 📋 `duplicate_submission` | Same invoice_id or vendor+date+total already in history | INV-83221 submitted twice |
| 🔀 `compound_fraud` | Two fraud signals in one invoice | Phantom vendor **AND** price gouging simultaneously |

</div>

---

## 🌍 The Regulator in Action

After each episode, the Regulator publishes a report that the Generator reads to bias its next batch:

```
GET /regulator/report

{
  "total_audits_recorded": 20,
  "detection_rates": {
    "phantom_vendor":        "31%  ⚠ BLIND SPOT (-0.08↓)",
    "price_gouging":         "74%  ✓ OK (+0.03↑)",
    "math_fraud":            "81%  ✓ OK (+0.01↑)",
    "duplicate_submission":  "62%  ⚡ EMERGING (-0.02↓)"
  },
  "false_positive_rate": "12%  ✓ OK",
  "blind_spots": ["phantom_vendor"],
  "emerging_blind_spots": ["duplicate_submission"],
  "generator_weights": {
    "phantom_vendor":       0.30,   ← 3× upweighted (blind spot)
    "duplicate_submission": 0.20,   ← 2× upweighted (emerging)
    "price_gouging":        0.125,
    "math_fraud":           0.125,
    "compound_fraud":       0.10
  },
  "verdict": "Recommend retraining on: phantom_vendor"
}
```

---

## 🚀 Quick Start

### Try the Live Demo

```bash
# Health check
curl https://ps2181-invoice-processing-pipeline.hf.space/health

# List all 7 tasks with schemas
curl https://ps2181-invoice-processing-pipeline.hf.space/tasks

# Start a single-agent episode
curl -X POST https://ps2181-invoice-processing-pipeline.hf.space/reset \
     -H "Content-Type: application/json" \
     -d '{"task_id": "easy"}'

# Submit an extraction (replace EPISODE_ID from reset response)
curl -X POST https://ps2181-invoice-processing-pipeline.hf.space/step \
     -H "Content-Type: application/json" \
     -d '{
       "episode_id": "EPISODE_ID",
       "extracted_data": {
         "vendor": "Acme Corp",
         "date": "2024-08-15",
         "currency": "USD",
         "total": 2374.93,
         "line_items": [
           {"description": "Laptop Computer", "qty": 2, "unit_price": 1099.99, "amount": 2199.98},
           {"description": "Wireless Mouse",  "qty": 5, "unit_price":   34.99, "amount":  174.95}
         ]
       }
     }'
```

### Run the Multi-Agent Pipeline

```bash
# Step 1 — Start 5-agent episode (Generator biased by Regulator)
curl -X POST https://ps2181-invoice-processing-pipeline.hf.space/multi/reset

# Step 2 — Score Extractor output (4 signals)
curl -X POST https://ps2181-invoice-processing-pipeline.hf.space/multi/extract \
     -H "Content-Type: application/json" \
     -d '{"episode_id": "EP_ID", "extracted_data": {...}}'

# Step 3 — Score Auditor output (updates 30-episode tracker)
curl -X POST https://ps2181-invoice-processing-pipeline.hf.space/multi/audit \
     -H "Content-Type: application/json" \
     -d '{"episode_id": "EP_ID", "audit_results": [
       {"invoice_id": "INV-83221", "verdict": "flagged",
        "fraud_type": "phantom_vendor", "confidence": 0.87}
     ]}'

# Step 4 — Run Approver, compute Generator adversarial reward
curl -X POST https://ps2181-invoice-processing-pipeline.hf.space/multi/approve \
     -H "Content-Type: application/json" \
     -d '{"episode_id": "EP_ID"}'

# Check Regulator state anytime
curl https://ps2181-invoice-processing-pipeline.hf.space/regulator/report
curl https://ps2181-invoice-processing-pipeline.hf.space/regulator/forecast
curl https://ps2181-invoice-processing-pipeline.hf.space/regulator/calibration
```

### Run Training (Google Colab)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1C1_3giNt-NmbzKNFJr5_L1fms3L8LfmB)

The training loop connects **directly** to the live HF Space environment:

```
Colab → /reset (fresh synthetic invoice) → model generates JSON
      → /grader (scores vs ground truth) → GRPO weight update
      → repeat 200 steps
```

---

## 🗂️ Repository Structure

```
invoice-processing-pipeline/
│
├── server/
│   ├── app.py                      # FastAPI — 18 endpoints
│   ├── environment.py              # 7 tasks · graders · dynamic difficulty
│   ├── multi_agent_environment.py  # 5-agent system + AuditorPerformanceTracker
│   ├── agents.py                   # Lazy-loading LoRA inference wrappers
│   └── web_ui.py                   # Gradio UI (mounted at /web)
│
├── models.py                       # Pydantic: Action · Observation · State
├── inference.py                    # Standalone inference helper
├── client.py                       # OpenEnv-compatible Python client
│
├── extractor_training_grpo.ipynb   # 🔥 Extractor GRPO training (Unsloth + TRL)
├── auditor_grpo_training.ipynb     # 🔥 Auditor GRPO training
├── generator_grpo_training.ipynb   # 🔥 Generator GRPO training
│
├── openenv.yaml                    # OpenEnv manifest (all 7 tasks declared)
├── Dockerfile                      # HF Spaces Docker (port 7860, non-root UID 1000)
├── pyproject.toml                  # Project metadata + dependencies
├── requirements.txt                # Runtime dependencies
├── validate-submission.sh          # Submission validator script
│
├── ROUND2_PROBLEM_STATEMENT.md     # Full problem statement + reward design rationale
└── BLOG_DRAFT.md                   # HuggingFace blog post draft
```

---

## 🔌 API Reference

### Core OpenEnv

| Endpoint | Method | Description |
|:---|:---:|:---|
| `/health` | `GET` | Health check → `{"status": "ok", "active_sessions": N}` |
| `/tasks` | `GET` | All 7 tasks with descriptions, max_attempts, action/observation schemas |
| `/reset` | `POST` | Start episode `{"task_id": "easy\|medium\|hard\|expert\|adversarial\|negotiate\|supply_chain"}` |
| `/step` | `POST` | Submit extraction → reward + feedback + hint + reward_breakdown |
| `/grader` | `POST` | Score without consuming an attempt (used by training Colab) |
| `/state` | `GET` | Episode metadata — step_count, done, best_reward, full rewards history |
| `/ws` | `WS` | Full episode over WebSocket (OpenEnv standard) |
| `/web` | `GET` | Gradio interactive demo UI |

### Multi-Agent

| Endpoint | Method | Description |
|:---|:---:|:---|
| `/multi/reset` | `POST` | Start 5-agent episode — Generator biased by Regulator weights |
| `/multi/extract` | `POST` | Score Extractor output (4 signals) |
| `/multi/audit` | `POST` | Score Auditor output, update 30-episode performance tracker |
| `/multi/approve` | `POST` | Run Approver, compute Generator adversarial reward |
| `/multi/state/{id}` | `GET` | Full episode state including all agent scores |

### Regulator

| Endpoint | Method | Description |
|:---|:---:|:---|
| `/regulator/report` | `GET` | Detection rates, blind spots, calibration, generator weights |
| `/regulator/forecast` | `GET` | Predictive trend analysis — critical + emerging blind spots with slopes |
| `/regulator/calibration` | `GET` | Overconfidence / underconfidence per fraud type |
| `/regulator/predict` | `POST` | Score a Regulator blind-spot prediction |
| `/regulator/demo_seed` | `POST` | Seed tracker with realistic demo data |
| `/generator/score` | `POST` | Compute Generator reward given auditor/approver outcomes |

---

## 🏗️ Tech Stack

<div align="center">

| Layer | Technology |
|:---|:---|
| **Environment** | [OpenEnv](https://github.com/meta-pytorch/OpenEnv) · FastAPI · Pydantic v2 |
| **UI** | Gradio 4.x (mounted at `/web`) |
| **Deployment** | Docker · HuggingFace Spaces (vcpu-2 / 8 GB) |
| **Training** | [TRL GRPOTrainer](https://huggingface.co/docs/trl) · [Unsloth](https://github.com/unslothai/unsloth) |
| **Model** | `unsloth/Qwen2.5-1.5B-Instruct` · 4-bit QLoRA · r=16 |
| **Reward** | Live `/grader` endpoint on HF Space as verifier |
| **Session Mgmt** | Thread-safe `OrderedDict` · 200-session cap · LRU eviction |
| **Dynamic Difficulty** | Per-task rolling window (maxlen=10) → adjusts OCR intensity, batch size, discrepancy count |

</div>

---

## 🔍 Dynamic Difficulty

The environment adapts generation parameters to the agent's recent performance:

```python
if avg_score >= 0.85:   # Agent is doing well → harder
    n_invoices    = (4, 6)
    ocr_intensity = 0.55        # heavier corruption
    n_discrepancies = (3, 5)
    n_anomalies   = 3

elif avg_score < 0.60:  # Agent is struggling → easier
    n_invoices    = (2, 3)
    ocr_intensity = 0.15
    n_discrepancies = (1, 2)
    n_anomalies   = 2

else:                   # balanced
    n_invoices    = (3, 5)
    ocr_intensity = 0.35
    n_discrepancies = (2, 3)
```

---

## 🎭 Theme Alignment

<div align="center">

| Theme | Alignment | Evidence |
|:---:|:---|:---|
| **#1 Multi-Agent Interactions** | ✅ Core | 5 agents with cooperation, competition, and adversarial self-play |
| **#1 Fleet AI Scalable Oversight** | ✅ Bonus | Regulator monitors Auditor cross-episode — fully autonomous oversight loop |
| **#2 Long-Horizon Planning** | ✅ Partial | `negotiate` task: multi-turn clarification with attempt budget penalty |
| **#3.1 Professional Tasks** | ✅ Core | Invoice + PO + vendor registry + supply chain = real finance operations |
| **#4 Self-Improvement** | ✅ Core | Regulator → Generator bias → harder adversarial batches → Auditor improves |

</div>

---

## 👥 Team

<div align="center">

| | |
|:---:|:---:|
| **Pritam Satpathy** | **Gnana Nawin T** |
| [🤗 ps2181](https://huggingface.co/ps2181) | Gnana Nawin T |
| Scaler School of Technology | Scaler School of Technology |

**Meta PyTorch OpenEnv Hackathon — Grand Finale · April 25–26, 2026 · Bangalore**

</div>

---

## 🔗 All Links

<div align="center">

| Resource | Link |
|:---|:---|
| 🚀 **Live Environment** | https://ps2181-invoice-processing-pipeline.hf.space |
| 🖥️ **Gradio Demo UI** | https://ps2181-invoice-processing-pipeline.hf.space/web |
| 📖 **API Documentation** | https://ps2181-invoice-processing-pipeline.hf.space/docs |
| 🤗 **Extractor Model** | https://huggingface.co/ps2181/extractor-lora-qwen2.5-1.5b |
| 🕵️ **Auditor Model** | https://huggingface.co/ps2181/auditor-lora-qwen2.5-1.5b |
| 🏭 **Generator Model** | https://huggingface.co/ps2181/generator-lora-qwen2.5-1.5b |
| 📓 **Training Colab** | https://colab.research.google.com/drive/1C1_3giNt-NmbzKNFJr5_L1fms3L8LfmB |
| 💻 **GitHub** | https://github.com/ps2181/invoice-processing-pipeline |
| 🧩 **OpenEnv Framework** | https://github.com/meta-pytorch/OpenEnv |

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&animation=twinkling" width="100%"/>

**Built with ❤️ for the Meta PyTorch OpenEnv Hackathon 2026**

*"The system that gets harder for itself — so the agent never stops learning."*

</div>
