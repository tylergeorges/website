import Link from 'next/link';

export const ContactModal = () => (
  <div className="z-10 min-w-96 max-w-full bg-black p-8 vertical">
    <div className="mb-8 text-center horizontal center">
      <i className="nf-md-contacts nf size-fit leading-none" />
      &nbsp;
      <h1>Contact</h1>
    </div>

    <div className="mx-auto mb-10 space-y-2 vertical">
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

    <span className="">
      <span className="text-[#78a9ff]">{'<Esc>'}</span>: Exit
    </span>
  </div>
);
