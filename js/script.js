'use strict';

var blockToClick = document.querySelector('.clickable-blocks__upper');
var blockToHide = document.querySelector('.clickable-blocks__lower');

var changeVisability = function() {
  if (blockToHide.hasAttribute('hidden')) {
    blockToHide.removeAttribute('hidden');
} else {
    blockToHide.setAttribute('hidden', 'hidden');

}};

blockToClick.addEventListener('click', changeVisability);

