import $ from 'jquery';
import '../header/header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

$(document).ready(function() {
  $('body').append('<div id="logo"></div>');
  $('#logo').css({
    'background-image': `url(${logo})`,
    'width': '200px',
    'height': '200px',
    'background-size': '200px 200px'
  });
  $('body').append('<h1>Holberton Dashboard</h1>');
});

