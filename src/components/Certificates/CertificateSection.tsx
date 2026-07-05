import CertificateCard from "./CertificateCard";
import FadeIn from "../ui/FadeIn";

const certificates = [
    {
        title: "Microsoft Azure Fundamentals",
        skills: ["Azure", "Cloud", "Networking"],
        certificateLink: "https://www.linkedin.com/posts/samarpitnandanwar_microsoftcertified-azure-az900-activity-7479409178973954048-vn6d?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGi7p8BnDUTyoYCno3N9ksB9LlHce6MgFU",
        image: "/azure_fundamentals.jpeg",
    },
    {
        title: "Microsoft Github Copilot",
        skills: ["Github", "Copilot", "AI"],
        certificateLink: "https://www.linkedin.com/posts/samarpitnandanwar_microsoft-azure-dp900-activity-7460583547985321984-KV20?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGi7p8BnDUTyoYCno3N9ksB9LlHce6MgFU",
        image: "/github_copilot.jpeg",
    },
    {
        title: "Microsoft Azure Data Fundamentals",
        skills: ["Azure", "Data", "SQL"],
        certificateLink: "https://www.linkedin.com/posts/samarpitnandanwar_microsoft-azure-azuredatafundamentals-activity-7457657288955179009-xDrU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGi7p8BnDUTyoYCno3N9ksB9LlHce6MgFU",
        image: "/azure_data_fundamentals.jpeg",
    },
    {
        title: "Generative AI",
        skills: ["Generative AI", "Prompt Engineering", "Natural Language Processing"],
        certificateLink: "https://www.linkedin.com/posts/samarpitnandanwar_upgrad-ai-technology-activity-7395858181970755584-8KIE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGi7p8BnDUTyoYCno3N9ksB9LlHce6MgFU",
        image: "/generative_ai.jpeg",
    },

    {
        title: "AI White Belt",
        skills: ["AI", "Machine Learning", "Data Science"],
        certificateLink: "https://www.linkedin.com/posts/samarpitnandanwar_artificialintelligence-ai-learninganddevelopment-activity-7373649997902295040-X9Hn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGi7p8BnDUTyoYCno3N9ksB9LlHce6MgFU",
        image: "/ai_white_belt.jpeg",
    },
    {
        title: "AWS Cloud Practitioner",
        skills: ["AWS", "EC2", "S3"],
        certificateLink: "https://www.linkedin.com/posts/samarpitnandanwar_aws-certification-cloudpractitioner-activity-7362857982499471362-pK4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGi7p8BnDUTyoYCno3N9ksB9LlHce6MgFU",
        image: "/aws_cloud_practitioner.jpeg",
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="w-full border-b-4 border-foreground py-12 md:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10">

                <FadeIn>
                    <div className="mb-20 text-center">

                        <span className="mb-4 inline-block border-2 border-foreground bg-foreground px-3 py-1.5 font-mono text-xs font-black uppercase tracking-wider text-background">
                            Certificates
                        </span>

                        <h2 className="mb-4 font-mono text-4xl font-black uppercase tracking-tight md:text-5xl">
                            Professional Certifications
                        </h2>

                        <div className="mx-auto mb-5 h-1.5 w-24 bg-foreground" />

                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            A collection of professional certifications demonstrating my
                            expertise in software development, cloud technologies, and modern
                            programming.
                        </p>

                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {certificates.map((certificate, index) => (
                        <FadeIn key={index} delay={index * 0.12}>
                            <CertificateCard {...certificate} />
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}