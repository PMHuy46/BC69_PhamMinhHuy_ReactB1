import React from "react";

const Item = () => {
  return (
    <div className="m-5 row ">
      <div className="col-4 p-5 text-center">
        <i class="bi bi-collection fs-1 bg-primary px-2 rounded text-white"></i>
        <h4 className="fw-bold">Fresh new layout</h4>
        <p className="px-5">
          With Bootstrap 5, we've created a fresh new layout for this template!
        </p>
      </div>
      <div className="col-4 p-5 text-center">
        <i class="bi bi-cloud-download fs-1 bg-primary px-2 rounded text-white"></i>
        <h4 className="fw-bold">Free to download</h4>
        <p className="px-5">
          As always, Start Bootstrap has a powerful collectin of free templates.
        </p>
      </div>
      <div className="col-4 p-5 text-center">
        <i class="bi bi-card-heading fs-1 bg-primary px-2 rounded text-white"></i>
        <h4 className="fw-bold">Jumbotron hero header</h4>
        <p className="px-5">The heroic part of this template is the jumbotron hero header!</p>
      </div>
      <div className="col-4 p-5 text-center">
        <i class="bi bi-bootstrap fs-1 bg-primary px-2 rounded text-white"></i>
        <h4 className="fw-bold">Feature boxes</h4>
        <p className="px-5">We've created some custom feature boxes using Bootstrap icons!</p>
      </div>
      <div className="col-4 p-5 text-center">
        <i class="bi bi-code fs-1 bg-primary px-2 rounded text-white"></i>
        <h4 className="fw-bold">Simple clean code</h4>
        <p className="px-5">pWe keep our dependencies up to date and squash bugs as they come!</p>
      </div>
      <div className="col-4 p-5 text-center ">
        <i class="bi bi-patch-check fs-1 bg-primary px-2 rounded text-white"></i>
        <h4 className="fw-bold">A name you trust</h4>
        <p className="px-5">
          Start Bootstrap has been the leader in free Bootstrap templates since
          2013!
        </p>
      </div>
    </div>
  );
};

export default Item;
