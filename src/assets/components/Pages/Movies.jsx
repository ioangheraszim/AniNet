import React from "react";

function Movies() {
  return (
    <section className="container mx-auto">
        <div className="grid grid-cols-4 grid-rows-4 gap-10">
          <button className="p-10 m-5 bg-cool transition-all duration-200 hover:shadow-primary font-extrabold rounded-lg">
            Action
          </button>
          <button className="p-10 m-5 bg-cool transition-all duration-200 hover:shadow-primary font-extrabold rounded-lg">
            Action
          </button>
          <button className="p-10 m-5 bg-cool transition-all duration-200 hover:shadow-primary font-extrabold rounded-lg">
            Action
          </button>
        </div>
    </section>
  );
}

export default Movies;
