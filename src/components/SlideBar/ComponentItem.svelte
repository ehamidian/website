<script>
    export let title;
    export let number;
    let isHovered = false;
  
    function handleHover() {
      isHovered = !isHovered;
    }
  </script>
  
 <div
    class="component-item"
    class:is-hovered={isHovered}
    on:mouseover={handleHover}
    on:mouseout={handleHover}
  >
    <h2 class="title">{title}</h2>
    {#if isHovered}
      <span class="component-number">{number}</span>
    {/if}
  </div>
 
  
  <style>

  .component-item {
  background-color:#055466;
   color:#ffffff;
   height: 177px;
   width: 177px;
   border-radius: 10px;
   font-size: 16px;
   font-family: Nort;
   font-weight: bold;
   justify-content: center;
   align-items: center;
   margin: 10px;
   position: relative;
    flex-direction: column;
    }

    .title {
    margin: 20px;
  }
    .is-hovered {
      transform: scale(2.1);
    }
  
    .component-item.is-hovered .component-number {
    display: inline;
  }

  .number-item {
    display: inline-block;
    margin: 2px;
    font-size: 16px;
    cursor: pointer;
  }

  .number-item:hover {
    font-size: 36px;
  }
  .component-number {
      color:#ffffff;
      margin-top: auto;
      font-size: 14px;
      position: absolute;
      top:210;
      margin: 20px;

    }
  </style>