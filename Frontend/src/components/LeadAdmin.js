import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { Store1 } from '../Store';

export default function LeadAdmin({children})
{
    const {state}=useContext(Store1);
    const {userInfo}=state;

    return userInfo && userInfo.data.user.role==='lead-admin' ? children:<Navigate to="/login" />
}