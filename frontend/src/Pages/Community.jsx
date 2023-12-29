import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Utils/Firebase';
export default function Community() {
    const [communities, setCommunities] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login if no user is logged in
        if (!currentUser) {
            navigate("/login");
        } else {
            // Fetch communities when the component mounts
            getCommunities();
        }
    }, [currentUser, navigate]);

    const getCommunities = async function () {
        try {
            const querySnapshot = await getDocs(collection(db, "communities"));
            const communitiesData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            // Set the communities state with the received data
            setCommunities(communitiesData);
        } catch (error) {
            console.error("Error fetching communities:", error);
        }
    };

    return (
        <div>
            <Link to='community/1222'>Community</Link>
            <button></button>
            {/* Render your communities here using the 'communities' state */}
            {communities.map((community) => (
                <div key={community.id}>
                    <Link to={`/community/${community.id}`}>
                        <button className='m-1'>{community.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}