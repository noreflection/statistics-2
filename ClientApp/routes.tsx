import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ViewPersons } from './components/ViewPersons';
import { Test } from './components/Test';
import { GetBooks } from './components/GetBooks';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/persons' component={ViewPersons} />
    <Route path='/test' component={Test} />
    <Route path='/getbooks' component={GetBooks} />
</Layout>;