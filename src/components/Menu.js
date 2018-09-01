import React, {PureComponent, Fragment} from 'react'
import DropdownMenu from './DropDownMenu'
import NAVITEMS from './navitems'

const context = NAVITEMS

class MenuBar extends PureComponent {

    constructor() {
        super()
        this.state = {
            blumeOpen: false,
            farbeOpen: false,
            anlassOpen: false
        }
    }

    toggleBlume = () => {
        this.setState(prevState => ({
            blumeOpen: !prevState.blumeOpen
        }))
        if (this.state.farbeOpen) {
            this.toggleFarbe()
        }
        if (this.state.anlassOpen) {
            this.toggleAnlass()
        }
    }

    toggleFarbe = () => {
        this.setState(prevState => ({
            farbeOpen: !prevState.farbeOpen
        }))
        if (this.state.anlassOpen) {
            this.toggleAnlass()
        }
        if (this.state.blumeOpen) {
            this.toggleBlume()
        }
    }

    toggleAnlass = () => {
        this.setState(prevState => ({
            anlassOpen: !prevState.anlassOpen
        }))
        if (this.state.blumeOpen) {
            this.toggleBlume()
        }
        if (this.state.farbeOpen) {
            this.toggleFarbe()
        }
    }

    render() {
        return (
            <Fragment>
                <DropdownMenu
                    title="blume"
                    list={context.flower}
                    listOpen={this.state.blumeOpen}
                    toggleList={this.toggleBlume}/>
                <DropdownMenu
                    title="farbe"
                    list={context.color}
                    listOpen={this.state.farbeOpen}
                    toggleList={this.toggleFarbe}/>
                <DropdownMenu
                    title="anlass"
                    list={context.occasion}
                    listOpen={this.state.anlassOpen}
                    toggleList={this.toggleAnlass}/>
            </Fragment>
        )
    }
}

export default MenuBar
