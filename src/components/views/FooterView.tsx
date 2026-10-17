import Image from 'next/image';
import HalftoneWordmarkFooter from '@/components/ui/footer';

export function FooterView() {
  return (
    <>
      <div className="mx-auto w-full max-w-[900px]">
        <HalftoneWordmarkFooter
          wordmark="pratham"
          label="Pratham Ranka"
          meta={`©${new Date().getFullYear()} · Backend Engineer`}
          columns={[]}
          preset="night"
          palette={{ background: '#0a0a0a', ink: '#ffffff', warm: '#2f6bff' }}
          height="340px"
          dotGap={5}
          radius={70}
          crop={0.2}
          grain={0.35}
          className="border-t border-neutral-900"
          extra={
            <a
              className="opacity-70 hover:opacity-100 transition-opacity"
              href="https://destroy.spritefusion.com/?from=badge"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://destroy.spritefusion.com/badge.svg"
                alt="Destroy this website"
                width={140}
                height={32}
                unoptimized
              />
            </a>
          }
        />
      </div>
      <div className="h-24 bg-[#0a0a0a]" />
    </>
  );
}