import axios from "axios";

const result = document.getElementById("result")! as HTMLParagraphElement;
const getJoke = document.getElementById("getJoke")! as HTMLButtonElement;

interface response {
    id: string;
    joke: string;
    status: number;
}

getJoke.onclick = async () => {
    const res = await axios.get<response>("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });

    if (res.data.status == 200) {
        result.innerHTML = `<b title="${res.data.id}">${res.data.joke}</b>`;
    } else {
        result.innerHTML = "Error!";
    }
}