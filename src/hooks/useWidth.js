import { computed } from 'vue-function-api';

export default function useWidth() {
  const windowWidth = computed(() => {
    return window.innerWidth
  })

  return {
    windowWidth
  }
}
