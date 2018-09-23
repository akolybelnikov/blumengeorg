import React from 'react'
import {Link} from "gatsby"
import './Breadcrumb.scss'
import Phone from '../icons/Phone'
import IconXmasCat from '../icons/IconXmasCat'
import IconOfficeCat from '../icons/IconOfficeCat'
import IconWeddingCat from '../icons/IconWeddingCat'
import IconFuneralCat from '../icons/IconFuneralCat'
import IconBouquetCat from '../icons/IconBouquetCat'
import IconBirthdayCat from '../icons/IconBirthdayCat'
import IconDeliveryCat from '../icons/IconDeliveryCat'

const PageIcon = ({pathname}) => {
    const path = pathname.replace(/\//g, '')
    switch (path) {
        case 'weihnachten':
            return (<IconXmasCat width="75"/>)
        case 'buero':
            return (<IconOfficeCat width="75"/>)
        case 'beerdigung':
            return (<IconFuneralCat width="75"/>)
        case 'hochzeit':
            return (<IconWeddingCat width="75"/>)
        case 'geburtstag':
            return (<IconBirthdayCat width="75"/>)
        case 'event':
            return (<IconBirthdayCat width="75"/>)
        case 'contact':
            return (<IconDeliveryCat width="75"/>)
        default:
            return (<IconBouquetCat width="75"/>)
    }
}

const Breadcrumb = props => {
    return (
        <section className="section breadcrumb-section">
            <div className="columns is-mobile">
                <div className="column is-half">
                    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                        <ul>
                            <li>
                                <Link to="/">
                                    <span className="is-size-4-desktop">Startseite</span>
                                </Link>
                            </li>
                            <li className="is-active">
                                <Link to="#" aria-current="page">
                                    <span className="is-capitalized is-size-4-desktop">
                                        {props
                                            .pathname
                                            .replace(/\//g, '')}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="column is-half has-text-right">
                    <div className="page-icon">
                        <PageIcon pathname={props.pathname}/>
                    </div>
                    <a
                        href="tel:00491797319455"
                        className="button is-primary is-outlined is-inverted level-item order-button is-pulled-right"
                        aria-label="telephone number of Blumen Georg">
                        <span className="icon">
                            <Phone width="24" height="24" fill="whitesmoke"/>
                        </span>
                        <span>Eine Bestellung besprechen</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb