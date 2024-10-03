// components/SelectTrigger.js

export function SelectTrigger({ children, onClick, className }) {
  return (
    <div onClick={onClick} className={`cursor-pointer border border-gray-300 rounded-lg p-2 ${className}`}>
      {children}
    </div>
  );
}
