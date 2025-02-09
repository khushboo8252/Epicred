"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Load Dark Mode Preference
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
    document.body.classList.toggle("bg-white", !savedMode);
    document.body.classList.toggle("bg-gray-800", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    document.documentElement.classList.toggle("dark", newMode);
    document.body.classList.toggle("bg-white", !newMode);
    document.body.classList.toggle("bg-gray-800", newMode);
  };

  return (
    <header className="bg-gray-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Eclipse</h1>

      <nav className="flex space-x-4">
        <Link href="#" className="hover:text-gray-400">Find Job</Link>
        <Link href="#" className="hover:text-gray-400">Messages</Link>
        <Link href="#" className="hover:text-gray-400">Hiring</Link>
        <Link href="#" className="hover:text-gray-400">Community</Link>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle Button */}
        <button
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={toggleDarkMode}
        >
          {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>

        {/* Profile Image */}
        <Image
        src="https://th.bing.com/th/id/R.a0ebadaa4d147809254be4d85f0df46a?rik=AeSy93rxeSH7FA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-YI3woYihTeY%2fVRW7zwYDoeI%2fAAAAAAAAARA%2fCXkhqHE1m9M%2fs1600%2fCute-Beautiful-Girl-Baby-Images.jpg&ehk=n2SPJy5IEI0rm0DSvZQs76ZnIji%2faEcWGXnEajsbW%2fw%3d&risl=&pid=ImgRaw&r=0"
        alt="Profile"
        width={40} // Set appropriate width
        height={40} // Set appropriate height
        className="rounded-full border-2 border-gray-300 dark:border-gray-500"
      />
      </div>
    </header>
  );
}
