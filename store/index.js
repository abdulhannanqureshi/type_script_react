import React from 'react';
import create from 'zustand'
import Actions from './Action'

const initialState = {
    profile: {}
}

export const useStore = create(set => ({
    ...initialState,
    ...Actions(set)
}))

