// Load the global css and the one for the active page

$('head').append('<link rel="stylesheet" href="/css/style.css">');

page_name = window.location.href.split('/').pop().split('.')[0]; 
$('head').append(`<link rel="stylesheet" href="/css/pages/${page_name}.css">`);