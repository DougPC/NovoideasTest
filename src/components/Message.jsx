import React from "react";

const Message = ({ message }) => {
  
  const image=message.sender==='agent'?"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp":"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
  const bgc= message.sender==='agent'?"rgba(57, 192, 237,.2)":"#fbfbfb"
 const position =message.sender==='agent'?"d-flex flex-row justify-content-start mb-4":"d-flex flex-row-reverse justify-content-start mb-4"
  return (
    <>
      <div className={position}>
        <img
          src={image}
          alt="avatar 1"
          style={{ width: "45px", height: "100%" }}
        />
        <div
          className="p-3 ms-3"
          style={{
            borderRadius: "15px",
            backgroundColor: bgc,
          }}
        >
          <p className="small mb-0">
            {message.message}
          </p>
        </div>
      </div>
    </>
  );
};

export default Message;
