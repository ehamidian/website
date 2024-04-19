<script>

	import Subtract from '$lib/images/Subtract.png';
	import pic from '$lib/images/pic.png';
    import Subtract2 from '$lib/images/Subtract2.png';
	import pic2 from '$lib/images/pic2.png';
    import Subtract3 from '$lib/images/Subtract3.png';
	import pic3 from '$lib/images/pic3.png';
	import arrow from '$lib/images/arrow.svg';
 
    let title = "Angebote / Gruppen";
    let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    import { onMount } from 'svelte';
    let Home;
  
    onMount(() => {
    });
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	   
		
	
		<div>
			<img id='pic' class="pic" src= {pic} alt="pic">
			<img id='subtract' class="subtract" src={Subtract} alt="pic">
            <div id='blue-circle' class='blue-circle'></div>
		    <div id='yellow-circle' class='yellow-circle'></div>
		</div>
	
		
	
		<div id='ellipse17' class='ellipse17'></div>
		<div id='ellipse18' class='ellipse18'></div>
		<div id='ellipse19' class='ellipse19'></div>
		<div id='ellipse20' class='ellipse20'></div>
	
		<h1 class="big-title">Kindern eine <br> Heimat geben</h1>
		<h3 class="little-title">Ev. Kinderdorf Johannesstift e.V. - Kinder- und Jugendhilfe</h3>
	
		<div class="button-container2">
			<button class="button-green">Unterstützen</button>
			<button class="button-white">Mehr Erfahren</button>
		</div>
	
		<div>
			<p class="par-bold1">Zusammen sind wir <br> weniger alleine</p>
			<p class="par-bold2">E-Learning Tipps für <br> Kinder</p>
			<p class="par1">Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit.</p>
			<p class="par2">Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit.</p>
			<img class="arrow1" src={arrow} alt="arrow">
			<img class="arrow2" src={arrow} alt="arrow">
		</div>
	
        <div>
			<img id='pic2' class="pic2" src= {pic2} alt="pic">
			<img id='subtract2' class="subtract2" src={Subtract2} alt="pic">
            <div id='blue-circle2' class='blue-circle2'></div>
		</div>
	
		

        <div>
            <h1 class="title-angebote-gruppen">Angebote / Gruppen</h1>
            <p class="par3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow3" src={arrow} alt="arrow">
        </div>

        <div>
            <h1 class="title-elternarbeit">Elternarbeit</h1>
            <p class="par4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow4" src={arrow} alt="arrow">
        </div>

        <div>
			<img id='pic3' class="pic3" src= {pic3} alt="pic">
			<img id='subtract3' class="subtract3" src={Subtract3} alt="pic">
            <div id='blue-circle2' class='blue-circle2'></div>

		</div>
	
		
<style>


   .button-container2 {
   position: absolute;
   top: 500px;
   left: 300px;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   
   }
   
   .button-green{
   background-color:#057E81;
   height:47px;
   width:173px;
   border-radius:5px;
   color:#ffffff;
   text-align:center;
   vertical-align:text-top;
   font-size:13px;
   font-family:Nort;
   line-height:auto;
   border-style:hidden;
   outline:none;
   margin-right: 18px;
   }
   
   .button-white{
   background-color:#ffffff;
   color:#057e81;
   height:47px;
   width:173px;
   border:1px solid #057e81;
   border-radius:5px;
   text-align:center;
   vertical-align:text-top;
   font-size:13px;
   font-family:Nort;
   line-height:auto;
   }
   
   .blue-circle
   {
   background-color:#057E81;
   height:198.41378784179688px;
   width:199.46360778808594px;
   border-radius:50%;
   position:absolute;
   top:522px;
   right:90px;
   }
   
   .yellow-circle
   {
   background-color:#f8af00;
   height:412.57470703125px;
   width:412.57470703125px;
   border-radius:50%;
   position:absolute;
   right:148px;
   top:290px;
   }
   
   .pic
   {
   height:412.57470703125px;
   width:411.52490234375px;
   right:148px;
   top:290px;
   position:absolute;
   border-radius:50%;
   z-index: 1;
   }
   
   
   .subtract
   {
   height:412.57470703125px;
   width:411.52490234375px;
   top:400px;
   right:290px;
   position:absolute;
   border-radius:50%;
       }
    .subtract2
   {
   height:406.37px;
   width:406.37px;
   top:1200px;
   left:290px;
   position:absolute;
   border-radius:50%;
       }

    .pic2
   {
   background-color:#057E81;
   height:341.36px;
   width:340.5px;
   border-radius:50%;
   position:absolute;
   top:1300px;
   left:450px;
   z-index: 1;
   }

   .title-angebote-gruppen{
    color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 1300px;
   left: 900px;
    }

    .par3{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 1350px;
    left: 900px;
    }
   
   
   .arrow3{
    position: absolute;
    top: 1500px;
    left: 900px;  
    }
   

    .title-elternarbeit{
    color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 1800px;
   left: 500px;
    }

    .par4{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 1850px;
    left: 500px;
    margin-bottom: 20px;
    }
   
   
   .arrow4{
    position: absolute;
    top: 2000px;
    left: 500px;  
    }
    
    .blue-circle2
   {
   background-color:#057E81;
   height:198.41378784179688px;
   width:199.46360778808594px;
   border-radius:50%;
   position:absolute;
   top:1700px;
   right:20px;
   }
    .subtract3
   {
   height:406.37px;
   width:406.37px;
   top:1780px;
  right:-30px;
   position:absolute;
   border-radius:50%;
       }

    .pic3
   {
   background-color:#057E81;
   height:341.36px;
   width:340.5px;
   border-radius:50%;
   position:absolute;
   top:1750px;
   right:148px;
   z-index: 1;
   }

   


   .ellipse17
   {
   height:11px;
   width:11px;
   top:471px;
   left:152px;
   position:absolute;
   border-radius:50%;
   border:1px solid #057e81;
   }
   .ellipse18
   {
   background-color:#055466;
   height:11px;
   width:11px;
   top:514px;
   left:152px;
   position:absolute;
   border-radius:50%;
   }
   .ellipse19
   {
   background-color:#055466;
   height:11px;
   width:11px;
   top:557px;
   left:152px;
   position:absolute;
   border-radius:50%;
   }
   .ellipse20
   {
   background-color:#055466;
   height:11px;
   width:11px;
   top:600px;
   left:152px;
   position:absolute;
   border-radius:50%;
   }
   
   .little-title
   {
   color:#5f5f5f;
   text-align:left;
   vertical-align:text-top;
   font-size:14px;
   font-family:Nort;
   position: absolute;
   top: 250px;
   left: 300px;
   }
   
   .big-title
   {
   color:#003541;
   text-align:left;
   vertical-align:text-top;
   font-size:46px;
   font-family:Nort;
   font-weight:bold;
   text-transform: uppercase;
   line-height:50px;
   position: absolute;
   top: 320px;
   left: 300px;
   }
   
   .par-bold1{
   color:#5f5f5f;
   text-align:left;
   vertical-align:text-top;
   font-size:16px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:3px;
   line-height:28px;
   position: absolute;
   top: 620px;
   left: 300px;
   }
   
   .par-bold2{
    color:#5f5f5f;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    font-weight: bold;
    letter-spacing:3px;
    line-height:28px;
    position: absolute;
    top: 620px;
    left: 580px;
    }  
    
    .par1{
    color:#5f5f5f;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 690px;
    left: 300px;
    }
   
   .par2{
    color:#5f5f5f;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 690px;
    left: 580px;
    }
   
   
   .arrow1{
    position: absolute;
    top: 770px;
    left: 300px;  
    }
   
   .arrow2{
    position: absolute;
    top: 770px;
    left: 580px;  
    }
   
</style>

</section>


