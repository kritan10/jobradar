function FooterItem({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="min-w-[200px]">
            <h4 className="font-bold text-lg my-4">{title}</h4>
            <ul>
                {items.map((listItem, index) => {
                    return (
                        <li key={index} className="my-2">
                            {listItem}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FooterItem
