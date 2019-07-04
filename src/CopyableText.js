import React, { useRef } from "react";

const hiddenInputStyles = {
  display: "none",
  position: "absolute"
};

function CopyableText(props) {
  const { children, style, ...otherProps } = props;
  const input = useRef();

  const handleClick = async () => {
    if (!input.current) {
      return;
    }
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(input.current.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      input.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <>
      <input style={hiddenInputStyles} ref={input} defaultValue={children} />
      <span
        style={{ ...style, cursor: "pointer" }}
        onClick={handleClick}
        {...otherProps}
      >
        {children}
      </span>
    </>
  );
}

export default CopyableText;
