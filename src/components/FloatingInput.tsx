import { useState } from "react";
import type { InputHTMLAttributes } from "react";

interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FloatingInput = ({ label, error, value, defaultValue, onChange, ...props }: FloatingInputProps) => {
  const [focused, setFocused] = useState(false);

  const hasValue = value !== undefined ? String(value).length > 0 : defaultValue !== undefined &&  String(defaultValue).length > 0;

  const isFloating = focused || hasValue;

  return (
    <div>
      <div className="relative border-b border-[#777]">
        <input
          {...props}
          value={value}
          defaultValue={defaultValue}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          onChange={onChange}
          placeholder=" "
          className="peer h-16 w-full bg-transparent text-[16px] outline-none"
          required
        />

        <label
          className={`pointer-events-none absolute left-0 transition-all duration-200 ease-out ${
            isFloating ? "top-0 text-[12px] text-[#555]" : "top-1/2 -translate-y-1/2 text-[14px] text-[#454545]"
          }`}
        >
          {label}
        </label>
      </div>

      {error && (
        <p className="mt-1 text-[10px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default FloatingInput;