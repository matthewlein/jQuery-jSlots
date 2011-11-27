# jQuery jSlots

jSlots is 2k of jQuery slot machine magic. It turns any list (`<ol>` or `<ul>`) into a slot machine!

## Options

These are the options, with their default values, and what they do

    $.jSlots.defaultOptions = {
        number : 3,          // Number: number of slots
        winnerNumber : 1,    // Number: list item number upon which to trigger a win, 1-based index, NOT ZERO-BASED
        spinner : '',        // CSS Selector: element to bind the start event to
        spinEvent : 'click', // String: event to start slots on this event
        onStart : $.noop,    // Function: runs on spin start,
        onEnd : $.noop,      // Function: run on spin end
        onWin : $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array)
        easing : 'swing',    // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.
        time : 7000,         // Number: total time of spin animation
        loops : 6            // Number: times it will spin during the animation
    };
    
## Usage 

Attach jQuery (successfully tested down to v1.4.1)

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    
Attach jSlots plugin

    <script src="jquery.jSlots.js" charset="utf-8"></script>
    
Attach easing plugin (optional but HIGHLY recommended for nice animation)

    <script src="jquery.easing.1.3.js" charset="utf-8"></script>
    
Create a list and an element that will spin the slots

    <ul class="slot">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
    </ul>
    
    <!-- this button will start the spin -->
    <input type="button" id="playBtn" value="play">

Target the list and make it a jSlot!
    
    <script type="text/javascript" charset="utf-8">
        
        $('.slot').jSlots({
            spinner : '#playBtn',
            winnerNumber : 7
        });
        
    </script>
    
Styling is up to you, but jSlots supplies a jSlots-wrapper div around your lists that should get `overflow: hidden` and a height set on it. Here are some recommended styles:

    .jSlots-wrapper {
        overflow: hidden; /* to hide the magic */
        height: 20px; /* whatever the height of your list items are */
        display: inline-block; /* to size width correctly, can use float too, or width*/
        border: 1px solid #999;
    }