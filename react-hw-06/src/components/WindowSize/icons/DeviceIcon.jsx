function DeviceIcon({ type }) {
    if (type === "mobile") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <circle cx="12" cy="18" r="1" fill="#fff" />
            </svg>
        )
    }

    if (type === "tablet") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <circle cx="12" cy="18" r="1" fill="#fff" />
            </svg>
        )
    }

    return (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <rect x="9" y="18" width="6" height="2" />
        </svg>
    )
}

export default DeviceIcon