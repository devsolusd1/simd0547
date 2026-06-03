# 🔥 SIMD0547

The first Solana community token with on-chain fee burning — inspired by Solana's own **[SIMD-0547](https://github.com/solana-foundation/solana-improvement-documents/discussions/547)** governance proposal. Built on the Meteora Dynamic Bonding Curve.

**Contract:** `sc4hfP1Yc7JdMRcqehNZHqUZ9eak53J92y7MdyUi547`

## What is this?

SIMD-0547 is a real Solana protocol proposal (by cavemanloverboy / Temporal) that introduces a resource-based base fee — `0.1 lamport per cost unit`, with 100% of fees burned. SIMD0547 the token brings that deflationary idea to the community layer now: 50% of all trading fees buy back and burn the supply forever.

## Features

- **Live price chart** powered by the [Jupiter Price API V3](https://dev.jup.ag/docs/price/v3) (polls every 10s, persists history in `localStorage`).
- **Burn dashboard** — live counter, burn rate, and supply progress.
- **Technical spec** of the SIMD-0547 protocol proposal, sourced from the official GitHub discussion.
- **Tokenomics** breakdown and fair-launch details.
- Fire-themed responsive UI.

## Tech stack

- [React 18](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/) for charts
- Jupiter Price API V3

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Disclaimer

SIMD0547 is a community memecoin. Not financial advice. Not affiliated with or endorsed by the Solana Foundation, Meteora, Jupiter, or Temporal. The referenced SIMD-0547 governance proposal is a real Solana improvement document. DYOR.
