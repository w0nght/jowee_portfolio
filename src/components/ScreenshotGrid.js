export default function ScreenshotGrid({
  items = [],
  alternate = true,
  width,
  height,
  objectFit = "cover",
}) {
  return (
    <div className="screenshot-grid">
      {items.map((item, idx) => {
        const bgClass = item.bg
          ? item.bg
          : alternate
          ? idx % 2 === 0
            ? "sand"
            : "mist"
          : "sand";
        const resolvedWidth =
          typeof width === "number" ? `${width}px` : width || "100%";
        const resolvedHeight =
          typeof height === "number" ? `${height}px` : height || "auto";
        return (
          <figure key={idx} className={`screenshot-card ${bgClass}`}>
            <img
              src={item.src}
              alt={item.alt || "Screenshot"}
              style={{
                width: resolvedWidth,
                height: resolvedHeight,
                objectFit,
              }}
            />
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        );
      })}
    </div>
  );
}
