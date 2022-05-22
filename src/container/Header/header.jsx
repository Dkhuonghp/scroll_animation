import { init } from "./layer"
import { useEffect } from "react"

const header = () => {
  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">page_title</h1>
        <p className="text">secondary_text</p>
        <p>
          {/* <button className="btn" onClick={() => setLanguage("en")} style={{background: getLanguage() === "en" ? "#ffba02" : "#a7a7a7"}}>English</button>
          <button className="btn" onClick={() => setLanguage("ru")} style={{background: getLanguage() === "ru" ? "#ffba02" : "#a7a7a7"}}>Russian</button> */}
        </p>
      </div>

      <div className="pricing">
        <h1>our_packages</h1>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">text_basic</p>
            <p className="info">card_text</p>
            <button className="btn">text_buy</button>
          </div>
          <div className="pricing-card">
            <p className="title">text_standard</p>
            <p className="info">card_text</p>
            <button className="btn">text_buy</button>
          </div>
          <div className="pricing-card">
            <p className="title">text_pro</p>
            <p className="info">card_text</p>
            <button className="btn">text_buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default header