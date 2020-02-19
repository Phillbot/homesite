import React, { useEffect, createRef } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import testChangerAtction from "../../../actions/testChangerAtction";

export const Home = () => {
  const test = useSelector((state: any) => state.testReducer.test);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title> Dmitry Filippenko | Home</title>
      </Helmet>
    </div>
  );
};
