import { FiExternalLink } from "react-icons/fi";

interface CertificateProps {
    title: string;
    skills: string[];
    certificateLink: string;
    image: string;
}

export default function CertificateCard({
    title,
    skills,
    certificateLink,
    image,
}: CertificateProps) {
    return (
        <div className="group w-full h-full">
            <div className="flex h-full flex-col overflow-hidden border-4 border-foreground bg-card text-foreground shadow-[6px_6px_0px_0px_var(--foreground)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--foreground)]">

                {/* Certificate Image */}
                <a
                    href={certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex h-80 items-center justify-center overflow-hidden border-b-4 border-foreground bg-muted"
                >
                    <img
                        src={image}
                        alt={title}
                        className="max-h-full max-w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* External Link Icon */}
                    <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center border-2 border-foreground bg-card shadow-[2px_2px_0px_0px_var(--foreground)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_var(--foreground)]">
                        <FiExternalLink size={18} />
                    </div>
                </a>

                {/* Bottom Section */}
                <div className="flex flex-1 flex-col p-5">

                    <h3 className="mb-4 text-lg font-black leading-snug md:text-xl">
                        {title}
                    </h3>

                    <div className="mt-auto flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="border-2 border-foreground bg-background px-3 py-1 text-xs font-black uppercase transition-colors hover:bg-foreground hover:text-background"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}