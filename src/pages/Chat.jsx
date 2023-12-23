import {
    addDoc,
    collection,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
    where,
  } from 'firebase/firestore';
  import { auth, db } from '../firebase/config';
  import { useEffect, useState } from 'react';
  import Message from '../components/Message';
  
  const Chat = ({ room, setRoom }) => {
    const [messages, setMessages] = useState(null);
  
  
    const messagesRef = collection(db, 'messages');
  
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      const text = e.target[0].value;
  
     
      await addDoc(messagesRef, {
        text,
        room,
        author: {
          name: auth.currentUser.displayName,
          uid: auth.currentUser.uid,
          photo: auth.currentUser.photoURL,
        },
        createdAt: serverTimestamp(), 
      });
  
     
      e.target[0].value = '';
    };
  
    
    useEffect(() => {
      
      const options = query(
        messagesRef,
        where('room', '==', room),
        orderBy('createdAt', 'asc')
      );
      
      const unsubscribe = onSnapshot(options, (snapshot) => {
        
        const tempData = [];
  
       
        snapshot.docs.forEach((doc) => tempData.push(doc.data()));
  
      
        setMessages(tempData);
      });
  
      return () => unsubscribe();
    }, []);
  
    return (
      <div className="chat">
        <header>
          <p>{auth?.currentUser?.displayName}</p>
          <p>{room}</p>
          <button onClick={() => setRoom(null)}>Farklı Oda</button>
        </header>
        <main>
          {messages?.map((data, i) => (
            <Message key={i} data={data} />
          ))}
        </main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="mesajınızı yazınız..."
          />
          <button>Gönder</button>
        </form>
      </div>
    );
  };
  
  export default Chat;