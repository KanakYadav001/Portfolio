"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch((err) => console.error("Failed to fetch visitor count:", err));
  }, []);

  if (count === null) {
    return <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">... visitors</p>;
  }

  return (
    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 ">
      {count.toLocaleString()} visitor{count === 1 ? "" : "s"}
    </p>
  );
}
