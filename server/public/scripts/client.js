$(document).ready(onReady);

function onReady(){
    $('#enter').on('click', numberInput);
    $('#enter').on('click', postNum);
}
let firstNum = 0;
let secondNum = 0;
let opSelect = '';
let newEquation = {};

function numberInput(){
    firstNum = $('#numberInput1').val();
    opSelect = $('#operationInput').val();
    secondNum = $('#numberInput2').val();
    newEquation = {
        num1: firstNum,
        operation: opSelect,
        num2: secondNum,
    }
}

function postNum(){
    $.ajax({
        method: 'POST',
        url: '/newEquation',
        data: newEquation,
    }).then(function(response){
        console.log('post request response', response);
        getNum();
        getHistory();
    }).catch(function(error){
        console.log(error);
    })
}

function getNum(){
    $.ajax({
        method: 'GET',
        url: '/newEquation',
    }).then(function(response){
        // console.log('result from the server', response);
    });
}

function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/history',
    }).then(function(response){
        // console.log('history from the server', response);
        render(response);
    });    
}

    function render(response){
        $('#output').empty();
        for (item of response){
          $('#output').append(`
            <li>
              ${item.num1} ${item.operation} ${item.num2} is equal to ${item.answer}
            </li>
          `)
        }
      }