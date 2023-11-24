const getMagicFigure = (data)=>{
    let result = data/2;
    if(Number.isInteger(result)){
        result +=1;
    }else{
        result = Math.ceil(result)
    }
    return result
}

const addMagicFigureData = (data) => {
    const addedData =  data?.map((state) => {
        let magicFigure = getMagicFigure(state['total_constituencies'])
        return { ...state, 'magic_figure': magicFigure }
    })
    return addedData
}

const getMagicFigureData = async(data ,stateName) => {
    const magicData = await addMagicFigureData(data?.[0]?.['states'])
    const stateData = await magicData?.find((state) => state['name'] === stateName)
    const magicFigure =  await stateData?.['magic_figure']
    return magicFigure
}

const getSateData = (data, stateName)=>{
    const websocketData =  data[0]['states']
    const stateData = websocketData.filter((state)=>state['name'] === stateName)
    return stateData
}

export {
    addMagicFigureData,
    getMagicFigureData,
    getSateData,
}