// components/SelectItem.js

export function SelectItem({ value, children, onClick }) {
  return (
    <div
      onClick={() => onClick(value)}
      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
    >
      {children}
    </div>
  );
}
