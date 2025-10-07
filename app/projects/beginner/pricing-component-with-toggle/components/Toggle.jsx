"use client";

export default function Toggle({ enabled, setEnabled }) {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="flex w-fit mx-center gap-10 text-gray-650/50 preset-5 cursor-pointer mx-auto mb-16"
    >
      <span>Annually</span>
      <div
        className={`w-14 h-8 rounded-full bg-linear-to-br from-gradient-start to-gradient-end relative transition ${
          !enabled ? "opacity-50" : "opacity-100"
        }`}
      >
        <div
          className={`absolute w-6 aspect-square top-1/2 -translate-y-1/2 ${
            enabled ? "left-1 " : "right-1 "
          }  bg-white rounded-full transition`}
        />
      </div>
      <span>Monthly</span>
    </button>
  );
}
