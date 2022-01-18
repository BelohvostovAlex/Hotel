import React from 'react'

import { Hero } from '../components/Hero'
import {Button} from '../components/Button'
import {Banner} from '../components/Banner'

export const Error = () => {
    return (
        <Hero hero='defaultHero'>

            <Banner title={'404'} subtitle={'Page is not found'}>
                <Button btnClass='btn-primary' toPath='/' btnText='return home'/>
            </Banner>
        </Hero>
    )
}
