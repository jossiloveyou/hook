import React from 'react';
import Loadable from '@@/Loadable'

const Home= Loadable(() => import('@/pages/Home'))
const Quan= Loadable(() => import('@/pages/com/quan'))

export {
    Home,
    Quan,
}