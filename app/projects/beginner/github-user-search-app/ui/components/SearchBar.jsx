"use client";
import { useForm } from "react-hook-form";
import Button from "./Button";

export default function SearchBar() {
  const methods = useForm();
  return (
    <form className="bg-lime-500 flex items-center px-3 py-2 sm:pl-6 sm:pr-3">
      <label className="flex-1 flex items-center" htmlFor="usernameInput">
        <div className="size-5 sm:size-6 bg-red-500">i</div>
        <input
          id="usernameInput"
          className="bg-sky-500 w-full preset-3 text-neutral-500"
          placeholder="Search GitHub username..."
        />
      </label>
      <Button text="Search" type="submit" />
    </form>
  );
}
