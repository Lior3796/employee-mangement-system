export const filterBySearch = (dataFromServer, value) => {
    if (!value.length) {
        return dataFromServer;
    }

    let { data } = dataFromServer;
    let field = value[0].match("[0-9]") ? "id" : "Name";
    if (field === "Name") {
        data = data?.filter(item => item.Name.toLowerCase()
            .startsWith(value.toLowerCase()));
    } else {
        data = data?.filter(item => {
            const id = item.id.toString();
            return id.startsWith(value)
        });
    }
    const newResponse = { ...dataFromServer, data };
    return newResponse;

}