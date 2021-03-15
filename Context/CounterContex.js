import createDataContext from "./createDataContext";



const counterReducer = (state, action) => {
    switch (action.type) {
        case "setVariables": {
            return
        }
    }
}


export const { Context, Provider } = createDataContext(
    counterReducer,
    {
        changeCounter
    },
    {
        variables:
        {
            variableLabel: "Visitor",
            variableLabel: "Person Served",
            valuePerPress1: 0,
            variablePerPress: 0
        },
        count: {
            variable1: 0,
            variable2: 0
        }
    })