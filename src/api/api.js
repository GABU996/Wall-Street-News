import axios from "axios";

export default axios.create({
  baseUrl:
    " https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d959a46be82c4c72b5861e53f6f34893 ",
  headers: {
    Authorization: "Bearer d959a46be82c4c72b5861e53f6f34893 ",
  },
});
