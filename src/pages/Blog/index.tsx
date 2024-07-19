import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";

const ChangeButton = styled.button(({ hasTrue }: { hasTrue: boolean }) => [
  tw`w-24 h-20`,
  css`
    border-radius: 20px;
  `,
  hasTrue ? tw`bg-red-400` : tw`bg-blue-900`,
]);
const Blog = () => {
  const [color, setColor] = useState(false);
  return (
    <div>
      Blog
      <ChangeButton
        hasTrue={color}
        onClick={() => {
          setColor(!color);
        }}
        className=" text-white"
      >
        색깔 좀!!
      </ChangeButton>
    </div>
  );
};

export default Blog;
