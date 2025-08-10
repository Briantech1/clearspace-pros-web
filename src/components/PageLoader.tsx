// src/components/PageLoader.tsx
export default function PageLoader() {
  return (
    <div className="w-full py-16 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-clean-blue border-t-transparent" />
      <span className="ml-3 text-clean-gray">Loading…</span>
    </div>
  );
}
