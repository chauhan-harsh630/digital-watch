
function updateTime() {
    const now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    const monthName = document.getElementById('month');
    const dayName = document.getElementById('day');
    const date = document.getElementById('newDate');
    const year = document.getElementById('year');
    let ampm = "AM"
    if (h >= 12) {
        ampm = "PM";
    }
    h = h % 12;
    h = h ? h : 12;

    h = h.toString().padStart(2, '0');

    document.getElementById("houre").textContent =h;
    document.getElementById("min").textContent = m;
    document.getElementById("sec").textContent =s;
    document.getElementById("ampm").textContent = ampm

    monthName.innerHTML = now.toLocaleString("en", { month: "long" });
    dayName.innerHTML = now.toLocaleString("en", { weekday: "long" });
    date.innerHTML = now.getDate();
    year.innerHTML = now.getFullYear();
    document.getElementById("sec").textContent = s ;
}
setInterval(updateTime, 1000);
updateTime();