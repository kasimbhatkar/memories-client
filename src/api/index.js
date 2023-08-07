import axios from "axios";

const url = 'http://localhost5000/posts';

export const fetchPosts = () => axios.get(url);