import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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