import "./SectionWrapper.css"

const SectionWrapper = ({ children }) => {

  return (
    <div className="section-wrapper">
      {children}
    </div>
  );
};

export default SectionWrapper;
