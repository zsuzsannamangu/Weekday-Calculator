import { getWeekDay } from './weekday-calculator';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('form#weekday-calculator-form').submit(function(event) {
    event.preventDefault();

    let date = new Date(
      $('#date').val()
    );
    // console.log(date);
    // console.log($('#date').val());
    let output = getWeekDay(date);

    $('.output').text(output).show();
    $('.solution').show();

  });
});
