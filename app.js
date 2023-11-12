const begin = document.getElementById("begin");
const end = document.getElementById("end");
const result = document.getElementById("result");

const getDays = (date1, date2) => {
    const date1ms = date1.getTime();
    const date2ms = date2.getTime();
    const difference = date2ms - date1ms;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}

const printResult = () => {
    const days = getDays(new Date(begin.value), new Date(end.value));
    result.innerHTML = days;
}

begin.addEventListener("change", printResult);
end.addEventListener("change", printResult);