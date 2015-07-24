# Triangular.js

Small plugin for creating triangular scrolldown effect. Take a look at [demo](https://schrink.jsbin.com/sogono/13).

## Usage
  - Include jQuery 
  - Include [https://cdnjs.cloudflare.com/ajax/libs/waypoints/3.1.1/jquery.waypoints.min.js](https://cdnjs.cloudflare.com/ajax/libs/waypoints/3.1.1/jquery.waypoints.min.js)
  - Include triangular.js and triangular.css
  - Initialize triangular on any element

## Example
### HTML
    <!DOCTYPE html>
    <html>
    <head>
        ....
        <link rel="stylesheet" href="triangular.css">
        <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/3.1.1/jquery.waypoints.min.js"></script>
        <script src="triangular.js"></script>
    </head>
    <body>
        <div id="triangularize_me"></div>
    </body>
    </html>
    
### JS
Initilaize triangular: 

    $('#triangularize_me').triangles();

*Make sure that you initialize after document is ready - $(document).ready();* 

## Parameters 

You can change the number of triangles or the offset:

    $('#triangularize_me').triangles({
        noOfTriangles: 100, //default 200
        offsetTrigger: '20%' //default 30%
    });

