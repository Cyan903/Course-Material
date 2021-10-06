<template>
  <div>
    <div class="container">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <div class="container">
      <div class="block" :class="{animate: animatedBlock}"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition name="paragraph">
        <p v-if="paragraphVisible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod perspiciatis vitae? Incidunt est porro cum dicta libero similique quod.</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <transition name="btn" mode="out-in">
          <button @click="toggleBtn" v-if="btnVisible">Show Users</button>
          <button @click="toggleBtn" v-else>Hide Users</button>
      </transition>
    </div>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
    <div class="container">
      <list-data></list-data>
    </div>
  </div>
</template>

<script>
import ListData from "./components/ListData.vue";

export default {
  components: {
    ListData
  },

  data() {
    return {
      animatedBlock: false,
      paragraphVisible: false,
      dialogIsVisible: false,
      btnVisible: false
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },

    hideDialog() {
      this.dialogIsVisible = false;
    },

    animateBlock() {
      this.animatedBlock = true;
    },

    toggleParagraph() {
      this.paragraphVisible = !this.paragraphVisible;
    },

    toggleBtn() {
      this.btnVisible = !this.btnVisible;
    }
  },
};
</script>

<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active,
.route.leave-active {
  transition: all 1s ease;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

.btn-enter-from {
  opacity: 0;
}

.btn-enter-active {
  transition: opacity 0.3s ease-out;
}

.btn-enter-to {
  opacity: 1;
}

.animate {
  transform: translateX(100px);
  transition: all 0.5s ease-in-out;
}

.paragraph-enter-from,
.paragraph-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.paragraph-enter-active,
.paragraph-leave-active {
  transition: all 0.5s ease-in-out;
}

.paragraph-enter-to,
.paragraph-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* 
  .v-leave-from {}
  .v-leave-active {}
  .v-leave-to {}
*/


* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>