export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-400 py-10">
      <p>&copy; {currentYear} Eric Medrano</p>
    </footer>
  );
}
