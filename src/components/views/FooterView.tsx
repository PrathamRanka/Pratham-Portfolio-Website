import Image from 'next/image';

export function FooterView() {
  return (
    <footer className="pt-8 pb-24 border-t border-neutral-900 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        <p>&copy; {new Date().getFullYear()} Pratham Ranka</p>
        <span className="text-neutral-700">·</span>
        <a
          href="https://github.com/PrathamRanka"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-300 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/prathamranka06/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-300 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/pr7ham_develops"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-300 transition-colors"
        >
          X
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#top" className="hover:text-neutral-300 transition-colors">
          Back to top &uarr;
        </a>
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
      </div>
    </footer>
  );
}
