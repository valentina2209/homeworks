export default function ErrorIcon() {
    return (
        <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12h3L9 3l6 18 4-9h3" />

            <circle cx="12" cy="12" r="10" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" />
            <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" />
        </svg>
    );
}