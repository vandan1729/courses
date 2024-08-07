import FooterComponent from '../common/FooterComponent';
import Navbar2 from '../homePage2/Navbar2';
import '../../styling/MyAccount1.css';
import { TbCameraPlus } from 'react-icons/tb';
import { UserContext } from '../../contextProvider/UserContextProvider';
import { useContext, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Layout from "../../layoutComponent/Layout"; 

function MyAccount1() {
    const { userData, newUserData } = useContext(UserContext);

    const [formData, setFormData] = useState({
        userFirstName: userData.userFirstName,
        userLastName: userData.userLastName,
        userHeadLine: userData.userHeadLine,
        email: userData.userEmail, 
        selectedFile: null
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevData => ({
            ...prevData,
            selectedFile: file
        }));
    };

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasEmptyData = Object.values(formData).some(value => value === '');
        if(hasEmptyData) {
            toast.warn('Fill Data Properly 🤌', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        newUserData(formData);
        toast.success('Uploaded Successfully 😎', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <>
            <Layout>

            <div className='myAccountContainer'>
                <h2>My Account</h2>

                <div className='sidebar'>
                    <p>Profile</p>
                    <p>Personalisation</p>
                    <p>Account</p>
                    <p>Payment Methods</p>
                    <p>Notifications</p>
                    <p>Privacy</p>
                </div>

                <div className='accountFormContainer'>
                    <span className='profileEmoji'>😎</span>
                    <TbCameraPlus className='cameraEmoji' onClick={handleIconClick} />
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='userFirstName'>First Name</label>
                        <input
                            id='userFirstName'
                            type='text'
                            value={formData.userFirstName}
                            onChange={handleChange}
                        />

                        <label htmlFor='userLastName'>Last Name</label>
                        <input
                            id='userLastName'
                            type='text'
                            value={formData.userLastName}
                            onChange={handleChange}
                        />

                        <label htmlFor='userHeadLine'>HeadLine</label>
                        <input
                            id='userHeadLine'
                            type='text'
                            value={formData.userHeadLine}
                            onChange={handleChange}
                        />

                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'  
                            type='email'
                            value={formData.email}  
                            onChange={handleChange}
                        />

                        <div className='accountFormContainerBtn'>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
            </Layout>
        </>
    );
}

export default MyAccount1;
