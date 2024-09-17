import React, { useState } from 'react'

import AddnewCard from '../components/common/Payment/NewPaymentCard'
import UserAccount from '../components/common/UserAccount/UserAccount'
import UserProfile from '../components/common/UserAccount/UserProfile'
import Layout from '../layoutComponent/Layout'
import '../styling/MyAccountPage1.css'

function MyAccountPage1() {
  const [activeSection, setActiveSection] = useState('profile')

  const sidebarItems = [
    { label: 'Profile', section: 'profile' },
    { label: 'Personalisation', section: 'personalisation' },
    { label: 'Account', section: 'account' },
    { label: 'Payment Methods', section: 'paymentMethods' },
    { label: 'Notifications', section: 'notifications' },
    { label: 'Privacy', section: 'privacy' },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <UserProfile />
      case 'paymentMethods':
        return <AddnewCard />
      case 'account':
        return <UserAccount />
      default:
        return <UserProfile />
    }
  }

  return (
    <>
      <Layout>
        <div className="myAccountContainer no-select">
          <h2 className="myAccountContainerH2">My Account</h2>

          <div className="sidebar">
            {sidebarItems.map((item) => (
              <p
                key={item.section}
                className={`sidebarItem ${activeSection === item.section ? 'sidebarProfile' : ''}`}
                onClick={() => setActiveSection(item.section)}
              >
                {item.label}
              </p>
            ))}
          </div>

          {renderSection()}
        </div>
      </Layout>
    </>
  )
}

export default MyAccountPage1
