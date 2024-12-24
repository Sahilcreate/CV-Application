function Section({title, data, renderItem}) {
    return (
        <>
        <div className={`${title.toLowerCase()}-heading preview-headings`}>{title.toUpperCase()}</div>
        <div className={`preview-${title.toLowerCase()} preview-subsection`}>
            {data.map(renderItem)}
        </div>
        </>
    );
}

export default Section;