'use strict'

let arr = [];
let arrSize = 200;
let n;
let sortActive = false;
let sortNum;
let sortedLines = 0;

function setup() {
  createCanvas(300,arrSize+40);
  
  for(let i = 0 ; i < arrSize; i++) {
    arr.push(i+1);
    
  }
  
  
  n = arr.length-1;
  sortNum = arr.length-1;
}

function draw() {
  translate(20,height-20);
  background(200,200,255);
  
  if(n >= 0) {
    shuffleArr(arr,n);
  } else {
    sortActive = true;
  }
  
  if (sortActive) {
    bubbleSort(arr);
  }
  
  
  
  for(let i = 0;i < arr.length-1;i++) {
    line((i*(width-40))/arr.length,-arr[i],(i*(width-40))/arr.length,0);
  }
}

function shuffleArr(arr, num) {
  let rand = round(random(0, num));
  swap(arr, num, rand);
  n--;
}


function swap(array,nr1,nr2) {
  let temp = arr[nr1];
  arr[nr1] = arr[nr2];
  arr[nr2] = temp;
}

function bubbleSort(array) {
  if(array[sortNum-1] > array[sortNum]) {
    swap(array,sortNum,sortNum-1);
  }
  
  sortNum--;
  if(sortNum <= 0) {
    sortedLines++;
    sortNum = array.length-1;
  }
}


