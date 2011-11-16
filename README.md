jSlots is 2k of slots magic. It turns any list (<ol> or <ul>) into a slot machine.

Options

$.jSlots.defaultOptions = {
    number : 3,          // number of slots
    winnerNumber : 1,    // list item number upon which to win, one-based index, NOT ZERO-BASED
    spinner : '',        // selector to start the slots on event
    spinEvent : 'click', // event to respond to
    onStart : $.noop,    // function to run on spin start,
    onEnd : $.noop,      // function to run on spin end
    onWin : $.noop,      // function to run on win. It is passed (winCount:Number, winners:Array)
    easing : 'swing',    // easing type for final spin
    time : 7000,         // total time of animation
    loops : 6            // number of rotations in the time
};