import { Button, Input, Icon, TextArea } from "semantic-ui-react";
import { useState } from "react";
import "./ChatInput.scss";

function ChatInput({ handleSendMessage }: any) {
  const [value, setValue] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInput = ({ charCode, target: { value } }: any) => {
    if (charCode === 13 && value.length) {
      handleSendMessage(value);
      setValue("");
    }
  };

  const handleChange = ({ target: { value: newVal } }: any) => {
    setValue(newVal);
  };

  const handleClick = () => {
    if (value.length) {
      handleSendMessage(value);
      setValue("");
    }
  };
  const handleFileInput = (e: any) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const set =()=>{
    handleSendMessage('')
    setValue('')
  }

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await fetch('http://3.8.72.214:5000/upload', {
          method: 'post',
          body: formData
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div className="flex flex-row ">
      <div className="flex">
        <Input type="file" onChange={handleFileInput} />
        <Button onClick={handleUpload}>Upload</Button>
      </div>
      <TextArea
        size="large"
        value={value}
        placeholder="Send a message..."
        onKeyPress={handleInput}
        onChange={handleChange}
        rows={2}
      />
      <Button icon onClick={handleClick}>
            <Icon name="send" />
          </Button>
      {/* <div><Button onClick={set}>Clear Chat</Button></div> */}
    </div>
  );
}


export default ChatInput;
