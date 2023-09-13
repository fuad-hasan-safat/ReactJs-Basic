import React, { useEffect, useState } from "react";
import Image_ from "./Image";
import useFetchImage from "../utils/hooks/useFetchImage";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(page, searchTerm);

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImages() {
    return (
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={() => setPage(page + 1)}
        hasMore={true}
        className="flex flex-wrap"
      >
        {
          images.map((img, index) => (
            <Image_
              image={img.urls.regular}
              index={index}
              handleRemove={handleRemove}
              key={index}
            />
          ))
        }
      </InfiniteScroll>
    );
  }

  const debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    debounce(()=>setSearchTerm(text));
  }

  return (
    <section>
      <div className="my-5"> 
        <input type="text"
          onChange={handleInput} 
          className="w-full border rounded-lg shadow-lg border-cyan-500 hover:border-yellow-400 p-2"
          placeholder="Search Photos here: ex, cat"/>
      </div>
      {
        isLoading === true && (
          <div className="flex h-screen">
            <div className="m-auto">
              <i className="fa-solid fa-spinner fa-spin fa-spin-reverse text-6xl text-yellow-500" ></i><br/>
            </div>
            
          </div>
        )
      }
      {errors.length > 0 ? (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      ):<ShowImages />
      }
      
    </section >
  );


}

