import "./App.css"
import { useTranslation } from 'react-i18next'
import "./i18n.js"

function App() {
  const { t, i18n } = useTranslation();
  
  function qora(){

    document.body.classList.toggle("dark");
  }

  return (  
    <div>
      <header class="container">
        <h1>{t("logo")}</h1>
        <nav>
          <ul>
            <li><a href="#">{t("menu1")}</a></li>
            <li><a href="#">{t("menu2")}</a></li>
            <li><a href="#">{t("menu3")}</a></li>
            <button class="btn" id="btn" onClick={qora}>Dark mode</button>


            <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
              <option value="ru">Rus</option>
              <option value="uz">O'zb</option>
              <option value="en">Eng</option>
            </select>
          </ul>
        </nav>
      </header>
      <section className='texts container'>
        <div className="text">
          <h1>{t("title")} <br />
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem Ipsum has been the <br />
            industry's standard.
          </p>
          <button className='btn2'>{t("btn")}</button>
        </div>
        <img src="./text.png" alt="text" />
      </section>
    </div>
  )
}

export default App