export function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M2 15C15 5 40 25 60 15C75 5 85 20 95 30" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        className="text-brand"
      />
      <path 
        d="M85 32L96 31L92 20" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-brand"
      />
    </svg>
  );
}
