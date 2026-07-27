function Logo({ size = 40 }) {
    return(
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            role="img"
            aria-label="Logo der Webseite mit CO2-Footprint"
            className="logo"
        >
            <circle cx="32" cy="32" r="30" fill="#1b7f7c" />
            <path d="M20 42c0-14 10-22 26-22 0 16-10 24-26 22z" fill="#a3e635" />
            <path
                d="M20 44c4-8 10-14 18-18"
                stroke="#12332a"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default Logo
