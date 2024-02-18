import React from "react";

const sizeClasses = {
  txtNotoSansBold37Teal900: "font-bold font-notosans",
  txtNotoSansBold20Gray90002: "font-bold font-notosans",
  txtNotoSansRegular13: "font-normal font-notosans",
  txtNotoSansBold37: "font-bold font-notosans",
  txtNotoSansBold20: "font-bold font-notosans",
  txtNotoSansMedium15WhiteA700: "font-medium font-notosans",
  txtNotoSansMedium15: "font-medium font-notosans",
  txtNotoSansRegular15Blue100: "font-normal font-notosans",
  txtNotoSansBold37Gray90002: "font-bold font-notosans",
  txtNotoSansBold45: "font-bold font-notosans",
  txtNotoSansSemiBold13: "font-notosans font-semibold",
  txtNotoSansMedium15Gray90002: "font-medium font-notosans",
  txtNotoSansSemiBold15: "font-notosans font-semibold",
  txtNotoSansRegular15Gray90003: "font-normal font-notosans",
  txtNotoSansRegular15: "font-normal font-notosans",
  txtNotoSansMedium15Blue100: "font-medium font-notosans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
