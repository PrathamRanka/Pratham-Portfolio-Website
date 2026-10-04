import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://prathamranka.in';

export const metadata: Metadata = {
  title: 'AgentPay — Case Study',
  description:
    'A Go modular monolith for secure x402 USDC payments, cryptographic evidence, and AI-agent API commerce.',
  alternates: { canonical: `${siteUrl}/projects/agentpay` },
  openGraph: {
    title: 'AgentPay — Case Study | Pratham Ranka',
    description: 'Secure x402 payments and API commerce infrastructure built on Go and AWS.',
    type: 'article',
    url: `${siteUrl}/projects/agentpay`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentPay — Case Study | Pratham Ranka',
    description: 'Secure x402 payments and API commerce infrastructure built on Go and AWS.',
  },
};

const domains = ['Catalog', 'Intents', 'Payments', 'Proxy', 'Evidence', 'Disputes', 'Settlement'];
const controls = ['URL sanitization', 'Private IP blocking', 'Replay protection', 'Short-lived ES256 capabilities'];

export default function AgentPayCaseStudy() {
  return (
    <main className="case-study page-shell">
      <Link className="case-back" href="/#work">← Back to selected work</Link>
      <header className="case-hero">
        <p className="eyebrow">Featured project / AgentPay</p>
        <h1>Payments for APIs,<br /><span>built to be verified.</span></h1>
        <p className="case-lede">A Go modular monolith for non-custodial x402 USDC micro-transactions on Base Sepolia, giving AI agents and browser buyers a secure path to purchase APIs with exact-price settlement.</p>
        <div className="case-links"><a className="button button-primary" href="https://github.com/PrathamRanka/AgentPay" target="_blank" rel="noreferrer">View source ↗</a><Link className="button button-secondary" href="/#contact">Discuss the system</Link></div>
      </header>

      <section className="case-metrics" aria-label="AgentPay metrics">
        <div><strong>&lt;42ms</strong><span>P95 API latency</span></div>
        <div><strong>&lt;8ms</strong><span>P99 query latency</span></div>
        <div><strong>188+</strong><span>Entity access patterns</span></div>
        <div><strong>67</strong><span>Terraform resources</span></div>
      </section>

      <section className="case-section">
        <p className="eyebrow">Architecture</p>
        <h2>One deployable system.<br /><span>Clear domain boundaries.</span></h2>
        <div className="architecture-flow">
          <div className="architecture-node">Browser / AI agent<small>x402 payment request</small></div>
          <div className="architecture-arrow">↓</div>
          <div className="architecture-node">API Gateway HTTP API v2<small>authenticated edge</small></div>
          <div className="architecture-arrow">↓</div>
          <div className="architecture-node architecture-node-primary">Go 1.22+ Lambda ARM64<small>17 isolated domain packages</small><div className="architecture-domain-list">{domains.map((domain) => <span key={domain}>{domain}</span>)}</div></div>
          <div className="architecture-arrow">↓</div>
          <div className="architecture-services"><span>DynamoDB</span><span>S3 Object Lock</span><span>AWS KMS</span><span>Base Sepolia</span></div>
        </div>
        <p className="case-copy">The modular monolith keeps deployment and operations simple while preserving domain-level seams. Catalog, intents, payments, proxy, evidence, disputes, and settlement can evolve independently behind explicit interfaces.</p>
      </section>

      <section className="case-section case-two-column">
        <div><p className="eyebrow">Data and evidence</p><h2>Fast reads.<br /><span>Deterministic disputes.</span></h2></div>
        <div className="case-copy"><p>A DynamoDB single-table design covers 188+ entity access patterns across four GSIs. Conditional writes provide idempotency without distributed locking, keeping P99 query latency below 8ms.</p><p>The append-only evidence ledger combines S3 Object Lock, AWS KMS P-256 ECDSA signatures, and chained transaction hashes. Every dispute can be resolved against a tamper-evident sequence of signed events.</p></div>
      </section>

      <section className="case-section case-two-column">
        <div><p className="eyebrow">Security boundary</p><h2>Assume the upstream<br /><span>is hostile.</span></h2></div>
        <div className="case-copy"><p>The upstream proxy sanitizes URLs, blocks private IP ranges and AWS metadata endpoints, protects against replay, and issues short-lived ES256 execution capabilities.</p><ul className="case-list">{controls.map((control) => <li key={control}>{control}</li>)}</ul></div>
      </section>

      <section className="case-section">
        <p className="eyebrow">Delivery surface</p>
        <h2>From infrastructure<br /><span>to developer tooling.</span></h2>
        <div className="case-card-grid"><article><strong>Terraform + AWS</strong><p>67 resources across foundation, identity, and application modules with S3 remote state, DynamoDB locking, least-privilege IAM, and AWS Budgets.</p></article><article><strong>MCP connector</strong><p>TypeScript stdio JSON-RPC connector with five-minute ES256 capabilities and seller confirmation grants for IDE agent interactions.</p></article><article><strong>SDK ecosystem</strong><p>Merchant SDK and cryptographic verification across Go, TypeScript, Python, Java, .NET, PHP, and Ruby.</p></article></div>
      </section>

      <footer className="case-footer"><Link href="/#work">← More projects</Link><a href="https://github.com/PrathamRanka/AgentPay" target="_blank" rel="noreferrer">Open AgentPay on GitHub ↗</a></footer>
    </main>
  );
}
