function Navbar() {
  return (
    <nav class="font-sans flex justify-end sm:flex-row sm:text-left py-4 px-6 shadow sm:items-baseline w-full fixed">
      <div>
        <a
          href="/"
          class="text-lg underline text-white hover:text-blue-dark ml-4"
        >
          0.0 Home
        </a>
        <a
          href="/history"
          class="text-lg underline text-white hover:text-blue-dark ml-4"
        >
          0.1 History
        </a>
        <a
          href="/climb"
          class="text-lg underline text-white hover:text-blue-dark ml-4"
        >
          0.2 Climb
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
