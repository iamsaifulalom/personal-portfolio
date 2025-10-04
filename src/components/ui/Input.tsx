import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string

}

export default function Input({
  label,
  name,
  type = "text",
  error,
  placeholder,
  onChange,
  value
}: InputProps) {
  return (
    <div className="space-y-1 relative">
      <label className="block absolute left-5 text-[10px] -top-2  bg-foreground text-background px-3 rounded-full font-medium">{label}</label>
      <input
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="border border-gray focus:outline-none py-2 px-3 w-full rounded-full"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}
