import Ajax from "@/utils/ajax"

const test = data => Ajax('GET', '', data);

// ...

export { test }