function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLogo">
          <img src="/img/svgIcon/Logo.svg" alt="logo" />
          <div className="title">
            <h3 className="headerTitle">REACT SNEAKERS</h3>
            <p>Крамниця найкращих кросівок</p>
          </div>
        </div>
        <ul className="headerNavigation">
          <li>
            <img src="/img/svgIcon/Cart.svg" alt="logo" />
            <span>1205 грн.</span>
          </li>
          <li>
            <img src="/img/svgIcon/Heart.svg" alt="logo" />
            <span>Закладки</span>
          </li>
          <li>
            <img src="/img/svgIcon/Logo-account.svg" alt="logo" />
            <span>Профіль</span>
          </li>
        </ul>
      </header>
      <hr></hr>
      <div className="content">
        <h1>Всі кросівки</h1>

        <div className="sneakers">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/NikeBlazerMid.jpeg"
              alt="sheakers"
            />
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="cardContent">
              <div className="cardTitle">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/svgIcon/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpeg"
              alt="sheakers"
            />
            <h5>Чоловічі Кросівки Nike Air Max 270</h5>
            <div className="cardContent">
              <div className="cardTitle">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/svgIcon/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpeg"
              alt="sheakers"
            />
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="cardContent">
              <div className="cardTitle">
                <span>Ціна:</span>
                <b>8 499 грн.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/svgIcon/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpeg"
              alt="sheakers"
            />
            <h5>Кросівки Puma X Aka Boku Future Rider</h5>
            <div className="cardContent">
              <div className="cardTitle">
                <span>Ціна:</span>
                <b>8 999 грн.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/svgIcon/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/NikeBlazerMid.jpeg"
              alt="sheakers"
            />
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="cardContent">
              <div className="cardTitle">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/svgIcon/plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
