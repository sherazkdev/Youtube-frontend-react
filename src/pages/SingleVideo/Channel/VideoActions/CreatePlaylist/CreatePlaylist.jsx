import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Icons from "../../../../../assets/Icons";

const CreatePlaylist = ({ onClose, handleCreateNewPlaylist }) => {
  const [visibility, setVisibility] = useState("Private"); // default
  const [showDropdown, setShowDropdown] = useState(false);
  const [collaborate, setCollaborate] = useState(false);

  // form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: { playlist: "" },
  });

  const title = watch("playlist");

  const visibilityOptions = [
    { label: "Public", desc: "Anyone can search for and view" },
    { label: "Unlisted", desc: "Anyone with the link can view" },
    { label: "Private", desc: "Only you can view" },
  ];

  const onSubmit = (data) => {
    if (!data.playlist.trim()) return;
    handleCreateNewPlaylist({ title: data.playlist, visibility, collaborate });
    onClose(true);
  };

  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[320px] bg-white shadow-lg rounded-xl p-4 flex flex-col space-y-5"
      >
        {/* Header */}
        <h2 className="text-lg font-semibold">New playlist</h2>

        {/* Title Input */}
        <div className="flex flex-col space-y-1">
          <input
            type="text"
            placeholder="Choose a title"
            {...register("playlist", {
              required: { value: true, message: "A title is required" },
              onChange: (e) => setValue("playlist", e.target.value),
            })}
            className="w-full border rounded-lg px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#0f0f0f]"
          />
          {errors?.playlist && (
            <span className="flex space-x-2 items-center text-[#b61432] text-sm">
              <Icons.Info />
              <span>{errors.playlist.message}</span>
            </span>
          )}
        </div>

        {/* Visibility Label + Dropdown */}
        <div className="flex flex-col space-y-2 relative">
          <label className="text-sm font-medium">Visibility</label>

          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full border rounded-lg px-4 py-4 text-sm flex justify-between items-center"
          >
            <span>{visibility}</span>
            <span
              className={`text-gray-500 transition-transform ${
                showDropdown && "rotate-180"
              }`}
            >
              ▼
            </span>
          </button>

          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute top-[100%] mt-1 left-0 w-full bg-white border rounded-lg shadow-md z-10">
              {/* Top selected visibility */}
              <div className="px-3 py-2 border-b bg-gray-50 flex justify-between items-center">
                <span className="font-medium">{visibility}</span>
                <span>✔</span>
              </div>

              {/* Options list */}
              {visibilityOptions.map((option, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setVisibility(option.label);
                    setShowDropdown(false);
                  }}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <p className="text-sm font-medium">{option.label}</p>
                  <p className="text-xs text-gray-500">{option.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Collaborate Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Collaborate</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={collaborate}
              onChange={() => setCollaborate(!collaborate)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-3">
          <button
            type="button"
            onClick={() => onClose(false)}
            className="p-[8px_46px] text-sm rounded-full border hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!title.trim()}
            className={`p-[8px_46px] text-sm rounded-full ${
              title.trim()
                ? "bg-[#0f0f0f] hover:bg-[#272727] text-white"
                : "bg-[#0000000D] text-[#909090]"
            }`}
          >
            Create
          </button>
        </div>
    </form>
  );
};

export default CreatePlaylist;
