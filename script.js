class Bus {
    constructor(passengerCount, ticketPrice) {
        this.passengerCount = passengerCount;
        this.ticketPrice = ticketPrice;
    }

    totalTicketPrice() {
        return this.passengerCount * this.ticketPrice;
    }
}

class ExpressBus extends Bus {
    constructor(passengerCount, ticketPrice, speed) {
        super(passengerCount, ticketPrice);
        this.speed = speed;
    }

    totalTicketPrice() {
        const adjustedTicketPrice = this.ticketPrice + 0.05 * this.speed;
        return this.passengerCount * adjustedTicketPrice;
    }
}

document.getElementById('busForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const passengerCount = parseInt(document.getElementById('busPassengers').value, 10);
    const ticketPrice = parseFloat(document.getElementById('busPrice').value);

    const bus = new Bus(passengerCount, ticketPrice);
    document.getElementById('busResult').textContent = `Загальна вартість квитків: ${bus.totalTicketPrice().toFixed(2)} грн.`;
});

document.getElementById('expressBusForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const passengerCount = parseInt(document.getElementById('expressPassengers').value, 10);
    const ticketPrice = parseFloat(document.getElementById('expressPrice').value);
    const speed = parseFloat(document.getElementById('speed').value);

    const expressBus = new ExpressBus(passengerCount, ticketPrice, speed);
    document.getElementById('expressBusResult').textContent = `Загальна вартість квитків: ${expressBus.totalTicketPrice().toFixed(2)} грн.`;
});
