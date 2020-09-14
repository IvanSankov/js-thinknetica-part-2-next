import React from "react";

import Scroll2Up from "../helpers/Scroll2Up";

export default function Content({content}) {

  return (
    <>
      {content}
      <Scroll2Up/>
    </>
  );
}