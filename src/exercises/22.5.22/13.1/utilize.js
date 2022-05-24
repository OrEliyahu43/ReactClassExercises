import { data } from "./data"


   export const getDataName = () => {

    const names = data.map(obj => obj.name)
    console.log(names)
    return names;
}

    export const getBefore90 = () => {
    const before = data.filter(obj => {
        const year = obj.birthday.split('-')[2];
        if(parseInt(year)<1990)
        return obj;
    })
    return before;
}