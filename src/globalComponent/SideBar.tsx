import * as React from 'react'
import app_routes from "../configuration/app_routes";
import {Link} from "react-router-dom";

export default class SideBar extends React.Component {

    render() {
        return(
            <div>
                <div className={'sidebar'}>
                    {
                        app_routes.APP_ROUTES().map((item: any) => (
                            <div>

                                <div className={'menuItems'}>
                                    <Link to={item.url}>
                                        <div className={(window.location.pathname === item.url) ? 'current' : ""}
                                             onClick={() => {
                                                 console.log("go to " + item.name)
                                             }}>
                                            <i className={item.icon}></i> {<span>{item.name}</span>}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
