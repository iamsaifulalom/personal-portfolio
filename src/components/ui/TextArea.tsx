import { ChangeEvent } from "react";


export default function TextArea({ label, name, error, onChange , value}: TextAreaProps) {
  return (
    <div className="space-y-1 relative">
      <label className="block absolute left-5 text-[10px] -top-2  bg-foreground text-background px-3 rounded-full font-medium">{label}</label>
      <textarea
        onChange={onChange}
        name={name}
        value={value}
        rows={3}
        placeholder="Have an idea? Let’s make it real — share it with me..."
        className="border scrollbar-hide border-gray  focus:outline-none py-2 px-3 w-full rounded-2xl"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}


interface TextAreaProps {
  label?: string;
  name: string;
  type?: string;
  error?: string,
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string
}