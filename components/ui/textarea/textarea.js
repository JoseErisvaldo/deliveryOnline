// components/Textarea.js

export default function Textarea({ label, value, onChange, className }) {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && <label className="font-semibold text-gray-700">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
    </div>
  );
}
