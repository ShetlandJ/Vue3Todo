import { computed } from 'vue-function-api';

export default function useBackgroundColour({ value }) {
  const backgroundColour = computed(() => {

    if (value < 500) {
      return 'green';
    }

    if (value >= 500 && value <= 800) {
      return 'orange'
    }

    return 'tomato'
  })

  return {
    backgroundColour
  }
}
