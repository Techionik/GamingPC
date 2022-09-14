// RootNavigation.js

import * as React from 'react'

export const navigationRef = React.createRef()
export const isReadyRef = React.createRef()

export function navigate(name, params,nestedNavigate=undefined) {
    if (isReadyRef.current && navigationRef.current) {
        try {
            navigationRef.current?.navigate(name, params)
        } catch (e) {
            setTimeout(()=>{
                if (isReadyRef.current && navigationRef.current) {
                    try {
                        if (nestedNavigate)
                        navigationRef.current?.navigate(name, params,nestedNavigate)
                        else
                        navigationRef.current?.navigate(name, params)
                    } catch (e) {
                        console.log(e)
                    }
                }
            },(3000))
        }
    }
}
