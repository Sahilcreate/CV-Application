function Section({title, data, renderItem}) {
    return (
        <div className={`preview-${title.toLowerCase()} preview-subsection`}>
            {data.map(renderItem)}
        </div>
    );
}

export default Section;