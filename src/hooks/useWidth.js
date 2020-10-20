import { computed } from "@vue/composition-api";

export default function useWidth() {
  const windowWidth = computed(() => {
    return window.innerWidth
  })

  return {
    windowWidth
  }
}
