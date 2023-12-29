import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from '../Utils/Firebase';
import { AuthContext } from '../Context/AuthContext';

export default function SingleCommunity() {
    const { id } = useParams();
    const { currentUser } = useContext(AuthContext)
    const [community, setCommunity] = useState();
    const [messages, setMessages] = useState([]);

    const sendMessage = async function (e, messagesLength) {
        e.preventDefault();
        const messagesArr = doc(db, "communities", id);
        await updateDoc(messagesArr, {
            messages: arrayUnion({ messageText: e.target[0].value, uid: currentUser.uid, timestamp: new Date().toISOString(), file: e.target[1].value ? e.target[1].value : null, displayName: currentUser.displayName })
        });
        e.target[0].value = '';
    }

    useEffect(() => {
        const getCommunity = () => {
            const unsub = onSnapshot(doc(db, "communities", id), (snapshot) => {
                // Check if the document exists before accessing data
                if (snapshot.exists()) {
                    setCommunity(snapshot.data());
                    setMessages(snapshot.data().messages);
                } else {
                    // Handle the case where the document does not exist
                    console.log("Community not found");
                }
            });

            // Clean up the subscription when the component unmounts
            return () => unsub();
        };

        // Call the function to fetch community data
        getCommunity();
    }, [id]);
    return (
        <div className='community'>
            <div>SingleCommunity</div>
            {messages && messages.map((message, i) => (<div key={i} className='my-4'>
                <span>{message.messageText}</span>
            </div>))}
            <form onSubmit={sendMessage}>
                <input type="text" />
                <input type="file" />
                <button >Send</button>
            </form>
        </div>
    )
}