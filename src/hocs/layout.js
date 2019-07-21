import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


class Layout extends Component {
    render () {
        const {
            pageName,
            displayHeader = true,
            displayFooter = true,
            ...props
        } = this.props
        return (
            <>
                { displayHeader && <Header {...props} pageName={pageName} />}
                {this.props.children}
                { displayFooter && <Footer {...props} pageName={pageName} />}
            </>
        )

    }
}

export default Layout