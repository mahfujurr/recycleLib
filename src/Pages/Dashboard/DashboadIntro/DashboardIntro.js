import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const DashboardIntro = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='text-center mt-10 text-3xl font-bold'>
            <h2>Hello {user.displayName},</h2>
            <h1>Welcome back to dashboard</h1>
        </div>
    );
};

export default DashboardIntro;