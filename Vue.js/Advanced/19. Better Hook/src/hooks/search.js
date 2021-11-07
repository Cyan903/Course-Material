import { ref, computed, watch } from "vue";

export default function useSearch(items, name) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableUsers = computed(function () {
    let users = [];
    if (activeSearchTerm.value) {
      users = items.value.filter((usr) =>
        usr[name].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      users = items.value;
    }
    return users;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return {
    enteredSearchTerm,
    availableUsers, updateSearch
  }
}
