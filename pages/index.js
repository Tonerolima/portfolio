import Page from "../layout/main";
import { useState, useEffect } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    $(".text-danger").css("font-size", "2rem");
  });

  return (
    <Page>
      <div>
        <p className="text-danger">You clicked {count} times</p>
        <button
          className="btn btn-lg btn-primary rounded-0"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
      </div>
    </Page>
  );
};

export default Index;
