import Vue from "Vue";
import component1 from "../component/test1";
import component2 from "../component/test2";
import component3 from "../component/test3";

console.log(component2)

new Vue({
    el: "#app",
    components: {
        "component1": component1,
        "component2": component2,
        "component3": component3
    }
});