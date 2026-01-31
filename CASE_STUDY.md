# CASE STUDY — Image→Code demo

## Challenge
Stakeholders provide hand-drawn or screenshot UIs. Goal: produce production-editable React components faster than manual scaffolding.

## Approach
- Build a vision microservice that returns a structured JSON UI schema for detected components
- Use template + AST transformations to generate clean React + Tailwind code
- Web preview that allows quick edits and exports

## Outcome
- Working prototype: image → JSON schema → generated component
- Metrics to add: component detection accuracy, time saved vs manual scaffold, lines of reusable code generated

## Quick links
- Demo: `/demo.gif`
- API: `/api/convert` (POST image)
- Web: `/web` (upload + preview)
