function List({className, listArray}) {
    return (
        <ul className={className + "-list"}>
            {listArray.map((listItem) => {
                return(
                        <li key={listItem.id} className={className + "-list-item"}>
                            {listItem.text}
                        </li>
                )
            })}
        </ul>
    );
}

export default List;