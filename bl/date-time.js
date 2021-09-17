function DateTime() {
    let date = new Date();
    function get_short_date(){
        return date.toDateString();
    }
    function get_full_date(){
        return date.toString();
    }
    return {
        short_date : get_short_date,
        full_date : get_full_date
    };
}

module.exports = DateTime;