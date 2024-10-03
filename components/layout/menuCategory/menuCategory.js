export default function MenuCategory({ children }) {
  return (
    <div className="w-full whitespace-nowrap rounded-md border">
      <div className="flex gap-3 p-4 overflow-scroll">{children}</div>
    </div>
  );
}
