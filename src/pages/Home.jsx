import React from 'react'
import TopStats from '../components/TopStats'
import CompanyHeader from '../components/CompanyHeader'
import ClientList from '../components/ClientList'
import WaitingList from '../components/WaitingList'
import CurvedLink from '../components/CurvedLink'

const Home = () => {
  return (
    <div style={{

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '1rem',
        boxSizing: 'border-box',
        backgroundColor: 'black',

    }}>
      <TopStats />
      <CompanyHeader />
      <ClientList />
     <div style={{
        marginLeft: "-41px"}}>
             <WaitingList />
      </div>
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '215px',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}>
        <CurvedLink />
      </div>
    </div>

  )
}

export default Home
