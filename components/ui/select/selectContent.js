// components/SelectContent.js

export function SelectContent({ children, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
      {children}
    </div>
  );
}
