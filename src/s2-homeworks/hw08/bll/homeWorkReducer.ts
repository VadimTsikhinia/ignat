import {UserType} from '../HW8'

type ActionType =
    | upNameACType
    | checkAge18ACType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-UP-NAME': { // by name
            const newState: UserType[] = [...state]
            if (action.paylod.sort === 'up') {
                return newState.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            }
            if (action.paylod.sort === 'down') {
                return newState.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
            }
            return newState // need to fix
        }
        case 'CHECK-AGE-18': {
            const newState:UserType[] = [...state]
            return newState.filter(f=>f.age >= action.paylod.age) // need to fix
        }
        default:
            return state
    }
}
type upNameACType = ReturnType<typeof upNameAC>
type checkAge18ACType = ReturnType<typeof checkAge18AC>

export const upNameAC = (sort: 'up' | 'down') => {
    return {
        type: "SORT-UP-NAME",
        paylod: {
            sort
        }
    } as const
}
export const checkAge18AC = () => {
    return {
        type: "CHECK-AGE-18",
        paylod: {
            age: 18
        }
    } as const
}
