import { useEffect } from 'react';
import { getDatabase, ref, onChildAdded } from 'firebase/database';
import 'firebase/database';
import { useDispatch } from 'react-redux';
import formatEmail from '../functions/formatEmail';
import { fetchInboxAction } from '../store/actions/emailAction';

const fetchNewEmails = (userEmail) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Reference to  Firebase Realtime Database
        const database = getDatabase();

        // Reference to the location in the database where we want to listen for new nodes
        const newNodeRef = ref(database, `${formatEmail(userEmail)}/inbox`);

        // Event listener for when a new child node is added
        const unsubscribe = onChildAdded(newNodeRef, (snapshot) => {
            // The snapshot contains data about the new node
            const newNodeData = snapshot.val();

            dispatch(fetchInboxAction());

        });


        return () => {

            // Remove the event listener when the component unmounts
            unsubscribe();
        };
    }, []);
};

export default fetchNewEmails;
