import axios from "axios";

export function findByUsername(username: string) {
    return axios.get(`https://api.github.com/users/${username}`)
}