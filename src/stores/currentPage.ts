import { writable } from "svelte/store";

const currentPage = writable("Home");

export default currentPage;
