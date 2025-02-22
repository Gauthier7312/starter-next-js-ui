export default function Loading() {
  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-2 overflow-auto px-4">
      <span className="text-lg font-semibold">Logo</span>
      <div className="h-2 w-1/4 shrink-0 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
