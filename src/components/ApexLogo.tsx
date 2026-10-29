
import Image from "next/image";

type ApexLogoProps = {
    size?: number;
    className?: string;
};

export default function ApexLogo({
    size = 56,
    className = "",
}: ApexLogoProps) {
    return (
        <Image
            src="/images/apex-logo-original.png"
            alt="Logo oficial da APEX"
            width={size}
            height={size}
            className={`object-contain ${className}`}
            priority
        />
    );
}
