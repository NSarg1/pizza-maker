import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Notification = () => {
    // notify = () => {
    //    toast("Default Notification !");

    //    toast.success("Success Notification !", {
    //      position: toast.POSITION.TOP_CENTER
    //    });

    //    toast.error("Error Notification !", {
    //      position: toast.POSITION.TOP_LEFT
    //    });

    //    toast.warn("Warning Notification !", {
    //      position: toast.POSITION.BOTTOM_LEFT
    //    });

    //    toast.info("Info Notification !", {
    //      position: toast.POSITION.BOTTOM_CENTER
    //    });

    //    toast("Custom Style Notification with css class!", {
    //      position: toast.POSITION.BOTTOM_RIGHT,
    //      className: 'foo-bar'
    //    });
    //  };

    return (
        <ToastContainer
            bodyClassName="notification"
            type="info"
            position="top-center"
            hideProgressBar={false}
            autoClose={3000}
        />
    );
};

export default Notification;
