import Link from "next/link";

const HeaderLinks = () => {
  return (
    <div className="links">
      <p>
        <a href="#" rel="noopener noreferrer">
          Clube
        </a>
      </p>
      <p>
        <a href="#" className="activate">
          <Link href="/products/1" rel="noopener noreferrer">
            Loja
          </Link>
        </a>
      </p>
      <p>
        <a href="#" rel="noopener noreferrer">
          Produtores
        </a>
      </p>
      <p>
        <a href="#" rel="noopener noreferrer">
          Ofertas
        </a>
      </p>
      <p>
        <a href="#" rel="noopener noreferrer">
          Eventos
        </a>
      </p>
    </div>
  )
}

export default HeaderLinks;
