import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { Spin } from 'antd'

// chargé à la demande
const Home = lazy(() => import('./Home'))
const UserList = lazy(() => import('./users/UserList'))
const Help = lazy(() => import('./Help'))
const About = lazy(() => import('./About'))
const ContactUs = lazy(() => import('./ContactUs'))

export default function Layout() {
    return(
    <Suspense fallback={
      <Spin size="large" tip="Loading..."/> 
    }>
      <Route path="/" component={Home} />
      <Route path="/users" component={UserList} />
      <Route path="/about" component={About} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/help" component={Help} />
    </Suspense>
    )
}