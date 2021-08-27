// https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg

const app = Vue.createApp({
    data() {
        console.log("WTF ELSE CAN I DO HERE???");

        return {
            name: "identity crisis",
            age: 17,
            imgurl: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        }
    },

    methods: {
        randomNum(minimum=100, maximum=500) {
            return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        }
    }
});

app.mount("#assignment");