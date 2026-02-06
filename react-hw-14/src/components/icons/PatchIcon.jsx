export default function PatchIcon() {
    return (
        <svg
            width="160"
            height="160"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >

            <ellipse cx="100" cy="185" rx="60" ry="10" fill="#000" fillOpacity="0.05" />

            <rect
                x="30"
                y="80"
                width="140"
                height="40"
                rx="20"
                fill="#0d9488"
                transform="rotate(-45 100 100)"
            />

            <rect
                x="30"
                y="80"
                width="140"
                height="40"
                rx="20"
                fill="#0d9488"
                transform="rotate(45 100 100)"
            />

            <rect
                x="82"
                y="82"
                width="36"
                height="36"
                rx="4"
                fill="#0f766e"
                transform="rotate(-45 100 100)"
                stroke="#ffffff"
                strokeWidth="2"
            />

            <g fill="#ffffff" fillOpacity="0.6">
                <circle cx="65" cy="65" r="2" />
                <circle cx="55" cy="75" r="2" />
                <circle cx="75" cy="55" r="2" />

                <circle cx="135" cy="65" r="2" />
                <circle cx="145" cy="75" r="2" />
                <circle cx="125" cy="55" r="2" />

                <circle cx="65" cy="135" r="2" />
                <circle cx="135" cy="135" r="2" />
            </g>

            <g stroke="#0d9488" strokeWidth="3" strokeLinecap="round">
                <line x1="100" y1="30" x2="100" y2="45" />
                <line x1="85" y1="35" x2="90" y2="45" />
                <line x1="115" y1="35" x2="110" y2="45" />

                <line x1="100" y1="170" x2="100" y2="155" />
            </g>
        </svg>
    );
}