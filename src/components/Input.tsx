import React from "react";

type Props = {
  name?: string;
  title?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: "email" | "file" | "hidden" | "number" | "password" | "text";
};

export const Input: React.FC<Props> = ({
  name,
  type,
  value,
  title,
  required,
  onChange,
}) => {
  return (
    <div className="w-[95%] flex flex-col gap-2 p-3">
      <label className="text-white font-bold text-[18px]  ">
        {title || "Informe texto"}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={
          onChange ? (event) => onChange(event.target.value) : undefined
        }
        required={required}
        className="w-[100%] h-[47px] bg-[#262525] rounded-3xl p-4 text-white "
      />
    </div>
  );
};
