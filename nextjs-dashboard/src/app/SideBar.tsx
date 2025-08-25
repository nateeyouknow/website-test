'use client';
import { useEffect, useState } from 'react';

export default function ShowSideBar() {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const show = document.getElementById("show");

    if (sidebar && show) {
      show.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        setIsHidden(prev => !prev);
      });
    }

    // Optional cleanup
    return () => {
      if (show) {
        show.replaceWith(show.cloneNode(true)); // removes listeners
      }
    };
  }, []);

  return (
    <div
      id="show"
      className="fixed bottom-8 left-8 border-2 p-2 font-bold rounded-2xl text-green-400 cursor-pointer"
    >
      {isHidden ? "Show Sidebar" : "Hide Sidebar"}
    </div>
  );
}