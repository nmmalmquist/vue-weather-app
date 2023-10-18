import { ref } from "vue"

const mode = ref<"C" | "F">("F")

export const UseTempUnitMode = () => {

  const get = () => {
    mode.value = (localStorage.getItem("weather-unit") ?? "F") as "F" | "C"
    return mode.value
  }
  const set = (input: "C" | "F") => {
    localStorage.setItem("weather-unit", input)
    mode.value = input
  }
  return {
    get,
    set
  }
}