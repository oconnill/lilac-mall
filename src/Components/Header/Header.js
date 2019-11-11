import React from 'react'
import './Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="header-logo-wrapper">

                    </div>
                    <div className="header-links">
                        <div>Collections</div>
                        <div>Sale</div>
                        <div>Info</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header