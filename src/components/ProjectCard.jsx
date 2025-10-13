import Tag from "./Tag";

export default function ProjectCard({
    title,
    description,
    tags,
    images,
    liveUrl,
    caseStudyUrl,
}) {
    return (
        <div className="project-card">
            <div className="project-content">
                {/* Tags */}
                <div className="tags">
                    {tags?.map((t) => (
                        <Tag key={t.label} label={t.label} icon={t.icon} />
                    ))}
                </div>

                {/* Title & Description */}
                <h3>{title}</h3>
                <p>{description}</p>

                {/* Buttons */}
                <div className="buttons">
                    {liveUrl ? (
                        <a href={liveUrl} target="_blank" rel="noreferrer">
                            <button>View Live</button>
                        </a>
                    ) : (
                        <button disabled title="Coming soon">
                            View Live
                        </button>
                    )}
                    {caseStudyUrl && (
                        <a href={caseStudyUrl}>
                            <button>Read Case Study</button>
                        </a>
                    )}
                </div>
            </div>

            {/* Images */}
            <div className="project-media">
                {images?.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        width={img.width || "auto"}
                        height={img.height || "auto"}
                    />
                ))}
            </div>
        </div>
    );
}
