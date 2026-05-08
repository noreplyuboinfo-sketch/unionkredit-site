export function BlurStar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute inset-0 bg-brand/30 blur-[80px] rounded-full" />
    </div>
  );
}
