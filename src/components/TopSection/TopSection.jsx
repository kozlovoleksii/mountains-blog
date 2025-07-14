
import "./TopSection.css"

const TopSection = () => {
  return (
    <div className="top">
      <div
        className="top__layer top__layer--5"
        style={{ backgroundImage: "url(./images/layer-5.webp)" }}
      ></div>
      <div
        className="top__layer top__layer--4"
        style={{ backgroundImage: "url(./images/layer-4.webp)" }}
      ></div>
      <div
        className="top__layer top__layer--3"
        style={{ backgroundImage: "url(./images/layer-3.webp)" }}
      >
        <div className="top__text">
          <h1 className="title">let's go </h1>
          <p className="text">on an incredible journey</p>
        </div>
      </div>
      <div
        className="top__layer top__layer--2"
        style={{ backgroundImage: "url(./images/layer-2.webp)" }}
      ></div>
      <div
        className="top__layer top__layer--1"
        style={{ backgroundImage: "url(./images/layer-1.webp)" }}
      ></div>
    </div>
  )
}

export default TopSection
