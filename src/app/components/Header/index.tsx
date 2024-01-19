export default function Header({ title }: { title: string }) {
  return (
    <header className="bg-white h-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-xl">{title}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
