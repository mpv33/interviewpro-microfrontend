
# 🧩 InterviewPro.info — Microfrontend Monorepo

> Modular architecture for InterviewPro.info, now refactored into micro frontends using Vite, React, and Next.js.

---

## ⚙️ Tech Stack

| App       | Framework | Bundler | Styling     | Role     |
|-----------|-----------|---------|-------------|----------|
| `host`    | React     | Vite    | Tailwind CSS | Shell App (Layout & Routing) |
| `dsa`     | React     | Vite    | Tailwind CSS | Remote MFE (DSA content)     |
| `webdev`  | Next.js   | Webpack | Tailwind CSS | Remote MFE (Web Dev content) |

---

## 📁 Structure

```
microfrontend-monorepo/
├── apps/
│   ├── host/       # Shell app
│   ├── dsa/        # Remote MFE for DSA
│   └── webdev/     # Remote MFE for Web Dev
├── turbo.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run all apps

```bash
npm run dev
```

### 3. Individual apps

```bash
# Host (localhost:3000)
cd apps/host && npm run dev

# DSA Remote (localhost:3001)
cd apps/dsa && npm run dev

# WebDev Remote (localhost:3002)
cd apps/webdev && npm run dev
```

---

## 🔗 Module Federation

- `host` consumes `dsa` via `vite-plugin-federation`
- `webdev` runs standalone (MF integration planned)

---

## 📦 Monorepo powered by Turborepo

```json
// package.json
{
  "private": true,
  "workspaces": ["apps/*"],
  "scripts": {
    "dev": "turbo run dev --parallel",
    "build": "turbo run build"
  }
}
```

---

## 📌 Roadmap

- ✅ Setup base microfrontend architecture
- ✅ Tailwind config in all apps
- ✅ Federation between Host ↔ DSA
- 🔜 Federation with WebDev (Next.js)
- 🔜 Shared design system (UI package)
- 🔜 CI/CD + Preview Deployments

---

MIT © Mateshwari | [InterviewPro.info](https://interviewpro.info)
```

---
# interviewpro-microfrontend
