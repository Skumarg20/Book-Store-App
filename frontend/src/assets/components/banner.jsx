import React from "react";
import book from '../../../public/book.png'
export default function Banner() {
  return (
    <>
      <div className="navbar max-w-screen-3xl container mx-auto flex flex-col  md:flex-row ">
        <div className="w-full md:w-1/2 mt-12 order-2 md:mt-10 md:order-1">
          <div className="space-y-5">
            <h1 className="text-2xl font-bold">
              It is a long established fact that a reader will be distracted by
              the readable{" "}
              <span className="text-pink-500">looking at its layout</span>
            </h1>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing package
            </p>
            <label className="input input-bordered  flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-secondary">Secondary</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 mx-auto my-auto order-1 md:mt-10 md:order-2">
    <img src={book} alt="Book" className="w-full max-w-xs h-auto md:w-65" />
</div>

      </div>
    </>
  );
}
