const linkClass =
  "inline-flex min-h-11 items-center font-medium text-teal underline decoration-teal/40 underline-offset-4 hover:decoration-teal focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turq";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="page-container flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>&copy; {year} Gilbert Cheruiyot Tangus</p>
        <a href="#" className={linkClass}>
          Back to top
        </a>
      </div>
    </footer>
  );
}
