import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../actions/actions";
import Watch from "./Watch";

function Store() {
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.watchesData);

  useEffect(() => {
    dispatch(getData());
  });

  return (
    <div className="store" id="store">
      <div className="container">
        <div className="intro-text">
          <h1>Our Store</h1>
        </div>
        <div className="products">
          {watches.map((watch) => (
            <Watch
              key={watch.id}
              id={watch.id}
              label={watch.label}
              description={watch.description}
              price={watch.price}
              img={watch.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
