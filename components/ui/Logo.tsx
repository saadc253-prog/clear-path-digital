export default function Logo({ className = "w-8 h-8", textClassName = "text-xl" }: { className?: string, textClassName?: string }) {
    return (
        <div className="flex items-center gap-2">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" className="text-primary" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className={`font-bold tracking-tight ${textClassName}`}>
                Clear Path <span className="text-primary">Digital</span>
            </span>
        </div>
    );
}
