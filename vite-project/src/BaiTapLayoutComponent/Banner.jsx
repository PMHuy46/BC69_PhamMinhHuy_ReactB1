import React from "react";

const Banner = () => {
  return (
    <div className="p-5 my-5 text-center container">
      <h1 style={{fontSize:50, fontWeight:700}}>A warm welcome!</h1>
      <p className="fs-4"> 
        Bootstrap utility classes are used to create this jumbotron since the
        old component has been removed from the framework. Why create custom CSS
        when you can use utilities?
      </p>
      <button className="btn btn-primary py-2 fs-4">Call to action</button>
    </div>
  );
};

export default Banner;
