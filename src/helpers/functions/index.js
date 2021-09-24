export const mapSelectItems = (arr) => {
    const items = arr.map(({type}, index) => ({
        id: index + 1,
        label: type[0],
        value: type[0]
    }));
    return items.filter((item, index, self) =>
        index === self.findIndex((i) => (
            i.value === item.value && i.label === item.label
        ))
    );
}