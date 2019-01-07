import Page from "../layout/main";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    $(".text-danger").css("font-size", "2rem");
  });

  return (
    <Page>
      <Navbar />
    </Page>
  );
};

export default Index;
