import React, { useState } from "react";
import Modal from "../Modal/modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Card({ imagePath, alt, title, modal, url }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    modal && setIsModalOpen(true);
    if (url) {
      window.location.href = url;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        className=" bg-white border border-gray-200 shadow-lg relative group overflow-hidden mb-5 flex flex-col h-min"
        onClick={openModal}
      >
        <LazyLoadImage
          className=" object-contain"
          src={imagePath}
          alt={alt}
          loading="lazy"
          effect="blur"
        />
        <div
          className={`absolute inset-0 bottom-0 bg-black 
          bg-opacity-30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 ease-in-out 
          flex items-end justify-center transform`}
        >
          <p className="text-md pl-5 pb-5 pr-5 font-serif tracking-tight text-white">
            {title}
          </p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <img
          className="w-full h-auto object-contain"
          src={imagePath}
          alt={alt}
        />
      </Modal>
    </>
  );
}
