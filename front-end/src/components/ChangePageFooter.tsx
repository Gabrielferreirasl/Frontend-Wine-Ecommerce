import { useRouter } from "next/router";
import { FooterPageStyle } from "../../styles/page/styles";

const ChangePageFooter = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const currentPage: number = Number(router.query.page);
  const minimum = 1;

  const previusPage = currentPage - 1 === 0 ? 1 : currentPage - 1;
  const nextPage = currentPage + 1 > totalPages ? totalPages : currentPage + 1;

  const handlePage = () => {
    return (
      <>
        <a
          className={currentPage === minimum ? "currentPage" : ""}
          href={`/products/${currentPage === minimum ? 1 : totalPages - 2}`}
          rel="noopener noreferrer"
        >
          <button type="button">
            {currentPage === minimum ? 1 : totalPages - 2}
          </button>
        </a>
        <a
          href={`/products/${
            currentPage === minimum ? minimum + 1 : totalPages - 1
          }`}
          rel="noopener noreferrer"
        >
          <button type="button">
            {currentPage === minimum ? minimum + 1 : totalPages - 1}
          </button>
        </a>
        <a
          className={currentPage === minimum ? "" : "currentPage"}
          href={`/products/${
            currentPage === totalPages ? totalPages : currentPage + 2
          }`}
          rel="noopener noreferrer"
        >
          <button type="button">
            {currentPage === totalPages ? totalPages : currentPage + 2}
          </button>
        </a>
        {currentPage !== totalPages && (
          <div className="next-btn">
            <span>...</span>
            <a
              href={`/products/${
                currentPage === totalPages ? totalPages : currentPage + 2
              }`}
            >
              Próximo
            </a>
            <span className="next-simbol">{">>"}</span>
          </div>
        )}
      </>
    );
  };

  return (
    <FooterPageStyle>
      {currentPage === minimum || currentPage === totalPages ? (
        handlePage()
      ) : (
        <>
          <a href={`/products/${previusPage}`} rel="noopener noreferrer">
            <button type="button">{previusPage}</button>
          </a>
          <a
            className="currentPage"
            href={`/products/${currentPage}`}
            rel="noopener noreferrer"
          >
            <button type="button">{currentPage}</button>
          </a>
          <a href={`/products/${nextPage}`} rel="noopener noreferrer">
            <button type="button">{nextPage}</button>
          </a>
          <div className="next-btn">
            <span>...</span>
            <a href={`/products/${nextPage}`}>Próximo</a>
            <span className="next-simbol">{">>"}</span>
          </div>
        </>
      )}
    </FooterPageStyle>
  );
};

export default ChangePageFooter;
