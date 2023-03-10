import React from 'react'
import {checkAge18AC, homeWorkReducer, upNameAC} from '../homeWorkReducer'
import { UserType } from '../../HW8'

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        { _id: 0, name: 'Кот', age: 3 },
        { _id: 1, name: 'Александр', age: 66 },
        { _id: 2, name: 'Коля', age: 16 },
        { _id: 3, name: 'Виктор', age: 44 },
        { _id: 4, name: 'Дмитрий', age: 40 },
        { _id: 5, name: 'Ирина', age: 55 },
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, upNameAC('up'))
    expect(newState.length).toBe(6)
    expect(newState[0]._id).toBe(1)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, upNameAC('down'))
    expect(newState.length).toBe(6)
    expect(newState[0]._id).toBe(0)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAge18AC())

    expect(newState.length).toBe(4)
})
