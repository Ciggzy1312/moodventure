import React, { useState, useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Stats from '../components/Stats';

const Memories = () => {

    const { user } = useUser();
    
    if (user) { 
        const {email} = user;

        return (
            <div>
                <Stats email={email}/>
            </div>
        )
    }

    return (
        <div>
            <span className=''>Loading...</span>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired()

export default Memories