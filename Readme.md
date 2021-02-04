jQuery jSlots
jSlots es 2k de la magia de las máquinas tragamonedas jQuery. ¡Convierte cualquier lista ( <ol>o <ul>) en una máquina tragamonedas!

Opciones
Estas son las opciones, con sus valores predeterminados, y lo que hacen

$.jSlots.defaultOptions = {
    number : 3,          // Number: number of slots
    winnerNumber : 1,    // Number or Array: list item number(s) upon which to trigger a win, 1-based index, NOT ZERO-BASED
    spinner : '',        // CSS Selector: element to bind the start event to
    spinEvent : 'click', // String: event to start slots on this event
    onStart : $.noop,    // Function: runs on spin start,
    onEnd : $.noop,      // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.
    onWin : $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array, finalNumbers:Array)
    easing : 'swing',    // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.
    time : 7000,         // Number: total time of spin animation
    loops : 6            // Number: times it will spin during the animation
};
Uso
Adjunte jQuery (probado con éxito hasta v1.4.1)

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
Adjuntar el complemento jSlots

<script src="jquery.jSlots.js" charset="utf-8"></script>
Adjunte el complemento de aceleración (opcional pero MUY recomendado para una buena animación)

<script src="jquery.easing.1.3.js" charset="utf-8"></script>
Crea una lista y un elemento que hará girar las ranuras.

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
¡Apunte a la lista y conviértala en jSlot!

<script type="text/javascript" charset="utf-8">

    $('.slot').jSlots({
        spinner : '#playBtn',
        winnerNumber : 7
    });

</script>
El estilo depende de usted, pero jSlots proporciona un div jSlots-wrapper alrededor de sus listas que debería obtener overflow: hiddeny una altura establecida. A continuación, se muestran algunos estilos recomendados:

.jSlots-wrapper {
    overflow: hidden; /* to hide the magic */
    height: 20px; /* whatever the height of your list items are */
    display: inline-block; /* to size width correctly, can use float too, or width*/
    border: 1px solid #999;
}
