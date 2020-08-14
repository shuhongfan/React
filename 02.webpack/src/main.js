import $ from 'jquery'

import './css/index.scss'

$(function () {
    $('li:odd').css('background','red')
    $('li:even').css('background','green')
})


class Person{
    static info={name:'zs'}
}

console.log(Person.info)
