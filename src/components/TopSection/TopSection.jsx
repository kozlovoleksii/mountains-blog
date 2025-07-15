
import "./TopSection.css"
import layer1 from '../../assets/images/layer-1.webp';
import layer2 from '../../assets/images/layer-2.webp';
import layer3 from '../../assets/images/layer-3.webp';
import layer4 from '../../assets/images/layer-4.webp';
import layer5 from '../../assets/images/layer-5.webp';

const TopSection = () => {
  return (
    <div className="top">
      <div
        className="top__layer top__layer--5"
        style={{ backgroundImage: `url(${layer5})` }}
      ></div>
      <div
        className="top__layer top__layer--4"
        style={{ backgroundImage: `url(${layer4})` }}
      ></div>
      <div
        className="top__layer top__layer--3"
        style={{ backgroundImage: `url(${layer3})` }}
      >
        <div className="top__text">
          <h1 className="title">let's go </h1>
          <p className="text">on an incredible journey</p>
        </div>
      </div>
      <div
        className="top__layer top__layer--2"
        style={{ backgroundImage: `url(${layer2})` }}
      ></div>
      <div
        className="top__layer top__layer--1"
        style={{ backgroundImage: `url(${layer1})` }}
      ></div>
    </div>
  )
}

export default TopSection
