import Link from 'next/link';

export const ContactModal = () => (
  <div className="z-10 min-w-96 max-w-full bg-black p-8 pt-0 vertical">
    <h1 className="mb-8 w-fit self-center bg-primary text-black">&nbsp;Contact&nbsp;</h1>

    <div className="mx-auto my-4 gap-6 vertical">
      <div className="horizontal">
        <i className="nf-cod-github_inverted nf size-fit leading-none" />
        &nbsp;
        <Link
          className="text-visual-mode visited:text-insert-mode hover:underline"
          href="https://github.com/tylergeorges"
          target="_blank"
        >
          GitHub
        </Link>
      </div>

      <div className="text-left horizontal center-v">
        <i className="nf-md-email nf size-fit leading-none" />
        &nbsp;
        <Link
          target="_blank"
          href="mailto:tmg320v@gmail.com"
          className="text-visual-mode visited:text-insert-mode hover:underline"
        >
          Email
        </Link>
      </div>
    </div>

    <span className="text-[#78a9ff]">{'<Esc>'}</span>
  </div>
);
