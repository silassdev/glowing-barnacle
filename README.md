# image-to-code-demo — sketch → React/Tailwind components

One-line: Convert UI sketches into a JSON UI schema and generate clean React + Tailwind components.

## Problem
Non-technical stakeholders sketch UIs; converting sketches to editable frontend code is slow and error-prone.

## Approach
- Small vision microservice (FastAPI) accepts images and returns a JSON UI schema
- Conversion layer maps schema → TypeScript AST + templates
- Web preview (Next.js) uploads image, shows detected schema and generated component
- Feedback loop: edits persisted for fine-tuning

## Outcome (goal)
- Demo pipeline end-to-end: image → schema → generated component (editable)
- Clear CASE_STUDY.md describing challenge, approach, outcome

## Run (local, minimal)
1. git clone github.com/<you>/image-to-code-demo
2. cd image-to-code-demo
3. docker-compose up --build
4. Open http://localhost:3000 (web) and test the demo

## Demo
- `demo.gif` — short animated recording of upload → generated preview

## Tech
FastAPI, PyTorch (placeholder), Node.js, Next.js, TypeScript, Tailwind, Docker

## Repo structure
