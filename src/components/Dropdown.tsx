import Image from "next/image";
import { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  selected: string | null;
  setSelected: (option: string) => void;
  placeholder: string;
}

const Dropdown = ({
  label,
  options,
  selected,
  setSelected,
  placeholder,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-5">
      <label className="block mb-1 text-base font-medium text-black-primary">
        {label}
      </label>

      {/* Trigger */}
      <div
        className="flex items-center justify-between bg-white border border-gray-border rounded-md p-[10px] text-sm cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`${selected ? "text-black-primary" : "text-gray-primary"}`}
        >
          {selected || placeholder}
        </span>
        <Image
          src="/images/dashboard/arrowDown.svg"
          alt="Down"
          width={20}
          height={20}
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Options */}
      <div
        className={`absolute z-10 top-full left-0 w-full bg-white border border-gray-border rounded-md mt-2 shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((opt) => (
          <div
            key={opt}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setSelected(opt);
              setOpen(false);
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
