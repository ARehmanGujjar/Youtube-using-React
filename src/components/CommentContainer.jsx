import React from "react";
const Data = [
  {
    user: "Ali",
    text: "lorem ispum dolor espum  modi",
    replies: [
      {
        user: "Anwar",
        text: "lorem ispum dolor espum  modi",
      },
      {
        user: "Akhlaq",
        text: "lorem ispum dolor espum  modi",
      },
    ],
  },
  { user: "Usman",
   text: "lorem ispum dolor espum estum  modi" },
];
const Comment = ({Data}) => {
    const {user,text,replies}=Data;
  return (
    <>
      <div className="flex gap-3 bg-gray-100 w-2/3 shadow-sm rounded-md p-2">
        <img className="w-12 h-12 rounded-full" src="../images/profile.png" alt="user" />
        <div className="comment">
          <h2 className="font-bold text-lg">{user}</h2>
          <p className="text-md">{text}</p>
        </div>
      </div>
    </>
  );
};
const CommentList=({comments})=>{
 return  comments.map((comment,index)=>(
    <div>
        <Comment key={index} Data={comment}/>
        {/* <div className="border-l border-black ml-5 m-1 p-2">
            <CommentList comments={comment}/>
        </div> */}
    </div>

));
            
        
}


const CommentContainer = () => {
  return (
    <>
      <div className="m-5 py-2">
        <h1 className="text-1xl font-bold mb-5">Comments:</h1>
        <CommentList comments={Data}/>
        
          
      </div>
    </>
  );
};

export default CommentContainer;
