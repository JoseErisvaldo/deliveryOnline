export default function Footer() {
  return (
    <div className="w-full py-6 bg-gray-800 text-white">
      <div className="container px-4 md:px-6 flex justify-between items-center">
        <p>© 2024 DeliveryOnline. Todos os direitos reservados.</p>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Sobre
          </a>
          <a href="#" className="hover:underline">
            Contato
          </a>
          <a href="#" className="hover:underline">
            Termos
          </a>
        </nav>
      </div>
    </div>
  );
}
