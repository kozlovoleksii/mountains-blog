import "./BlogSection.css";
import { useState } from "react";
import {blogInfo, stories} from "../../constants/blogData"
import SectionWrapper from "../Layout/SectionWrapper";
import Modal from "../Modal/Modal";
import BlogCard from "../BlogCard/BlogCard";
import bgImage from '../../assets/images/blog-bg.webp';

const BlogSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStory, setActiveStory] = useState(null);

  const openModal = (index) => {
    setActiveStory(stories[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveStory(null);
  };

  return (
    <section className="blog" style={{
    backgroundImage: `url(${bgImage})`,
  }}>
      <SectionWrapper>
        <h2 className="blog__title">Latest Stories</h2>
        <p className="blog__intro">
          Discover stories of adventurers conquering peaks, surviving storms,
          and finding peace in the mountains.
        </p>

        <div className="blog__grid">
        {blogInfo.map((card, index)=>(
          <BlogCard card={card} key={index} onReadMore={() => openModal(index)}/>
        ))}

          <Modal
  isOpen={modalOpen}
  onClose={closeModal}
  title={activeStory?.title}
  content={activeStory?.content}
/>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default BlogSection;
