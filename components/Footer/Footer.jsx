import React from "react";

const Footer = () => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="w-full mb-10">
      <div className="flex w-full  justify-between">
        <p>{formattedDate}</p>
        <p>Asia/Kolkata</p>
      </div>
    </div>
  );
};

export default Footer;