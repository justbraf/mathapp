import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.html';
import './add.html';

import './add.js';
import './sub.js';
import './mul.js';
import './div.js';


let gName = "Brad";

Template.allData.helpers({
  guestName(){
    return gName;
  },
  skill(){
    return "coding"
  },
  mySkill(){
    if (gName == "Brad"){
      return true;
    }
    return false;
  }
});

Template.allData.events({
  'mouseout h3'(event, instance){
    console.log("Welcome");
  },
  'mouseenter h6'(event, instance){
    console.log("Header 6 touched");
  }
});

Template.mathChoice.events({
  'click #rating'(events){
    var rating = $('#rating').data('userrating');
    console.log(rating);
  },
  'click .js-showAdd'(events){
    console.log("show add");
    $(".subNum").addClass("d-none");
    $(".addNum").removeClass("d-none");
    // clear all buttons
    $(".js-showSub").removeClass("btn-success");
    $(".js-showAdd").removeClass("btn-info");
    // setup new button icons
    $(".js-showAdd").addClass("btn-success");
    $(".js-showSub").addClass("btn-info");
  },
  'click .js-showSub'(events){
    console.log("show subtract");
    $(".addNum").addClass("d-none");    
    $(".subNum").removeClass("d-none");
    // clear all buttons
    $(".js-showAdd").removeClass("btn-success");
    $(".js-showSub").removeClass("btn-info");
    // setup new button icons
    $(".js-showSub").addClass("btn-success");
    $(".js-showAdd").addClass("btn-info");
  }
});