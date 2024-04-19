<script>
    import ComponentItem from './ComponentItem.svelte';
    let components = [
      { title: 'Inobhutnahme', number: 1 },
      { title: 'Jugendliche', number: 2 },
      { title: 'Kinder', number: 3 },
      { title: 'Kleinkinder', number: 4 },
      { title: 'Pflegedienst', number: 5 },
      { title: 'FlexibleHilfe', number: 6 }
    ];
  </script>
  <body>
  
  
  
<div class="row">
    {#each components as component}
      <ComponentItem
        title={component.title}
        number={component.number}
      />
    {/each}
  </div>

  <div id='greyline' class='greyline'></div>

  </body>
  
  <style>

body {
      display: flex;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
.row {
    
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 900px;
    
    }


.greyline
{
background-color:#d9d9d9;
height:5px;
width:1100px;
border-radius:15px;
align-items: center;
position: absolute;
top:1150px;
z-index: -1;
}
  </style>