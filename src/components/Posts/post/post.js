import React from "react";
import Post from "./Post/Post";

import useStyles from "./styles";

const Post = () => {

    const classes = useStyles();
    return(
        <>
             <h1>POST</h1>
             <Post />
             <Post />
        </>
       
    );
};

export default Post;