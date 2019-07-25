import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bemCx from 'bem-modifiers'


class Layout extends Component {
    render () {
        const {
            pageName,
            displayHeader = true,
            displayFooter = true,
            modifiers,
            ...props
        } = this.props
        return (
            <div className={bemCx('layout', modifiers)}>
                { displayHeader && <Header {...props} pageName={pageName} />}
                <div className='layout__main'>
                    {this.props.children}
                </div>
                { displayFooter && <Footer {...props} pageName={pageName} />}
            </div>
        )

    }
}

export default Layout