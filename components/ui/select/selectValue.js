// components/SelectValue.js

export function SelectValue({ selectedValue, placeholder }) {
  return <span className="text-gray-700">{selectedValue || placeholder}</span>;
}
