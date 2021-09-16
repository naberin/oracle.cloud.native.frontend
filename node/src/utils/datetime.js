
function time_now() {
    let timestamp = Date.now()
    let current_time = new Date(timestamp);
    let date = current_time.getDate();
    let month = current_time.getMonth();
    let year = current_time.getFullYear();
    let hour = current_time.getHours();
    let min = current_time.getUTCMinutes();

    month = month.toString().padStart(2, '0');
    date = date.toString().padStart(2, '0');

    return `${year}-${month}-${date} ${hour}:${min}`;
}

module.exports = {
    time_now: time_now
};