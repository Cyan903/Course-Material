// I could have skipped this module
// This has nothing to do with ts...

import axios from "axios";

const result = document.getElementById("result")! as HTMLParagraphElement;
const getJoke = document.getElementById("getJoke")! as HTMLButtonElement;

getJoke.onclick = async () => {
    const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });

    result.innerHTML = res.data.joke;
}