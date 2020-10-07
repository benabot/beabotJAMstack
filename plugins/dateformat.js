import Vue from "vue"

Vue.filter("dateformat", value => {
  return new Date(value).toLocaleDateString("fr", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
})
