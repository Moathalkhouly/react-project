import React from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "./Feedback.css";
function Feedback() {
  let [Name, setName] = useState("");
  let [post, setpost] = useState("");
  let [comment, setcomment] = useState("");
  let [refresh, setrefresh] = useState(false);
  const [postEditValue, setPostEditValue] = useState("");

  const [posts, setPosts] = useState([]);
  let FormSubmit = (e) => {
    e.preventDefault();
    const image1 = faker.image.avatar();
    axios.post("http://localhost:5001/Posts", {
      Name,
      post,
      image1,
      comments: [],
    });
    setPosts([...posts, { Name, post, image1, comments: [] }]);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5001/Posts")
      .then((response) => {
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post, refresh]);

  return (
    <div>
      <div className="BigBig">
        <div className="BigElement">
          <h2>Your Feedback is Important</h2>
          <form onSubmit={FormSubmit}>
            <div className="Name">
              <input
                type="text"
                placeholder="your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="NewPost">
              <input
                type="text"
                placeholder="new post"
                onChange={(e) => {
                  setpost(e.target.value);
                  setPostEditValue(e.target.value);
                }}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="Mother-of-map">
          {posts.map((post) => (
            <div key={post.id} className="SHOWPost">
              <div className="PostUser">
                <img src={post.image1} alt="" className="PostUserImage" />
                <h3>{post.Name}</h3>
              </div>
              <div className="btns">
                <button
                  onClick={() => {
                    axios.put(`http://localhost:5001/Posts/${post.id}`, {
                      ...post,
                      post: postEditValue,
                    });
                    setrefresh(!refresh);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    axios.delete(`http://localhost:5001/Posts/${post.id}`);
                    setrefresh(!refresh);
                  }}
                >
                  Delete
                </button>
              </div>
              <p>{post.post}</p>
              <div className="PostCreateComment">
                <input
                  type="text"
                  onChange={(e) => {
                    setcomment(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    const commentData = {
                      img: faker.image.avatar(),
                      text: comment,
                      date: new Date().toLocaleString(),
                    };
                    axios.put(`http://localhost:5001/Posts/${post.id}`, {
                      ...post,
                      comments: [...post.comments, commentData],
                    });
                    setrefresh(!refresh);
                  }}
                >
                  Comment
                </button>
               
              </div>
              <div className="CommentsStyle">
                  {post.comments.map((item) => {
                    return (
                      <div className="CommentStyle">
                        <img src={item.img} alt="" className="PostUserImage" />
                        <div>{item.text}</div>
                       <div className="Time">  {item.date}</div>
                      </div>
                    );
                  })}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;