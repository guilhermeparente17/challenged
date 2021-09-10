import React from 'react'
import Header from '../../components/Header/Header'
import Mainpage from '../../components/MainPage/Mainpage'
import Modal from '../../components/Modal/Modal'
import Sidebar from '../../components/Sidebar/Sidebar'


const Homepage = () => {
    return (
        <div>
            <Header  />
            <Sidebar />
            <Modal />
            <Mainpage />
        </div>
    )
}

export default Homepage
