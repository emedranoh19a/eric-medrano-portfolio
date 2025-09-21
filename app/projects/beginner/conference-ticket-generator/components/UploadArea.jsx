import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { iconInfo, iconUpload } from "../imageIndex";

export default function UploadArea() {
  const { register, setValue } = useForm();
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const { preview, setPreview } = useFormContext();
  //Style:
  const areaStyles = clsx(
    "flex flex-col gap-4",
    "peer transition-all  ease-in-out preset-6 text-[var(--neutral-300)]",
    "p-4 bg-white/10 group-hover:bg-white/20 backdrop-blur-sm",
    "border border-px border-dashed aspect-none rounded-xl",
    "outline outline-0 outline-offset-2 outline-[var(--neutral-500)]",
    "focus:outline-2  focus:outline-offset-4",
    "placeholder:opacity-25 ",
    "border-[var(--neutral-400)] focus:outline-[var(--neutral-400)]"
  );
  const helperStyles = clsx(
    "preset-7",
    "flex gap-2 justify-start items-center",
    "text-[var(--neutral-300)]"
  );

  //Handlers:
  function handleClick() {
    inputRef.current?.click();
  }
  function handleFiles(files) {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }
    setValue("image", URL.createObjectURL(file)); // tell RHF about the new file(s)
    setPreview(URL.createObjectURL(file)); // show preview
  }
  function handleDragEnter(e) {
    e.preventDefault();
    setIsDragging(true);
  }
  function handleDragLeave(e) {
    if (e.target.contains(e.relatedTarget)) return;
    setIsDragging(false);
  }
  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  return (
    <fieldset className="flex flex-col gap-3">
      <label
        className="capitalize preset-5 text-[var(--neutral-0)]"
        htmlFor="image"
      >
        Upload Avatar
      </label>
      {/* Drop area */}
      <label
        htmlFor="image"
        className={areaStyles}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {
          <div className="mx-auto border border-1 border-[var(--neutral-700)] w-[50px] aspect-square grid place-items-center relative z-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-white/10" />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-[100px] aspect square"
              />
            ) : (
              <Image
                src={iconUpload}
                alt="upload icon"
                width={30}
                height={30}
              />
            )}
          </div>
        }
        <p className="preset-6 text-center">
          {preview ? (
            <div className="flex gap-2 w-full justify-center">
              <button className="text-[var(--neutral-300 rounded-xl)] underline underline-offset-2 bg-white/10 preset-7 py-1 px-2 rounded-lg">
                Remove image{" "}
              </button>
              <button className="text-[var(--neutral-300 rounded-xl)] bg-white/10 preset-7 py-1 px-2 rounded-lg">
                Change image
              </button>
            </div>
          ) : (
            <span>
              {isDragging
                ? "Drop image here"
                : "Drag and drop or click to upload"}
            </span>
          )}
        </p>
      </label>

      {/* Hidden file input (registered with RHF) */}
      <input
        id="image"
        type="file"
        accept="image/*"
        {...register("image")}
        ref={(e) => {
          register("image").ref(e);
          inputRef.current = e; // keep a ref for manual click
        }}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      <div className={helperStyles} role="alert">
        <span>
          <Image src={iconInfo} alt="information icon" height={14} width={14} />
        </span>
        <span>
          {" "}
          Upload Avatar Drag and drop or click to upload your photo (JPG orPNG,
          max size: 500KB).
        </span>
      </div>
    </fieldset>
  );
}
