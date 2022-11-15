import './Paginado.css'

const Paginado = ({ pokePage, pokesFiltered, paginado, page }) => {
  const pageNum = []

  for (let i = 0; i < Math.ceil(pokesFiltered / pokePage); i++) {
    pageNum.push(i + 1);
  }
  return (
    <nav>
      <ul className="paginado">
        {pageNum &&
          pageNum.map((n) => (
            <li
              className="numbers"
              key={n}
              style={page === n ? { backgroundColor: "yellow" } : {}}
              onClick={() => paginado(n)}
            >
              <p>{n}</p>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado