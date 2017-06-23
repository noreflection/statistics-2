import * as React from 'react';
const logo = require('./resources/logo.svg') as string;
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <img src={logo} className="app-logo" alt="logo" />
                    <Link className='navbar-brand' to={'/'}>Statistics</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={'/'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/counter'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/test'} activeClassName='active'>
                                <span className='glyphicon glyphicon-italic'></span> Test
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/persons'} activeClassName='active'>
                                <span className='glyphicon glyphicon-star'></span> Persons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/projects'} activeClassName='active'>
                                <span className='glyphicon glyphicon-star'></span> Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/GetBooks'} activeClassName='active'>
                                <span className='glyphicon glyphicon-star'></span> GetBooks
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
