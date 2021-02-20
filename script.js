const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
var movieSelect = document.getElementById('movie');

var ticketprice = +movieSelect.value;


// function populateUI(){
//     const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

//     if(selectedSeats !== null && selectedSeats.length > 0){
//         seats.forEach((seat, index) => {

//         }); 
//     }
// }

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatIndex);
    // localStorage.setItem('movieSeatBooking', JSON.stringify(seatIndex));

    const selectedSeatsCounts = selectedSeats.length;
    count.innerText = selectedSeatsCounts;
    total.innerText = selectedSeatsCounts * ticketprice;
}

// function setMoviedata(movieIndex, moviePrice){
//     localStorage('selectedMovieIndex', movieIndex);
//     localStorage('selectedMoviePrice', moviePrice);
// }

movieSelect.addEventListener('change', e =>{
    ticketprice = e.target.value;
    // setMoviedata(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
})

container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})
