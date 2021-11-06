import { ref } from "vue";

export default function useAlert(vis=false) {
    const alertIsVisible = ref(vis);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
    };
}