import React, {Fragment} from 'react'

import Widget from './CategoryWidget'
import './Categories.scss'

const CategoryWidgets = ({widgets}) => {
    return (
        <Fragment>
            {widgets && widgets.map(widget => 
                <div key={widget.node.id} className="categories-widget">
                    <Widget title={widget.node.description} image={widget.node.fluid}/>
                </div>
            )
            }
            <div></div>
        </Fragment>
        )
}

export default CategoryWidgets