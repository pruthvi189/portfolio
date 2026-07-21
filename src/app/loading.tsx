export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-amber rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-2 h-2 bg-amber rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-2 h-2 bg-amber rounded-full animate-bounce" />
      </div>
    </div>
  );
}
