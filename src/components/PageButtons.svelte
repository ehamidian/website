<script>
  export let Inobhutnahme;
  export let Jugendliche
  export let Kinder
  export let Kleinkinder
  export let Pflegedienst
  export let FlexibleHilfe
  export let number;
  let isHovered = false;

  function handleHover() {
    isHovered = !isHovered;
  }
</script>

<div class="page-container">

<button
  class="page"
  class:is-hovered={isHovered}
  on:mouseover={handleHover}
  on:mouseout={handleHover}
>
  {Inobhutnahme}
  {#if isHovered}
    <span class="button-number">{number}</span>
  {/if}
</button>

<button
  class="page"
  class:is-hovered={isHovered}
  on:mouseover={handleHover}
  on:mouseout={handleHover}
>
  {Jugendliche}
  {#if isHovered}
    <span class="button-number">{number}</span>
  {/if}
</button>

<button
  class="page"
  class:is-hovered={isHovered}
  on:mouseover={handleHover}
  on:mouseout={handleHover}
>
  {Kinder}
  {#if isHovered}
    <span class="button-number">{number}</span>
  {/if}
</button>

<button
  class="page"
  class:is-hovered={isHovered}
  on:mouseover={handleHover}
  on:mouseout={handleHover}
>
  {Kleinkinder}
  {#if isHovered}
    <span class="button-number">{number}</span>
  {/if}
</button>

<button
  class="page"
  class:is-hovered={isHovered}
  on:mouseover={handleHover}
  on:mouseout={handleHover}
>
  {Pflegedienst}
  {#if isHovered}
    <span class="button-number">{number}</span>
  {/if}
</button>

<button
  class="page"
  class:is-hovered={isHovered}
  on:mouseover={handleHover}
  on:mouseout={handleHover}
>
  {FlexibleHilfe}
  {#if isHovered}
    <span class="button-number">{number}</span>
  {/if}
</button>

</div>

<style>
  .page-container {
   position: absolute;
   top: 1080px;
   left: 300px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   }
   
   .page
   {
   background-color:#055466;
   color:#ffffff;
   height: 177px;
   width: 177px;
   border-radius: 10px;
   font-size: 16px;
   font-family: Nort;
   font-weight: bold;
   margin-right: 10px;
   }

  .is-hovered {
    transform: scale(1.1); /* Make the button 10% larger on hover */
  }

  .button-number {
    position: absolute;
    right:300px;
    top: 1280px;
    transform: translateX(-50%);
    font-size: 12px;
    color: #fff;
    background-color: #000;
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>
  
