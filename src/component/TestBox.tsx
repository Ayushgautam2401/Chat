import React, { useState } from 'react';
import { IChatItem, MessageType } from "../baseProvider/chatRext";

import './TestBox.css';

interface ChatProps {
  chat: IChatItem;
}

function TestBox(props: any) {
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleFileInput = (e: any) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

	const handleUpload = async () => {
		if (selectedFile) {
			const formData = new FormData();
			formData.append('file', selectedFile);
	
			try {
				const response = await fetch('https://example.com/api/upload', {
					method: 'POST',
					body: formData
				});
	
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		}
	};

  const handleComponentSubmit = (e: any) => {
    e.preventDefault();
    setMessage(inputValue); 
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleComponentSubmit} className='container'>
			<div>
				<input type="file" onChange={handleFileInput} />
				<button onClick={handleUpload}>Upload</button>
			</div>
      <div className='chat-message-box'>
        <div className='chat-message-container'>
         <span className='chat-message'> {message}</span>
        </div>
        <div className='chat-input-container'>
          <input
            type='text'
            className='chat-input'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default TestBox;