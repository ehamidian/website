
<script>
    import IconMessage from '$lib/images/IconMessage.svg';
    const titles = [
    { text: "Nichts mehr verpassen!", class: "title-1" },
    { text: "Abonniere jetzt unseren Newsletter!", class: "title-2" },
    { text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, \ntellus eget condimentum rhoncus.", class: "title-3" }
  ];
</script>
<section>
    
    
    <body>
        <div class="rectangle">
            <img id='icon-message' class="icon-message" src={IconMessage} alt="icon-message">
            <div class="rectangle-white"></div>

            {#each titles as title}
              <h2 class={title.class}>{title.text}</h2>
            {/each}
            <button class="button">Anmelden</button>
          </div>
       

          

    </body>
    


</section>



<style>

.title-1 {
color:#055466;
text-align:left;
vertical-align:text-top;
font-size:24px;
font-family:Nort;
font-weight: bold;
margin: 30px;
margin-bottom: 30px;
  }

.title-2 {
color:#055466;
text-align:left;
vertical-align:text-top;
font-size:18px;
font-family:Nort;
margin: 30px;
margin-bottom: 30px;;
  }

.title-3 {
color:#055466;
text-align:justify;
vertical-align:text-top;
font-size:14px;
font-family:Nort;
margin-left: 30px;
white-space: pre-line;
  }

  .button {
    width: 180px;
    height: 50px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    background-color: #ffffff;
    color: #057E81;
    padding: 10px 20px;
    border:1px solid #057e81;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }

body {
      display: flex;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
.rectangle {
width: 930px;
height: 250px;
border: 2px solid #055466;
border-radius: 10%;
top:2500px;
left:700;
position: absolute;
z-index: -1;
        }

.rectangle-white {
width: 100px;
height: 20px;
border: 2px solid #ffffff;
position: absolute;
background-color: white;
left:50px;
top:-10px 
    }

.icon-message{
width:100px;
height:50px;
position: absolute;
z-index: 1;
left:50px;
top:-30px;

   }
</style>