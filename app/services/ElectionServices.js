const addMagicFigureData = (data) => {
    const addedData = data?.map((state) => {
        let magicFigure = (state['total_constituencies'] / 2) + 1;
        return { ...state, 'magic_figure': magicFigure }
    })
    return addedData
}

const getMagicFigure = (data, stateName) => {
    const stateData = data?.[0]?.['states']?.find((state) => state['name'] === stateName)
    return stateData
}

export {
    addMagicFigureData,
    getMagicFigure,
}