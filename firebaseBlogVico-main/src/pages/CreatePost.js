import React, {useState, useEffect} from "react";
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from "../firebase-config";
import {useNavigate} from "react-router-dom"

function CreatePost({isAuth}){
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");

    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef,{
            title: title,
            postText: postText,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        });
        navigate("/");
    }

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className= "createPostPage">
            <div className ="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label> Title:</label>
                    <input placeholder="title..." 
                        onChange={ (event) => {

                            setTitle(event.target.value);
                            
                        }}
                    />
                </div>
                <div className="inputGp"></div>
                    <label> Post: </label> 
                    <textarea placeholder="Post..." rows="15" cols="40"
                        onChange={ (event) => {
                            setPostText(event.target.value);
                        }}
                    />
            </div>
            <button onClick={createPost}> Submit post</button>
        </div>
    )
}

export default CreatePost;
