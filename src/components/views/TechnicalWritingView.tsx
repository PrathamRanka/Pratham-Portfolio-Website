import Link from 'next/link';

export function TechnicalWritingView() {
  return (
    <section className="pt-8 pb-4" aria-labelledby="writing-heading">
      <hr className="border-neutral-800/80 mb-8" />
      <h2
        id="writing-heading"
        className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight"
      >
        Technical Writing
      </h2>

      <div className="max-w-xl">
        <Link
          href="/projects/agentpay"
          className="text-sky-400 hover:text-sky-300 hover:underline text-sm sm:text-[15px] font-medium leading-snug block"
        >
          Building AgentPay: Non-custodial x402 USDC payments for autonomous AI agents on Base Sepolia
        </Link>
        <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed">
          An architectural case study detailing 17 isolated Go domain packages, a DynamoDB single-table
          design covering 188+ access patterns, cryptographic dispute evidence, and sub-42ms P95 API latency
          on AWS serverless infrastructure.
        </p>
      </div>
    </section>
  );
}
