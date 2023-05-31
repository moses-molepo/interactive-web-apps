// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const status = document.querySelectorAll('.status');
const reserve = document.querySelectorAll('.reserve');
const checkout = document.querySelectorAll('.checkout');
const checkin = document.querySelectorAll('.checkin');

status[0].style.color = STATUS_MAP.shelf.color;
reserve[0].disabled = !STATUS_MAP.shelf.canReserve;
checkout[0].disabled = !STATUS_MAP.shelf.canCheckout;
checkin[0].disabled = !STATUS_MAP.shelf.canCheckIn;

status[1].style.color = STATUS_MAP.reserved.color;
reserve[1].disabled = !STATUS_MAP.reserved.canReserve;
checkout[1].disabled = !STATUS_MAP.reserved.canCheckout;
checkin[1].disabled = !STATUS_MAP.reserved.canCheckIn;

status[2].style.color = STATUS_MAP.overdue.color;
reserve[2].disabled = !STATUS_MAP.overdue.canReserve;
checkout[2].disabled = !STATUS_MAP.overdue.canCheckout;
checkin[2].disabled = !STATUS_MAP.overdue.canCheckIn;

